import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://ecommerce-playground.lambdatest.io/
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // Click a:has-text("Login")
  await page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]").click()
  //await page.click("'Login'");
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

  // Fill [placeholder="E-Mail Address"]
  await page.locator('[placeholder="E-Mail Address"]').fill('levkovskayase@gmail.com');

  // Press Tab
  await page.locator('[placeholder="E-Mail Address"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('qw1234QW11');

  // Click input:has-text("Login")
  await page.click("//input[@type='submit']") 
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

  // Click text=Edit your account information
  await page.locator('text=Edit your account information').click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');

  // Click [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').click();

  // Fill [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').fill('Sveta');

  // Click text=Continue
  await page.locator('text=Continue').click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

  // Click span:has-text("Logout")
  //await page.locator('span:has-text("Logout")').click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.click("'Logout'");
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');

});