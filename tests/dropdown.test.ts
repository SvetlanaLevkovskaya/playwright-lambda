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

test("multiple objects", async ({ page }) => {
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

test("jquery select dropdown1",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
  await page.click("#country+span");
  await page.locator("ul#select2-country-results") 
       .locator("li", {
          hasText: "Netherlands"
        }).click();

  await page.waitForTimeout(3000)

});

test.only("jquery select dropdown2",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
  await selectCountry("Japan");
  await selectCountry("Hong Kong");
  await selectCountry("Australia");

  async function selectCountry(contryName) {
    await page.click("#country+span");
    await page.locator("ul#select2-country-results") 
    .locator("li", {
       hasText: contryName
     }).click();

  };
  
});
