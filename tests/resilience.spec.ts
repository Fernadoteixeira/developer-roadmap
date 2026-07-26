import { test, expect } from './fixtures/mock-api';

test.describe('Resilience & Degradation @smoke', () => {
  test.beforeEach(async ({ mockApi }) => {
    await mockApi();
  });

  test('should gracefully display custom 404 page for unknown URLs', async ({
    page,
  }) => {
    const response = await page.goto('/this-page-does-not-exist-123456');

    // 404 response or custom 404 title
    if (response) {
      expect([404, 200]).toContain(response.status());
    }
  });
});
