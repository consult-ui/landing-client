import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Consult Ai | Решаем задачи бизнеса/);
});

test('home link', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('home-page')).toBeVisible();
});

test('404 link', async ({ page }) => {
  await page.goto('/test-link');
  await expect(page.getByTestId('not-found')).toBeVisible();
});
