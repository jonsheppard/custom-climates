const { test, expect } = require('@playwright/test');

test.describe('Smoke Tests - Critical Site Functionality', () => {
  test('homepage loads without errors', async ({ page }) => {
    await page.goto('/');
    
    // Check page loads successfully
    await expect(page).toHaveTitle(/Custom Climates/);
    
    // Verify critical content is present
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    
    // Check for no console errors
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait a moment for any potential errors
    await page.waitForTimeout(1000);
    
    // Fail if there are console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to key pages
    const navLinks = [
      { href: '/about', title: 'About' },
      { href: '/services', title: 'Services' },
      { href: '/contact', title: 'Contact' },
      { href: '/how-it-works', title: 'How It Works' },
      { href: '/case-studies', title: 'Case Studies' }
    ];
    
    for (const link of navLinks) {
      await page.goto(link.href);
      await expect(page).toHaveTitle(new RegExp(link.title, 'i'));
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('critical components render properly', async ({ page }) => {
    await page.goto('/');
    
    // Check for essential components
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Verify hero section exists
    await expect(page.locator('main section').first()).toBeVisible();
    
    // Check for CTA buttons
    const ctaButtons = page.locator('button, a[href*="tel"], a[href*="mailto"]');
    await expect(ctaButtons.first()).toBeVisible();
  });

  test('phone number is clickable', async ({ page }) => {
    await page.goto('/');
    
    // Look for phone number links
    const phoneLinks = page.locator('a[href^="tel:"]');
    await expect(phoneLinks.first()).toBeVisible();
    
    // Verify phone number format
    const phoneHref = await phoneLinks.first().getAttribute('href');
    expect(phoneHref).toMatch(/^tel:\+?[\d\s\-\(\)]+$/);
  });

  test('forms are accessible', async ({ page }) => {
    await page.goto('/contact');
    
    // Check form elements are present
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    
    // Verify form has proper Netlify attributes
    const form = page.locator('form');
    await expect(form).toHaveAttribute('data-netlify', 'true');
  });
}); 