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

test("Sum",async ({ page }) => {
  await page.goto("https://lambdatest.com/selenium-playground/simple-form-demo");
  const sum1 = page.locator("#sum1")
  const sum2 = page.locator("#sum2")
  const getValues = page.locator("//button[text()='Get values']")
  let num1 = 121;
  let num2 = 1;


  await sum1.type("" + num1);
  await sum2.type("" + num2);
  await getValues.click();
  const res = page.locator("#addmessage");
  console.log(await res.textContent());
  let expectedRes = num1 + num2
  expect(res).toHaveText("" + expectedRes)
  
})
