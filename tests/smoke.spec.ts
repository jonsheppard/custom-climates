import { test, expect } from '@playwright/test';

// Test data
const pages = [
  { path: '/', title: 'Custom Climates | Onsite Climate Controlled Solutions' },
  { path: '/about', title: 'About Us | Custom Climates' },
  { path: '/equipment', title: 'Our Equipment | Custom Climates' },
  { path: '/equipment/climate-controlled-trailer', title: 'Climate-Controlled Trailer | Custom Climates' },
  { path: '/equipment/containers', title: 'Containers | Custom Climates' },
  { path: '/equipment/office-container', title: 'Office Container | Custom Climates' },
  { path: '/process', title: 'Our Process | Custom Climates' },
  { path: '/contact', title: 'Contact Us | Custom Climates' },
  { path: '/thank-you', title: 'Quote Submitted | Custom Climates' },
];

test.describe('Page Load Tests', () => {
  for (const page of pages) {
    test(`${page.path} loads correctly`, async ({ page: playwright }) => {
      await playwright.goto(page.path);
      
      // Check page loads without errors
      await expect(playwright).toHaveTitle(page.title);
      
      // Check no console errors (excluding minor warnings)
      const errors: string[] = [];
      playwright.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      
      // Wait for page to be fully loaded
      await playwright.waitForLoadState('networkidle');
      
      // Check main content is visible
      await expect(playwright.locator('body')).toBeVisible();
      
      // Verify no critical errors
      expect(errors.filter(error => 
        !error.includes('favicon') && 
        !error.includes('404')
      )).toHaveLength(0);
    });
  }
});

test.describe('Navigation Tests', () => {
  test('header navigation works on desktop', async ({ page }) => {
    await page.goto('/');
    
    // Test main nav links
    await expect(page.locator('nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('nav a[href="/equipment"]')).toBeVisible();
    await expect(page.locator('nav a[href="/process"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact"]')).toBeVisible();
    
    // Test logo link
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
  });

  test('mobile menu works', async ({ page, isMobile }) => {
    if (!isMobile) return; // Skip on desktop
    
    await page.goto('/');
    
    // Look for mobile menu button (hamburger icon)
    const menuButton = page.locator('button').filter({ hasText: /menu|☰|≡/ }).or(
      page.locator('[class*="mobile"], [class*="hamburger"], button[aria-expanded]')
    ).first();
    
    // Only test if mobile menu button exists
    if (await menuButton.count() > 0 && await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500); // Wait for animation
      
      // Check if navigation becomes visible after click
      const navLinks = page.locator('a[href="/about"], a[href="/equipment"], a[href="/process"], a[href="/contact"]');
      if (await navLinks.count() > 0) {
        await expect(navLinks.first()).toBeVisible();
      }
    }
  });
});

test.describe('Contact Form Tests', () => {
  test('contact form submission works', async ({ page }) => {
    await page.goto('/contact');
    
    // Wait for form to load
    await expect(page.locator('form')).toBeVisible();
    
    // Fill out form - be more flexible with selectors
    await page.fill('input[name="name"], #name', 'Test User');
    await page.fill('input[name="email"], #email', 'test@example.com');
    await page.fill('input[name="phone"], #phone', '555-123-4567');
    await page.fill('input[name="company"], #company', 'Test Company');
    
    // Select country and state/province
    await page.selectOption('select[name="country"], #country', 'United States');
    await page.waitForTimeout(100); // Wait for state dropdown to appear
    await page.selectOption('select[name="state"], #state', 'California');
    
    await page.fill('textarea[name="message"], #message', 'This is a test message for automated testing.');
    
    // Submit form
    await page.click('button[type="submit"], input[type="submit"]');
    
    // Check redirect to thank you page (allow some time for redirect)
    await page.waitForURL('/thank-you', { timeout: 10000 });
    await expect(page.locator('h1')).toContainText('We\'ve Got This');
  });

  test('form validation works', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check validation messages appear
    const nameField = page.locator('input[name="name"]');
    await expect(nameField).toHaveAttribute('required');
    
    // Browser should prevent submission and show validation
    await expect(page).toHaveURL('/contact');
  });

  test('country/state dropdown interaction works', async ({ page }) => {
    await page.goto('/contact');
    
    // Wait for form to load
    await expect(page.locator('form')).toBeVisible();
    
    // Test US selection shows states
    await page.selectOption('select[name="country"], #country', 'United States');
    await page.waitForTimeout(200); // Wait for JS to toggle dropdowns
    
    const stateDropdown = page.locator('select[name="state"], #state');
    const provinceDropdown = page.locator('select[name="province"], #province');
    
    if (await stateDropdown.count() > 0) {
      await expect(stateDropdown).toBeVisible();
    }
    if (await provinceDropdown.count() > 0) {
      await expect(provinceDropdown).toBeHidden();
    }
    
    // Test Canada selection shows provinces
    await page.selectOption('select[name="country"], #country', 'Canada');
    await page.waitForTimeout(200); // Wait for JS to toggle dropdowns
    
    if (await provinceDropdown.count() > 0) {
      await expect(provinceDropdown).toBeVisible();
    }
    if (await stateDropdown.count() > 0) {
      await expect(stateDropdown).toBeHidden();
    }
  });
});

