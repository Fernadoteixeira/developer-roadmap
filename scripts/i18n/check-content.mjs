import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import matter from 'gray-matter';

const root = process.cwd();
const dataRoot = path.join(root, 'src', 'data');
const localizedPattern = /\.(es|pt-br)\.md$/i;
const errors = [];
const warnings = [];
let checked = 0;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function countCodeFences(content) {
  return (content.match(/^```/gm) || []).length;
}

function extractLinkTargets(content) {
  return [...content.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)]
    .map((match) => match[1])
    .sort();
}

for (const localizedPath of walk(dataRoot).filter((filePath) =>
  localizedPattern.test(filePath),
)) {
  checked += 1;
  const basePath = localizedPath.replace(localizedPattern, '.md');
  const relativePath = path.relative(root, localizedPath);

  if (!fs.existsSync(basePath)) {
    errors.push(`${relativePath}: source file not found`);
    continue;
  }

  const localized = matter(fs.readFileSync(localizedPath, 'utf8'));
  const source = matter(fs.readFileSync(basePath, 'utf8'));

  if (!localized.content.trim() && !Object.keys(localized.data).length) {
    errors.push(`${relativePath}: localized document is empty`);
  }

  const localizedFences = countCodeFences(localized.content);
  const sourceFences = countCodeFences(source.content);
  if (localizedFences !== sourceFences || localizedFences % 2 !== 0) {
    errors.push(
      `${relativePath}: code-fence mismatch (${localizedFences} localized vs ${sourceFences} source)`,
    );
  }

  const localizedLinks = extractLinkTargets(localized.content);
  const sourceLinks = extractLinkTargets(source.content);
  if (localizedLinks.join('|') !== sourceLinks.join('|')) {
    const message = `${relativePath}: Markdown link targets differ from source`;
    if (process.env.STRICT_I18N_LINKS === '1') {
      errors.push(message);
    } else {
      warnings.push(message);
    }
  }
}

for (const warning of warnings.slice(0, 50)) {
  console.warn(`warning: ${warning}`);
}
if (warnings.length > 50) {
  console.warn(`warning: ${warnings.length - 50} additional link warnings omitted`);
}

if (errors.length > 0) {
  console.error(`Localized content validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Localized content valid: ${checked} documents checked, ${warnings.length} non-blocking link warning(s).`,
);
