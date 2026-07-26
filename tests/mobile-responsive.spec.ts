import { test, expect } from './fixtures/mock-api';

test.describe('Mobile Viewport & Responsiveness @smoke', () => {
  test.use({ viewport: { width: 375, height: 667 }, isMobile: true });

  test.beforeEach(async ({ mockApi }) => {
    await mockApi();
  });

  test('should render navigation cleanly on mobile screens', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
  });

  test('should render roadmap view on mobile viewport', async ({ page }) => {
    await page.goto('/frontend');

    await expect(page.locator('h1')).toBeVisible();
  });
});
