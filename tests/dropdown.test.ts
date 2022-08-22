import { test, expect } from "@playwright/test"

test("handling dropdown", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
  await page.selectOption("#select-demo", {
    //label: "Tuesday"
    //value: "Tuesday"
    index: 5
  });

  await page.waitForTimeout(3000)

});