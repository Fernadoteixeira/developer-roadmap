import * as fs from 'fs';
import * as path from 'path';
import { translateTextWithDLX, translateTextWithGTX } from './dlx-translate';

const args = process.argv.slice(2);
const sourceFile = args[0];
const engine = args[1] || 'gtx';

if (!sourceFile) {
  console.error('Usage: node node_modules/tsx/dist/cli.mjs scripts/protect-translate.ts <source-file> [engine]');
  process.exit(1);
}

if (!fs.existsSync(sourceFile)) {
  console.error(`Source file not found: ${sourceFile}`);
  process.exit(1);
}

const targetFile = sourceFile.replace(/\.md$/, '.pt-br.md');

async function runTranslation() {
  try {
    let content = fs.readFileSync(sourceFile, 'utf-8');

    const tokens = new Map<string, string>();
    let tokenCounter = 1;

    const tokenize = (match: string) => {
      const token = `__PROTECTED_BLOCK_${String(tokenCounter++).padStart(5, '0')}__`;
      tokens.set(token, match);
      return token;
    };

    // 1. Protect YAML frontmatter
    content = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, tokenize);

    // 2. Protect fenced code blocks
    content = content.replace(/```[\s\S]*?```/g, tokenize);

    // 3. Protect inline code
    content = content.replace(/`[^`\r\n]+`/g, tokenize);

    // 4. Protect image tags completely
    content = content.replace(/!\[.*?\]\(.*?\)/g, tokenize);

    // 5. Protect URLs in standard markdown links
    content = content.replace(
      /\]\(([^)]+)\)/g,
      (match, url) => `](${tokenize(url)})`,
    );

    // Split tokenized content into paragraphs to avoid huge single API payloads
    const paragraphs = content.split(/(\r?\n\r?\n)/);
    const translatedParagraphs: string[] = [];

    const CHUNK_CHAR_LIMIT = 1500;
    let currentBatch = '';
    const delayMs = engine === 'gtx' ? 100 : 500;

    for (let i = 0; i < paragraphs.length; i++) {
      const p = paragraphs[i];
      // If it's a delimiter (\n\n), keep it directly
      if (/^\r?\n\r?\n$/.test(p)) {
        if (currentBatch.length > 0) {
          const translated = await translateChunk(currentBatch, engine);
          translatedParagraphs.push(translated);
          currentBatch = '';
          await new Promise((res) => setTimeout(res, delayMs));
        }
        translatedParagraphs.push(p);
        continue;
      }

      if (currentBatch.length + p.length > CHUNK_CHAR_LIMIT) {
        if (currentBatch.length > 0) {
          const translated = await translateChunk(currentBatch, engine);
          translatedParagraphs.push(translated);
          currentBatch = '';
          await new Promise((res) => setTimeout(res, delayMs));
        }
      }

      currentBatch += p;
    }

    if (currentBatch.length > 0) {
      const translated = await translateChunk(currentBatch, engine);
      translatedParagraphs.push(translated);
    }

    let translatedContent = translatedParagraphs.join('');

    // Restore tokens
    for (const [token, originalValue] of tokens.entries()) {
      translatedContent = translatedContent.split(token).join(originalValue);
    }

    // Write translated file directly
    fs.writeFileSync(targetFile, translatedContent, 'utf-8');

    console.log(`[Translator] Successfully translated: ${targetFile}`);
  } catch (error) {
    console.error(`[Translator Error] Failed for ${sourceFile}:`, error);
    process.exitCode = 1;
  }
}

async function translateChunk(text: string, selectedEngine: string): Promise<string> {
  // If the text only consists of protected tokens or whitespace, skip API call
  if (/^(__PROTECTED_BLOCK_\d+__|\s)*$/.test(text)) {
    return text;
  }

  if (selectedEngine === 'dlx') {
    try {
      return await translateTextWithDLX(text, {
        endpoint: 'http://localhost:1188/translate',
        targetLang: 'PT',
        maxRetries: 1,
        retryDelayMs: 1000,
      });
    } catch (err) {
      console.warn(`[DLX Fallback] DLX failed/rate-limited. Falling back to GTX engine...`);
      return await translateTextWithGTX(text, 'pt');
    }
  } else if (selectedEngine === 'gtx') {
    return await translateTextWithGTX(text, 'pt');
  } else {
    throw new Error(`Unsupported engine: ${selectedEngine}`);
  }
}

runTranslation();

