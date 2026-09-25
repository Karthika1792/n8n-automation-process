const { test, expect } = require('@playwright/test');

test.describe('Login Page Tests', () => {

  test('TC_LOGIN_001 - Valid login', async ({ page }) => {
    await page.goto('/index.html');

    await page.getByLabel('Email / Username').fill('testuser@example.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#message'))
      .toHaveText('Login successful');
  });

  test('TC_LOGIN_002 - Invalid password', async ({ page }) => {
    await page.goto('/index.html');

    await page.getByLabel('Email / Username').fill('testuser@example.com');
    await page.getByLabel('Password').fill('WrongPassword');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#message'))
      .toHaveText('Invalid username or password');
  });

  test('TC_LOGIN_003 - Username is mandatory', async ({ page }) => {
    await page.goto('/index.html');

    await page.getByLabel('Password').fill('Test@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#message'))
      .toHaveText('Username is required');
  });

  test('TC_LOGIN_004 - Password is mandatory', async ({ page }) => {
    await page.goto('/index.html');

    await page.getByLabel('Email / Username').fill('testuser@example.com');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#message'))
      .toHaveText('Password is required');
  });
  
  ///////// Test cases for the email validation ////////
  
    test('TC_LOGIN_005 - Email field should accept valid email', async ({ page }) => {
    await page.goto('/index.html');

    const emailField = page.getByLabel('Email / Username');

    //await expect(emailField).toHaveAttribute('type', 'email'); ////// Positive case and Enable it as developer fix as 3rd scenarior
    await expect(emailField).toHaveAttribute('type', 'text'); ///// Negative cases test
   
  });
});
