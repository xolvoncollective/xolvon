import { test, expect } from '@playwright/test';

test.describe('Navigation Flow', () => {
  test('clicking Projects navigates to projects section', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Projects' }).first().click();
    
    // Check URL has hash or page scrolled
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('clicking Contact Us opens Instagram in new tab', async ({ page, context }) => {
    await page.goto('/');
    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'Contact Us' }).first().click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    expect(newPage.url()).toContain('instagram.com/projectxolvon');
  });

  test('Project card navigates to project detail page and back', async ({ page }) => {
    await page.goto('/');
    // Scroll to projects so cards load
    await page.locator('#projects').scrollIntoViewIfNeeded();
    
    // Click on the first project card
    const firstProjectLink = page.locator('a[href^="/project/"]').first();
    const href = await firstProjectLink.getAttribute('href');
    await firstProjectLink.click();
    
    // Verify we navigated to the project page
    await expect(page).toHaveURL(new RegExp(href!));
    
    // Click back button
    await page.getByRole('link', { name: /Back to Projects/i }).click();
    await expect(page).toHaveURL(/.*\/$/);
  });
});
