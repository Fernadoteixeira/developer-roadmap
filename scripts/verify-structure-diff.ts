import * as fs from 'fs';
import * as path from 'path';

export interface StructuralMetrics {
  headings: string[];
  bulletCount: number;
  numberedCount: number;
  quoteCount: number;
  codeBlockCount: number;
  codeLanguages: string[];
  inlineCodeCount: number;
  imageUrls: string[];
  linkUrls: string[];
  linkPrefixes: string[];
  tableCount: number;
  htmlTags: string[];
  frontmatterKeys: string[];
}

export function extractMetrics(content: string): StructuralMetrics {
  const metrics: StructuralMetrics = {
    headings: [],
    bulletCount: 0,
    numberedCount: 0,
    quoteCount: 0,
    codeBlockCount: 0,
    codeLanguages: [],
    inlineCodeCount: 0,
    imageUrls: [],
    linkUrls: [],
    linkPrefixes: [],
    tableCount: 0,
    htmlTags: [],
    frontmatterKeys: [],
  };

  // 1. Frontmatter
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (fmMatch) {
    const fmLines = fmMatch[1].split(/\r?\n/);
    for (const line of fmLines) {
      const keyMatch = line.match(/^([a-zA-Z0-9_-]+):/);
      if (keyMatch) {
        metrics.frontmatterKeys.push(keyMatch[1]);
      }
    }
  }

  // Strip frontmatter for body analysis
  const body = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');

  // 2. Headings
  const headingMatches = body.match(/^#{1,6}\s+.*$/gm);
  if (headingMatches) {
    metrics.headings = headingMatches.map(
      (h) => h.match(/^(#{1,6})/)?.[1] || '#',
    );
  }

  // 3. Bullet points & list items
  const bullets = body.match(/^\s*[-*+]\s+/gm);
  if (bullets) {
    metrics.bulletCount = bullets.length;
  }

  const numbered = body.match(/^\s*\d+\.\s+/gm);
  if (numbered) {
    metrics.numberedCount = numbered.length;
  }

  // 4. Blockquotes
  const quotes = body.match(/^\s*>\s+/gm);
  if (quotes) {
    metrics.quoteCount = quotes.length;
  }

  // 5. Code blocks & languages
  const codeBlockMatches = body.match(/```[^\r\n]*[\s\S]*?```/g);
  if (codeBlockMatches) {
    metrics.codeBlockCount = codeBlockMatches.length;
    for (const block of codeBlockMatches) {
      const langMatch = block.match(/^```([a-zA-Z0-9_-]+)/);
      metrics.codeLanguages.push(langMatch ? langMatch[1] : 'plain');
    }
  }

  // 6. Inline code
  const inlineCodes = body.match(/`[^`\r\n]+`/g);
  if (inlineCodes) {
    metrics.inlineCodeCount = inlineCodes.length;
  }

  // 7. Image URLs
  const imgRegex = /!\[.*?\]\((.*?)\)/g;
  let match: RegExpExecArray | null;
  while ((match = imgRegex.exec(body)) !== null) {
    metrics.imageUrls.push(match[1]);
  }

  // 8. Link URLs & Link Prefixes (@official@, @article@, etc.)
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  while ((match = linkRegex.exec(body)) !== null) {
    if (!match.input.substring(match.index - 1, match.index).endsWith('!')) {
      const linkText = match[1];
      metrics.linkUrls.push(match[2]);
      const prefixMatch = linkText.match(/@([a-z.]+)@/);
      if (prefixMatch) {
        metrics.linkPrefixes.push(prefixMatch[1]);
      }
    }
  }

  // 9. Tables
  const tableRows = body.match(/^\s*\|.*\|\s*$/gm);
  if (tableRows) {
    metrics.tableCount = tableRows.length;
  }

  // 10. HTML/MDX Tags
  const htmlTagMatches = body.match(/<\/?([a-zA-Z0-9-]+)[^>]*>/g);
  if (htmlTagMatches) {
    metrics.htmlTags = htmlTagMatches.map((t) => {
      const tagMatch = t.match(/<\/?([a-zA-Z0-9-]+)/);
      return tagMatch ? tagMatch[1].toLowerCase() : 'tag';
    });
  }

  return metrics;
}

export function compareFiles(sourcePath: string, targetPath: string) {
  if (!fs.existsSync(sourcePath) || !fs.existsSync(targetPath)) {
    return {
      status: 'MISSING',
      error: `File missing: ${sourcePath} or ${targetPath}`,
    };
  }

  const sourceContent = fs.readFileSync(sourcePath, 'utf-8');
  const targetContent = fs.readFileSync(targetPath, 'utf-8');

  const sourceMetrics = extractMetrics(sourceContent);
  const targetMetrics = extractMetrics(targetContent);

  const diffs: string[] = [];

  if (sourceMetrics.headings.join(',') !== targetMetrics.headings.join(',')) {
    diffs.push(
      `Headings mismatch: EN [${sourceMetrics.headings.join(',')}] vs PT [${targetMetrics.headings.join(',')}]`,
    );
  }

  if (sourceMetrics.bulletCount !== targetMetrics.bulletCount) {
    diffs.push(
      `Bullets mismatch: EN (${sourceMetrics.bulletCount}) vs PT (${targetMetrics.bulletCount})`,
    );
  }

  if (sourceMetrics.numberedCount !== targetMetrics.numberedCount) {
    diffs.push(
      `Numbered items mismatch: EN (${sourceMetrics.numberedCount}) vs PT (${targetMetrics.numberedCount})`,
    );
  }

  if (sourceMetrics.quoteCount !== targetMetrics.quoteCount) {
    diffs.push(
      `Blockquotes mismatch: EN (${sourceMetrics.quoteCount}) vs PT (${targetMetrics.quoteCount})`,
    );
  }

  if (sourceMetrics.codeBlockCount !== targetMetrics.codeBlockCount) {
    diffs.push(
      `Code blocks mismatch: EN (${sourceMetrics.codeBlockCount}) vs PT (${targetMetrics.codeBlockCount})`,
    );
  }

  if (
    sourceMetrics.codeLanguages.join(',') !==
    targetMetrics.codeLanguages.join(',')
  ) {
    diffs.push(
      `Code block languages mismatch: EN [${sourceMetrics.codeLanguages.join(',')}] vs PT [${targetMetrics.codeLanguages.join(',')}]`,
    );
  }

  if (sourceMetrics.inlineCodeCount !== targetMetrics.inlineCodeCount) {
    diffs.push(
      `Inline code mismatch: EN (${sourceMetrics.inlineCodeCount}) vs PT (${targetMetrics.inlineCodeCount})`,
    );
  }

  if (sourceMetrics.imageUrls.join(',') !== targetMetrics.imageUrls.join(',')) {
    diffs.push(`Image URLs mismatch`);
  }

  if (sourceMetrics.linkUrls.join(',') !== targetMetrics.linkUrls.join(',')) {
    diffs.push(`Link URLs mismatch`);
  }

  if (
    sourceMetrics.linkPrefixes.join(',') !==
    targetMetrics.linkPrefixes.join(',')
  ) {
    diffs.push(
      `Link type prefixes (@official@, @article@, etc.) mismatch: EN [${sourceMetrics.linkPrefixes.join(',')}] vs PT [${targetMetrics.linkPrefixes.join(',')}]`,
    );
  }

  if (sourceMetrics.tableCount !== targetMetrics.tableCount) {
    diffs.push(
      `Tables mismatch: EN (${sourceMetrics.tableCount}) vs PT (${targetMetrics.tableCount})`,
    );
  }

  if (sourceMetrics.htmlTags.join(',') !== targetMetrics.htmlTags.join(',')) {
    diffs.push(
      `HTML/MDX tags mismatch: EN [${sourceMetrics.htmlTags.join(',')}] vs PT [${targetMetrics.htmlTags.join(',')}]`,
    );
  }

  if (
    sourceMetrics.frontmatterKeys.join(',') !==
    targetMetrics.frontmatterKeys.join(',')
  ) {
    diffs.push(`Frontmatter keys mismatch`);
  }

  return {
    status: diffs.length === 0 ? 'PERFECT_MATCH' : 'STRUCTURAL_DIFF',
    diffs,
    sourceMetrics,
    targetMetrics,
  };
}

// CLI Mode
const args = process.argv.slice(2);
if (args.length >= 2) {
  const source = args[0];
  const target = args[1];
  const result = compareFiles(source, target);
  console.log(JSON.stringify(result, null, 2));
}
