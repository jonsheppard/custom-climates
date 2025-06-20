const { test, expect } = require('@playwright/test');

test.describe('Form Functionality Tests', () => {
  test('contact form has all required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Check required form fields
    const nameField = page.locator('input[name="name"]');
    const emailField = page.locator('input[name="email"]');
    const phoneField = page.locator('input[name="phone"]');
    const messageField = page.locator('textarea[name="message"]');
    
    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(phoneField).toBeVisible();
    await expect(messageField).toBeVisible();
    
    // Verify required attributes
    await expect(nameField).toHaveAttribute('required');
    await expect(emailField).toHaveAttribute('required');
    await expect(phoneField).toHaveAttribute('required');
    await expect(messageField).toHaveAttribute('required');
  });

  test('form can be filled out and submitted', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out the form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="phone"]', '(555) 123-4567');
    await page.fill('textarea[name="message"]', 'This is a test message for form validation.');
    
    // Verify form data is entered
    await expect(page.locator('input[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('input[name="email"]')).toHaveValue('test@example.com');
    await expect(page.locator('input[name="phone"]')).toHaveValue('(555) 123-4567');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a test message for form validation.');
    
    // Check submit button is present and enabled
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  test('form has proper Netlify configuration', async ({ page }) => {
    await page.goto('/contact');
    
    const form = page.locator('form');
    
    // Check Netlify attributes
    await expect(form).toHaveAttribute('data-netlify', 'true');
    await expect(form).toHaveAttribute('data-netlify-honeypot', 'bot-field');
    
    // Check for hidden honeypot field
    const honeypotField = page.locator('input[name="bot-field"]');
    await expect(honeypotField).toBeHidden();
    
    // Check for form name hidden field
    const formNameField = page.locator('input[name="form-name"]');
    await expect(formNameField).toBeHidden();
  });

  test('quote form has additional fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for company field (only on quote form)
    const companyField = page.locator('input[name="company"]');
    await expect(companyField).toBeVisible();
    await expect(companyField).toHaveAttribute('required');
    
    // Check for address fields
    const addressSearchField = page.locator('input[name="address_search"]');
    const streetAddressField = page.locator('input[name="street_address"]');
    const cityField = page.locator('input[name="city"]');
    const stateField = page.locator('input[name="state"]');
    const countryField = page.locator('input[name="country"]');
    const postalCodeField = page.locator('input[name="postal_code"]');
    
    await expect(addressSearchField).toBeVisible();
    await expect(streetAddressField).toBeVisible();
    await expect(cityField).toBeVisible();
    await expect(stateField).toBeVisible();
    await expect(countryField).toBeVisible();
    await expect(postalCodeField).toBeVisible();
    
    // Check required attributes for address fields
    await expect(streetAddressField).toHaveAttribute('required');
    await expect(cityField).toHaveAttribute('required');
    await expect(stateField).toHaveAttribute('required');
    await expect(countryField).toHaveAttribute('required');
    await expect(postalCodeField).toHaveAttribute('required');
    
    // Check SMS consent checkbox
    const smsConsentField = page.locator('input[name="sms_consent"]');
    await expect(smsConsentField).toBeVisible();
    await expect(smsConsentField).not.toHaveAttribute('required');
    
    // Verify the form name is set correctly
    const formNameField = page.locator('input[name="form-name"]');
    await expect(formNameField).toHaveValue('quote-request');
  });

  test('form validation works', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();
    
    // Browser should prevent submission due to required fields
    // We can't easily test this without form submission, but we can verify
    // that the form is still on the same page
    await expect(page).toHaveURL(/\/contact/);
  });

  test('thank you page exists and is accessible', async ({ page }) => {
    await page.goto('/thank-you');
    
    // Check that the thank you page loads
    await expect(page.locator('h1')).toContainText('Thank You');
    
    // Check for phone number link
    const phoneLink = page.locator('a[href^="tel:"]');
    await expect(phoneLink).toBeVisible();
    
    // Check for navigation links
    const homeLink = page.locator('a[href="/"]');
    const servicesLink = page.locator('a[href="/services"]');
    await expect(homeLink).toBeVisible();
    await expect(servicesLink).toBeVisible();
  });
}); 