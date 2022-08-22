import { test, expect} from "@playwright/test" 

test("alert",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

  page.on("dialog", async (alert) =>{
    const text = await alert.message();
    console.log(text);
    await alert.accept();

  });

  await page.locator("button:has-text('Click Me')").nth(0).click();
  
});

test("confirm",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

  page.on("dialog", async (alert) =>{
    const text = await alert.message();
    console.log(text);
    await alert.dismiss();

  });

  await page.locator("button:has-text('Click Me')").nth(1).click();
  expect(page.locator("#confirm-demo")).toContainText("You pressed Cancel!");

});

test.only("prompt",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

  page.on("dialog", async (alert) =>{
    const text = await alert.defaultValue();
    console.log(text);
    await alert.accept("Sveta");

  });

  await page.locator("button:has-text('Click Me')").nth(2).click();
  expect(page.locator("#prompt-demo")).toContainText("Sveta");

});
