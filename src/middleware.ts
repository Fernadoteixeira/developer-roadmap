import { defineMiddleware } from 'astro:middleware';
import {
  getLocaleFromPath,
  getLocalizedPath,
  localeMetadata,
  normalizeLocale,
  stripLocalePrefix,
} from './i18n';

const BYPASS_PREFIXES = [
  '/_astro',
  '/api',
  '/manifest',
  '/images',
  '/fonts',
  '/icons',
  '/jsons',
  '/pdfs',
];

function shouldBypass(pathname: string): boolean {
  return BYPASS_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function hasLocalePrefix(pathname: string): boolean {
  return /^\/(?:en|es|pt-br)(?=\/|$)/i.test(pathname);
}

function getReferrerLocale(request: Request, currentOrigin: string) {
  const referrer = request.headers.get('referer');
  const fetchMode = request.headers.get('sec-fetch-mode');

  if (!referrer || fetchMode === 'navigate') {
    return null;
  }

  try {
    const referrerUrl = new URL(referrer);
    if (referrerUrl.origin !== currentOrigin) {
      return null;
    }

    return hasLocalePrefix(referrerUrl.pathname)
      ? getLocaleFromPath(referrerUrl.pathname)
      : null;
  } catch {
    return null;
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search, origin } = context.url;

  if (shouldBypass(pathname)) {
    return next();
  }

  const legacyLocaleMatch = pathname.match(/^\/(.+)\.(en|es|pt-br)\/?$/i);

  if (legacyLocaleMatch) {
    const [, canonicalResourcePath, legacyLocale] = legacyLocaleMatch;
    const redirectPath = getLocalizedPath(
      `/${canonicalResourcePath}`,
      normalizeLocale(legacyLocale),
    );

    return context.redirect(`${redirectPath}${search}`, 301);
  }

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return context.redirect(`${stripLocalePrefix(pathname)}${search}`, 301);
  }

  const locale =
    (hasLocalePrefix(pathname) && getLocaleFromPath(pathname)) ||
    getReferrerLocale(context.request, origin) ||
    getLocaleFromPath(pathname);
  const canonicalPath = stripLocalePrefix(pathname);

  context.locals.locale = locale;
  context.locals.canonicalPath = canonicalPath;

  const response = await next(`${canonicalPath}${search}`);
  response.headers.set('Content-Language', localeMetadata[locale].htmlLang);
  response.headers.set('X-Content-Locale', locale);

  return response;
});
