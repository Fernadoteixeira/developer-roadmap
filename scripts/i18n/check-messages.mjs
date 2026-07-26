import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const messageDirectory = path.join(root, 'src', 'i18n', 'messages');
const locales = ['en', 'es', 'pt-BR'];
const placeholderPattern = /\{([a-zA-Z\d_]+)\}/g;

function readMessages(locale) {
  const filePath = path.join(messageDirectory, `${locale}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function placeholders(value) {
  return [...value.matchAll(placeholderPattern)]
    .map((match) => match[1])
    .sort();
}

const catalogs = Object.fromEntries(
  locales.map((locale) => [locale, readMessages(locale)]),
);
const sourceKeys = Object.keys(catalogs.en).sort();
const errors = [];

for (const locale of locales) {
  const catalog = catalogs[locale];
  const keys = Object.keys(catalog).sort();
  const missing = sourceKeys.filter((key) => !(key in catalog));
  const extra = keys.filter((key) => !(key in catalogs.en));

  for (const key of missing) {
    errors.push(`[${locale}] missing key: ${key}`);
  }
  for (const key of extra) {
    errors.push(`[${locale}] unknown key: ${key}`);
  }

  for (const key of sourceKeys) {
    const value = catalog[key];
    if (typeof value !== 'string' || value.trim().length === 0) {
      errors.push(`[${locale}] empty or invalid message: ${key}`);
      continue;
    }

    const sourcePlaceholders = placeholders(catalogs.en[key]);
    const translatedPlaceholders = placeholders(value);
    if (sourcePlaceholders.join('|') !== translatedPlaceholders.join('|')) {
      errors.push(
        `[${locale}] placeholder mismatch in ${key}: expected ${sourcePlaceholders.join(', ') || 'none'}, received ${translatedPlaceholders.join(', ') || 'none'}`,
      );
    }
  }
}

if (errors.length > 0) {
  console.error(`i18n catalog validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `i18n catalogs valid: ${locales.length} locales, ${sourceKeys.length} keys, placeholder parity preserved.`,
);
