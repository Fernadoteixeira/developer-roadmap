import enMessages from './messages/en.json';
import esMessages from './messages/es.json';
import ptBRMessages from './messages/pt-BR.json';
import {
  defaultLocale,
  localeMetadata,
  localeSegments,
  normalizeLocale,
  supportedLocales,
  type Locale,
} from './config';

export type MessageKey = keyof typeof enMessages;
export type MessageParams = Record<string, string | number>;

const dictionaries: Record<Locale, Record<MessageKey, string>> = {
  en: enMessages,
  es: esMessages,
  'pt-BR': ptBRMessages,
};

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split('/').filter(Boolean)[0]?.toLowerCase();

  if (firstSegment === 'pt-br') {
    return 'pt-BR';
  }

  if (firstSegment === 'es') {
    return 'es';
  }

  return defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const stripped = normalizedPath.replace(/^\/(?:en|es|pt-br)(?=\/|$)/i, '');

  return stripped || '/';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) {
    return path;
  }

  const match = path.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
  const pathname = stripLocalePrefix(match?.[1] || '/');
  const query = match?.[2] || '';
  const hash = match?.[3] || '';
  const segment = localeSegments[locale];
  const localizedPath = segment
    ? pathname === '/'
      ? `/${segment}`
      : `/${segment}${pathname}`
    : pathname;

  return `${localizedPath}${query}${hash}`;
}

export function translate(
  locale: Locale,
  key: MessageKey,
  params: MessageParams = {},
): string {
  const template = dictionaries[locale][key] || dictionaries.en[key] || key;

  return template.replace(/\{([a-zA-Z\d_]+)\}/g, (_, paramName: string) => {
    const value = params[paramName];
    return value === undefined ? `{${paramName}}` : String(value);
  });
}

export function createTranslator(locale: Locale) {
  return (key: MessageKey, params?: MessageParams) =>
    translate(locale, key, params);
}

export function formatNumber(
  locale: Locale,
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(localeMetadata[locale].htmlLang, options).format(
    value,
  );
}

export function formatDate(
  locale: Locale,
  value: Date | string | number,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' },
): string {
  return new Intl.DateTimeFormat(
    localeMetadata[locale].htmlLang,
    options,
  ).format(new Date(value));
}

export function formatCurrency(
  locale: Locale,
  value: number,
  currency: string,
  options: Omit<Intl.NumberFormatOptions, 'style' | 'currency'> = {},
): string {
  return formatNumber(locale, value, {
    ...options,
    style: 'currency',
    currency,
  });
}

export function getAlternateLocaleLinks(canonicalPath: string) {
  return supportedLocales.map((locale) => ({
    locale,
    hrefLang: localeMetadata[locale].htmlLang,
    href: getLocalizedPath(canonicalPath, locale),
  }));
}

export { defaultLocale, localeMetadata, normalizeLocale, supportedLocales };
export type { Locale };
