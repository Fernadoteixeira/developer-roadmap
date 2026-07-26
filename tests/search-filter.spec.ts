import { test, expect } from './fixtures/mock-api';

test.describe('Global Search & Filter Navigation @smoke @critical-path', () => {
  test.beforeEach(async ({ mockApi }) => {
    await mockApi();
  });

  test('should open command menu via keyboard shortcut and perform search', async ({
    page,
  }) => {
    await page.goto('/');

    // Dispatch Command+K event or press keyboard shortcut
    await page.keyboard.press('Control+k');

    const searchInput = page.getByPlaceholder(/Search roadmaps, guides/i);
    await expect(searchInput).toBeVisible();

    // Type search query
    await searchInput.fill('Backend');

    // Assert search result matches 'Backend'
    const resultItem = page.getByText(/Backend Developer/i).first();
    await expect(resultItem).toBeVisible();

    // Keyboard navigation (ArrowDown -> Enter)
    await searchInput.press('ArrowDown');
    await searchInput.press('Enter');

    // Should navigate to target roadmap page
    await expect(page).toHaveURL(/\/backend/);
  });

  test('should dismiss search modal on Escape key press', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Control+k');

    const searchInput = page.getByPlaceholder(/Search roadmaps, guides/i);
    await expect(searchInput).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(searchInput).not.toBeVisible();
  });

  test('should render empty search results gracefully for invalid queries', async ({
    page,
  }) => {
    await page.goto('/');

    await page.keyboard.press('Control+k');

    const searchInput = page.getByPlaceholder(/Search roadmaps, guides/i);
    await searchInput.fill('xyzunmatchedquery999');

    await expect(page.getByText('No results found')).toBeVisible();
  });
});
