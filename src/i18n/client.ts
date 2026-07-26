import {
  createTranslator,
  defaultLocale,
  normalizeLocale,
  type MessageKey,
  type MessageParams,
} from './index';

export function getClientLocale() {
  if (typeof document === 'undefined') {
    return defaultLocale;
  }

  return normalizeLocale(document.documentElement.lang);
}

export function clientTranslate(
  key: MessageKey,
  params?: MessageParams,
): string {
  return createTranslator(getClientLocale())(key, params);
}
