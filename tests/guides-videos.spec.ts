import { test, expect } from './fixtures/mock-api';

test.describe('Guides & Videos Content Flow @smoke', () => {
  test.beforeEach(async ({ mockApi }) => {
    await mockApi();
  });

  test('should render guides index page and navigate to individual guide', async ({
    page,
  }) => {
    await page.goto('/guides');
    await expect(page.locator('h1')).toBeVisible();

    const guideCardLinks = page.locator('a[href^="/guides/"]');
    const count = await guideCardLinks.count();

    if (count > 0) {
      const firstLink = guideCardLinks.first();
      await firstLink.click();

      await expect(page.locator('h1')).toBeVisible();

      // Check if Table of Contents or code blocks exist
      const codeBlocks = page.locator('pre code');
      if ((await codeBlocks.count()) > 0) {
        await expect(codeBlocks.first()).toBeVisible();
      }
    }
  });

  test('should render videos index page and verify video listings', async ({
    page,
  }) => {
    await page.goto('/videos');
    await expect(page.locator('h1')).toBeVisible();

    const videoCards = page.locator('a[href^="/videos/"]');
    if ((await videoCards.count()) > 0) {
      await expect(videoCards.first()).toBeVisible();
    }
  });
});
