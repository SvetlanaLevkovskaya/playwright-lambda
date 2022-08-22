import { test, expect } from "@playwright/test"

test("Interaction with inputs", async ({ page }) => {
  await page.goto("https://lambdatest.com/selenium-playground/simple-form-demo");
  const inputMessage = page.locator("input#user-message");
  await inputMessage.scrollIntoViewIfNeeded();
  console.log(await inputMessage.getAttribute("placeholder"));
  expect(inputMessage).toHaveAttribute("placeholder", "Please enter your Message")
  console.log("Before entering a value: ", await inputMessage.inputValue());
  await inputMessage.type("Hi, Sveta");
  console.log("After entering a value: ", await inputMessage.inputValue());

});
