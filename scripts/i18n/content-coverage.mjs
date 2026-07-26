import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const dataRoot = path.join(root, 'src', 'data');
const outputDirectory = path.join(root, 'artifacts');
const outputPath = path.join(outputDirectory, 'i18n-coverage.json');
const localizedPattern = /\.(es|pt-br)\.md$/i;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

const markdownFiles = walk(dataRoot).filter((filePath) => filePath.endsWith('.md'));
const sourceFiles = markdownFiles.filter((filePath) => !localizedPattern.test(filePath));
const localeSuffixes = {
  es: '.es.md',
  'pt-BR': '.pt-br.md',
};
const coverage = {};

for (const [locale, suffix] of Object.entries(localeSuffixes)) {
  const translated = sourceFiles.filter((sourcePath) =>
    fs.existsSync(sourcePath.replace(/\.md$/, suffix)),
  ).length;

  coverage[locale] = {
    translated,
    total: sourceFiles.length,
    percentage:
      sourceFiles.length === 0
        ? 100
        : Number(((translated / sourceFiles.length) * 100).toFixed(2)),
  };
}

const report = {
  generatedAt: new Date().toISOString(),
  sourceLocale: 'en',
  sourceDocuments: sourceFiles.length,
  coverage,
};

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
console.log(`Coverage artifact written to ${path.relative(root, outputPath)}.`);
