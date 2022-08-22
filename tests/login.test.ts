import { test, expect, chromium } from '@playwright/test';

test('register test demo', async () => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.click("'Register'");
  await page.fill("//input[@placeholder='First Name']", "Svetlana");
  await page.fill("//input[@placeholder='Last Name']", "Levkovskaya");
  await page.fill("//input[@placeholder='E-Mail']", "levkovskayase@gmail.com");
  await page.fill("//input[@placeholder='Telephone']", "+375296689610");
  await page.fill("//input[@placeholder='Password']", "qw1234QW11");
  await page.fill("//input[@placeholder='Password Confirm']", "qw1234QW11");

  //Assert that the checkboxes are visible on the webpage
  await expect(page.locator("//input[@type='checkbox']")).toBeVisible()

  //Check checkbox
  await page.check("//label[@for='input-agree']")

  //Assert checkbox1 is now checked
  expect(await page.isChecked("//input[@type='checkbox']")).toBeTruthy()

  // Click on the button
  await page.click("//input[@value='Continue']")
  
});

test.only('login test demo', async () => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  //await page.click("text=Login")
  await page.click("'Login'");
  await page.fill("//input[@placeholder='E-Mail Address']", "levkovskayase@gmail.com");
  await page.fill("//input[@placeholder='Password']", "qw1234QW11");
  await page.click("//input[@type='submit']");
  await page.waitForTimeout(5000);

  // Open new tab
  const newTab = await context.newPage();
  await newTab.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await page.waitForTimeout(5000);

  // Open new window (without cash)
  const newContext = await browser.newContext();
  const newWindow = await newContext.newPage();
  await newWindow.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await newWindow.waitForTimeout(5000);

});
