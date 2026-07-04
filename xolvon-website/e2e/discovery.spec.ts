import { test, expect } from '@playwright/test';

test('Homepage loads and shows hero section', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(/Build systems that actually solve problems/i)).toBeVisible();
});

test('Navigation menu works', async ({ page }) => {
  await page.goto('/');
  const navLink = page.getByRole('link', { name: /projects/i });
  await navLink.click();
  // Ensure the page scrolls to the projects section
  await expect(page.locator('#projects')).toBeVisible();
});
