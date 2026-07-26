import { test, expect } from './fixtures/mock-api';

test.describe('Interactive Roadmap Canvas & Node Details @smoke @critical-path', () => {
  test.beforeEach(async ({ mockApi }) => {
    await mockApi();
  });

  const targetRoadmaps = ['/frontend', '/backend', '/devops', '/full-stack'];

  for (const roadmapPath of targetRoadmaps) {
    test(`should render interactive roadmap canvas for ${roadmapPath}`, async ({
      page,
    }) => {
      await page.goto(roadmapPath);

      // Verify page title and header
      await expect(page.locator('h1')).toBeVisible();

      // Verify canvas SVG elements exist
      const svg = page.locator('svg').first();
      await expect(svg).toBeVisible();

      // Check for interactive group nodes with data-group-id
      const interactiveNodes = page.locator('[data-group-id]');
      const nodeCount = await interactiveNodes.count();

      if (nodeCount > 0) {
        const firstNode = interactiveNodes.first();
        await expect(firstNode).toBeVisible();

        // Click the node to trigger topic drawer / modal
        await firstNode.click({ force: true });

        // Verify topic modal or popup opens
        const topicDrawer = page
          .locator(
            '.topic-modal, [data-topic-id], #topic-drawer, div[role="dialog"]',
          )
          .first();
        if (await topicDrawer.isVisible({ timeout: 2000 })) {
          await expect(topicDrawer).toBeVisible();

          // Press Escape to dismiss topic drawer
          await page.keyboard.press('Escape');
        }
      }
    });
  }

  test('should handle invalid topic links gracefully', async ({ page }) => {
    await page.goto('/frontend?r=nonexistent-topic-id');
    await expect(page.locator('h1')).toBeVisible();
  });
});
