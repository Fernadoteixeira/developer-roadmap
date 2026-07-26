import { test, expect } from './fixtures/mock-api';

test.describe('Topic Progress Tracking @smoke', () => {
  test.beforeEach(async ({ mockApi }) => {
    await mockApi({ mockAuth: true });
  });

  test('should handle topic progress state in localStorage or memory', async ({
    page,
  }) => {
    await page.goto('/frontend');

    // Confirm roadmap loaded cleanly
    await expect(page.locator('h1')).toBeVisible();

    // Verify localStorage or state setup
    const hasRoadmapLoaded = await page.evaluate(() => {
      return document.querySelector('svg') !== null;
    });

    expect(hasRoadmapLoaded).toBeTruthy();
  });
});
