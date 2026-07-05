import { test, expect } from '@playwright/test';

test.describe('Responsive Behavior', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // Mobile viewport

  test('hamburger menu toggles correctly on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Desktop navigation should be hidden, check mobile toggle
    const toggleBtn = page.getByLabel('Toggle menu');
    await expect(toggleBtn).toBeVisible();
    
    // Click toggle to open menu
    await toggleBtn.click();
    
    // Mobile menu link should be visible
    const mobileHomeLink = page.getByRole('link', { name: 'Home' }).last(); 
    await expect(mobileHomeLink).toBeVisible();
    
    // Click link closes menu
    await mobileHomeLink.click();
    await expect(toggleBtn).toBeVisible();
  });
});
