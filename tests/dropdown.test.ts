import { test, expect } from "@playwright/test"

test("dropdown", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
  await page.selectOption("#select-demo", {
    label: "Tuesday"
  });

});