import { test, expect } from "@playwright/test"

test("interact with mulpiple tabs",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
  
})