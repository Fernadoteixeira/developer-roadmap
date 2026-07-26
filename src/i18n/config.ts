export const supportedLocales = ['en', 'es', 'pt-BR'] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'en';

export const localeSegments: Record<Locale, string> = {
  en: '',
  es: 'es',
  'pt-BR': 'pt-br',
};

export const localeFileSuffixes: Record<Locale, string> = {
  en: '',
  es: 'es',
  'pt-BR': 'pt-br',
};

export const localeMetadata: Record<
  Locale,
  {
    label: string;
    shortLabel: string;
    htmlLang: string;
    ogLocale: string;
  }
> = {
  en: {
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  es: {
    label: 'Español',
    shortLabel: 'ES',
    htmlLang: 'es',
    ogLocale: 'es_ES',
  },
  'pt-BR': {
    label: 'Português (Brasil)',
    shortLabel: 'PT',
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
  },
};

export function normalizeLocale(value?: string | null): Locale {
  const normalized = value?.trim().toLowerCase().replace('_', '-');

  if (normalized === 'pt' || normalized === 'pt-br') {
    return 'pt-BR';
  }

  if (normalized === 'es' || normalized?.startsWith('es-')) {
    return 'es';
  }

  return defaultLocale;
}
