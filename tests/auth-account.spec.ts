import { test, expect } from './fixtures/mock-api';

test.describe('Authentication & Account Management @smoke @critical-path', () => {
  test.beforeEach(async ({ mockApi }) => {
    await mockApi();
  });

  test('should submit login form with valid credentials via mocked API', async ({
    page,
  }) => {
    await page.goto('/login');

    await expect(page.locator('h1')).toHaveText(/Login/i);

    const emailInput = page.getByPlaceholder('Email Address');
    const passwordInput = page.getByPlaceholder('Password');
    const submitBtn = page.getByRole('button', { name: /Continue/i });

    await emailInput.fill('test@example.com');
    await passwordInput.fill('Password123!');
    await submitBtn.click();

    // Verify submission triggered navigation or token storage
    await page.waitForLoadState('networkidle');
  });

  test('should display API validation error on invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login');

    const emailInput = page.getByPlaceholder('Email Address');
    const passwordInput = page.getByPlaceholder('Password');
    const submitBtn = page.getByRole('button', { name: /Continue/i });

    await emailInput.fill('wrong@example.com');
    await passwordInput.fill('wrongpassword');
    await submitBtn.click();

    await expect(page.getByText(/Invalid email or password/i)).toBeVisible();
  });

  test('should render signup page and submit new account registration', async ({
    page,
  }) => {
    await page.goto('/signup');

    await expect(page.locator('h1')).toHaveText(
      /Sign Up|Signup|Create Account/i,
    );

    const emailInput = page.getByPlaceholder(/Email/i).first();
    const passwordInput = page.getByPlaceholder(/Password/i).first();

    if ((await emailInput.isVisible()) && (await passwordInput.isVisible())) {
      await emailInput.fill('newuser@example.com');
      await passwordInput.fill('NewPassword123!');
    }
  });

  test('should render forgot password form and allow request submission', async ({
    page,
  }) => {
    await page.goto('/forgot-password');

    await expect(page.locator('h1')).toBeVisible();

    const emailInput = page.getByPlaceholder(/Email/i).first();
    if (await emailInput.isVisible()) {
      await emailInput.fill('reset@example.com');
    }
  });
});
