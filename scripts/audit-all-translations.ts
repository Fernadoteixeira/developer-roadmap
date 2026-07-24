import * as fs from 'fs';
import * as path from 'path';
import { compareFiles } from './verify-structure-diff';

function findPtBrFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.translation-state') {
        findPtBrFiles(filePath, fileList);
      }
    } else if (file.endsWith('.pt-br.md')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function runFullAudit() {
  const rootDir = process.cwd();
  const ptBrFiles = findPtBrFiles(rootDir);

  console.log(`Auditing ${ptBrFiles.length} translated files...`);

  let perfectCount = 0;
  let diffCount = 0;
  const issues: any[] = [];

  for (const targetPath of ptBrFiles) {
    const sourcePath = targetPath.replace(/\.pt-br\.md$/, '.md');
    const result = compareFiles(sourcePath, targetPath);

    if (result.status === 'PERFECT_MATCH') {
      perfectCount++;
    } else {
      diffCount++;
      issues.push({
        targetPath: path.relative(rootDir, targetPath),
        diffs: result.diffs,
      });
    }
  }

  console.log('=== Translation Structural Audit Summary ===');
  console.log(`Total Translated Files Evaluated: ${ptBrFiles.length}`);
  console.log(`Perfect Structural Matches (1:1): ${perfectCount}`);
  console.log(`Structural Differences Found:     ${diffCount}`);

  if (issues.length > 0) {
    console.log('\nIssues Found:');
    console.log(JSON.stringify(issues, null, 2));
  }
}

runFullAudit();
