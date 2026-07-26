import { test as base } from '@playwright/test';

export type MockOptions = {
  mockAuth?: boolean;
  userEmail?: string;
};

/**
 * Custom Playwright fixture to inject API interceptors and auth mocks.
 */
export const test = base.extend<{
  mockApi: (options?: MockOptions) => Promise<void>;
}>({
  mockApi: async ({ page }, use) => {
    const setupMocks = async (options: MockOptions = {}) => {
      // Mock stats endpoint
      await page.route('**/v1-stats.json', async (route) => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            users: 1500000,
            roadmaps: 55,
            guides: 120,
          }),
        });
      });

      // Mock health check
      await page.route('**/v1-health', async (route) => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ status: 'ok', uptime: 3600 }),
        });
      });

      // Mock Auth Login Endpoint if requested
      await page.route('**/v1-login', async (route) => {
        const json = await route.request().postDataJSON();
        if (
          json?.email === 'test@example.com' &&
          json?.password === 'Password123!'
        ) {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
              token: 'mock-jwt-token-123456789',
              isNewUser: false,
            }),
          });
        } else {
          await route.fulfill({
            status: 401,
            contentType: 'application/json',
            body: JSON.stringify({
              message: 'Invalid email or password.',
            }),
          });
        }
      });

      // Mock signup endpoint
      await page.route('**/v1-signup', async (route) => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            token: 'mock-jwt-token-signup',
            isNewUser: true,
          }),
        });
      });

      // Optional Auth Cookie injection
      if (options.mockAuth) {
        await page.context().addCookies([
          {
            name: 'jwt',
            value: 'mock-jwt-token-123456789',
            domain: 'localhost',
            path: '/',
          },
        ]);
      }
    };

    await use(setupMocks);
  },
});

export { expect } from '@playwright/test';
