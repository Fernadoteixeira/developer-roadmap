import { test, expect } from './fixtures/mock-api';
import AxeBuilder from '@axe-core/playwright';

test.describe('Automated Accessibility (a11y) Audits @a11y', () => {
  test.beforeEach(async ({ mockApi }) => {
    await mockApi();
  });

  test('homepage should pass core accessibility checks', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .disableRules(['color-contrast']) // Color contrast evaluated visually
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('login page should pass core accessibility checks', async ({ page }) => {
    await page.goto('/login');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
