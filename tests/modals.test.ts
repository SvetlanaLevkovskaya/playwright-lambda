import { test, expect} from "@playwright/test"

test("modals", async({ page} ) => {

  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
  await page.click("//button[@data-target='#myModal']");
  await page.click("(//button[text()='Save Changes'])[1]")
  await page.waitForTimeout(3000)

});