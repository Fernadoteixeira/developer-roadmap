import { expect, test } from '@playwright/test';

const localeCases = [
  {
    path: '/',
    lang: 'en',
    heading: 'Developer Roadmaps',
  },
  {
    path: '/es',
    lang: 'es',
    heading: 'Rutas para desarrolladores',
  },
  {
    path: '/pt-br',
    lang: 'pt-BR',
    heading: 'Roadmaps para desenvolvedores',
  },
];

test.describe('i18n routing and shell @smoke', () => {
  for (const localeCase of localeCases) {
    test(`${localeCase.lang} renders localized shell and SEO`, async ({
      page,
    }) => {
      await page.goto(localeCase.path);

      await expect(page.locator('html')).toHaveAttribute(
        'lang',
        localeCase.lang,
      );
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(
        localeCase.heading,
      );
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(
        4,
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    });
  }

  test('language switcher preserves the current canonical route', async ({
    page,
  }) => {
    await page.goto('/pt-br/qa');

    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
    await expect(
      page.locator('a[hreflang="es"][href="/es/qa"]').first(),
    ).toBeVisible();
    await expect(
      page.locator('a[hreflang="en"][href="/qa"]').first(),
    ).toBeVisible();
  });

  test('legacy locale suffix redirects to the canonical locale route', async ({
    request,
  }) => {
    const response = await request.get('/qa.pt-br', { maxRedirects: 0 });
    const location = response.headers().location;

    expect(response.status()).toBe(301);
    expect(new URL(location, 'http://127.0.0.1:3000').pathname).toBe(
      '/pt-br/qa',
    );
  });

  test('canonical tag reflects current locale for internal routes', async ({
    page,
  }) => {
    await page.goto('/es/courses/sql');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://roadmap.sh/es/courses/sql',
    );

    await page.goto('/pt-br/courses/sql');
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://roadmap.sh/pt-br/courses/sql',
    );
  });
});
