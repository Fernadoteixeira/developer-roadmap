/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    locale: import('./i18n/config').Locale;
    canonicalPath: string;
  }
}

interface Window {
  __ROADMAP_LOCALE__: import('./i18n/config').Locale;
}

interface ImportMetaEnv {
  GITHUB_SHA: string;
  PUBLIC_API_URL: string;
  PUBLIC_APP_URL: string;
  PUBLIC_AVATAR_BASE_URL: string;
  PUBLIC_EDITOR_APP_URL: string;
  PUBLIC_COURSE_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
