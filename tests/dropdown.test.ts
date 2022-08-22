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

test.only("multiple objects",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
  const scrolldown = page.locator("//div[text()='Multi Select List Demo']");
  await scrolldown.scrollIntoViewIfNeeded();
  await page.selectOption("#multi-select", [{
    label: "New York"
  },
  {
    index: 2
  }, {
    value: "Washington"
  }
]);

await page.waitForTimeout(3000);

});