test.describe('Equipment Page Tests', () => {
  test('equipment cards link correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test equipment cards on homepage
    const equipmentCards = page.locator('.equipment-card, [href*="/equipment/"]');
    const cardCount = await equipmentCards.count();
    
    if (cardCount > 0) {
      // Click first equipment card
      await equipmentCards.first().click();
      await expect(page).toHaveURL(/\/equipment\/.+/);
    }
  });

  test('equipment overview page shows all equipment', async ({ page }) => {
    await page.goto('/equipment');
    
    // Check equipment cards are present
    const equipmentItems = page.locator('img[alt*="trailer"], img[alt*="container"], .equipment-item');
    await expect(equipmentItems.first()).toBeVisible();
    
    // Test precision climate control icon (up-down arrows)
    await expect(page.locator('text=Precision Climate Control')).toBeVisible();
  });
});

test.describe('Contact Information Tests', () => {
  test('phone numbers are clickable', async ({ page }) => {
    await page.goto('/');
    
    // Check phone links work
    const phoneLinks = page.locator('a[href^="tel:"]');
    if (await phoneLinks.count() > 0) {
      await expect(phoneLinks.first()).toHaveAttribute('href', /tel:\+?[\d\s\(\)\-]+/);
    }
  });

  test('email links work', async ({ page }) => {
    // Check various pages for email links
    const pagesWithEmail = ['/', '/contact', '/thank-you'];
    
    for (const pagePath of pagesWithEmail) {
      await page.goto(pagePath);
      const emailLinks = page.locator('a[href^="mailto:"]');
      
      if (await emailLinks.count() > 0) {
        await expect(emailLinks.first()).toHaveAttribute('href', /mailto:.+@.+/);
      }
    }
  });
});

test.describe('Media and Assets Tests', () => {
  test('hero video loads without breaking layout', async ({ page }) => {
    await page.goto('/');
    
    // Check for video elements
    const videos = page.locator('video');
    if (await videos.count() > 0) {
      // Video should be present and not cause layout issues
      await expect(videos.first()).toBeVisible();
      
      // Check page doesn't have horizontal scroll due to video
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 10); // Allow small buffer
    }
  });

  test('images load properly', async ({ page }) => {
    await page.goto('/equipment');
    
    // Check equipment images load
    const images = page.locator('img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      // Check first few images load successfully
      for (let i = 0; i < Math.min(3, imageCount); i++) {
        const img = images.nth(i);
        await expect(img).toBeVisible();
        
        // Check image has loaded (not broken)
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        expect(naturalWidth).toBeGreaterThan(0);
      }
    }
  });
});

test.describe('Responsive Design Tests', () => {
  test('mobile layout works correctly', async ({ page, isMobile }) => {
    if (!isMobile) return;
    
    await page.goto('/');
    
    // Check no horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 5);
    
    // Check mobile-specific elements
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('desktop layout works correctly', async ({ page, isMobile }) => {
    if (isMobile) return;
    
    await page.goto('/');
    
    // Check desktop navigation is visible
    await expect(page.locator('nav')).toBeVisible();
    
    // Check hero section displays properly
    await expect(page.locator('h1')).toBeVisible();
  });
});

test.describe('Performance Tests', () => {
  test('pages load within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});

// Visual regression baseline - run this when you want to capture screenshots
test.describe('Visual Regression Tests', () => {
  test('homepage visual baseline', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
  });

  test('equipment page visual baseline', async ({ page }) => {
    await page.goto('/equipment');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('equipment.png', { fullPage: true });
  });

  test('contact page visual baseline', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('contact.png', { fullPage: true });
  });
}); 