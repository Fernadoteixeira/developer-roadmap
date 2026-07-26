# Internationalization Architecture

This project serves English (`en`), Spanish (`es`) and Brazilian Portuguese (`pt-BR`) through a Git-first, fully open-source localization architecture.

## Design goals

- No client-side i18n runtime for server-rendered Astro UI.
- No additional production dependency or lockfile churn.
- Stable, indexable locale URLs.
- Deterministic English fallback when localized content is unavailable.
- Translation assets remain ordinary JSON and Markdown files.
- CI blocks missing keys, placeholder drift, malformed localized Markdown and build regressions.
- React islands can use the same catalog through `src/i18n/client.ts`.

## URL contract

| Locale | Home | Roadmap example |
| --- | --- | --- |
| English | `/` | `/frontend` |
| Spanish | `/es` | `/es/frontend` |
| Brazilian Portuguese | `/pt-br` | `/pt-br/frontend` |

English is the canonical default and does not use a prefix. Legacy routes such as `/frontend.pt-br` permanently redirect to `/pt-br/frontend`.

The middleware rewrites localized URLs to the existing canonical Astro routes in-place. This avoids a second rendering phase and avoids duplicating the entire `src/pages` tree.

## UI messages

The shell catalogs live in:

```text
src/i18n/messages/
├── en.json
├── es.json
└── pt-BR.json
```

English is the source catalog. All locales must contain the same keys and preserve the same `{placeholder}` names.

Use the server helper in `.astro` files:

```ts
import { createTranslator, defaultLocale } from '../i18n';

const locale = Astro.locals.locale || defaultLocale;
const t = createTranslator(locale);
```

Use the client helper in React islands:

```ts
import { clientTranslate } from '../i18n/client';

const label = clientTranslate('nav.signUp');
```

## Localized roadmap content

Localized Markdown follows a suffix convention next to the English source:

```text
content/
├── authentication@node-id.md
├── authentication@node-id.es.md
└── authentication@node-id.pt-br.md
```

Nested index documents follow the same rule:

```text
content/topic/
├── index.md
├── index.es.md
└── index.pt-br.md
```

Resolution order is:

1. Exact requested locale.
2. English source.
3. `404` when neither exists.

The topic endpoint validates the resolved path before reading from disk, preventing traversal outside the roadmap content directory.

Top-level roadmap metadata uses the equivalent convention:

```text
frontend.md
frontend.es.md
frontend.pt-br.md
```

Localized files are variants of the same canonical roadmap ID. They never generate `.es` or `.pt-br` route IDs.

## SEO and accessibility

`BaseLayout.astro` emits:

- Dynamic `<html lang>`.
- `Content-Language`.
- Locale-aware canonical URLs.
- `hreflang` for `en`, `es`, `pt-BR` and `x-default`.
- Open Graph locale and alternate locales.
- A no-JavaScript language switcher that preserves the current canonical route.

## Formatting

Use the native helpers from `src/i18n/index.ts`:

- `formatNumber(locale, value, options)`
- `formatDate(locale, value, options)`
- `formatCurrency(locale, value, currency, options)`

Currency is always explicit. The formatter never silently converts monetary values.

## Quality commands

```bash
pnpm i18n:check
pnpm i18n:content
pnpm i18n:coverage
pnpm i18n:validate
pnpm test:e2e:i18n
```

The GitHub Actions workflow `.github/workflows/i18n.yml` runs catalog validation, localized-content validation, the production build and Chromium E2E tests. Coverage is uploaded as `artifacts/i18n-coverage.json`.

Set `STRICT_I18N_LINKS=1` to make Markdown link-target drift blocking. Without it, link differences are reported as warnings while missing sources, empty files and code-fence corruption remain blocking.

## OSS localization stack

The repository remains the source of truth and does not require an external service. Teams can add any of these optional OSS-compatible layers without changing the runtime contract:

| Layer | Recommended option | Purpose |
| --- | --- | --- |
| Runtime | Astro middleware + native `Intl` | Routing, rendering and formatting |
| Developer automation | Languine CLI or custom GitHub Actions | Detect and generate changed translations |
| Translation management | Weblate or self-hosted Tolgee | Review, terminology and approvals |
| Machine translation | LibreTranslate | Self-hosted translation suggestions |
| Editor integration | inlang Sherlock | In-editor catalog management |
| QA | Node scripts + Playwright + axe-core | Structural, visual and accessibility gates |

No optional translation platform should write directly to `master`. It should open a pull request so the same CI gates remain authoritative.

## Definition of 100% localized

A locale is complete only when all conditions below are met:

1. Shell catalog coverage is 100% with placeholder parity.
2. Roadmap metadata coverage is 100%.
3. Roadmap topic Markdown coverage is 100%.
4. No user-facing React island falls back to an English hard-coded literal.
5. Locale E2E passes on desktop and mobile.
6. Pseudo-localization and visual checks show no clipping or overflow.
7. Accessibility labels, errors, toasts, SEO metadata and generated documents are localized.

The runtime intentionally falls back to English while content migration is in progress. A fallback is operationally safe, but it does not count as translated coverage.
