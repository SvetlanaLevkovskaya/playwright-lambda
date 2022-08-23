import { test, expect } from "@playwright/test";
import moment from "moment";

test("date picker using fill function", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  let date = "2022-08-23"    //document.getElementById("birthday").value => '2022-08-23'
  await page.fill("id=birthday", date);
  await page.waitForTimeout(3000);
  
});

test("date picker using moment", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  let date = "2022-08-23"    
  await page.click('[placeholder="Start date"]');  // //input[@placeholder='Start date']
  await page.waitForTimeout(3000);

  const mmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
  const prevmmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
  const nextmmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

  await prevmmYYYY.click()
  await page.locator("//td[@class='day'][text()='4']").click()
  await page.waitForTimeout(3000)
});

test("date picker using moment1", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  let date = "2022-08-23"    
  await page.click('[placeholder="Start date"]');  
  await page.waitForTimeout(3000);

  const mmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
  const prevmmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
  const nextmmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

  let dateToSelect = "December 2022";
  const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
  console.log(thisMonth);
  

  while (await mmYYYY.textContent() != dateToSelect) {
    if(thisMonth){
      await prevmmYYYY.click();
    } else {
      await nextmmYYYY.click();
    };
  };
  await page.locator("//td[@class='day'][text()='19']").click()
  await page.waitForTimeout(3000);

});

test.only("date picker using moment2", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
      
  await selectDate(12, "December 2022");
  await page.reload();
  await selectDate(27, "July 2022");
  await page.reload();
  await selectDate(23, "August 2022");

  await page.waitForTimeout(3000);

  async function selectDate(date:number, dateToSelect:string) {
    await page.click('[placeholder="Start date"]')
    const mmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prevmmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const nextmmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    
    while (await mmYYYY.textContent() != dateToSelect) {
      if (thisMonth) {
        await prevmmYYYY.click();
      } else {
        await nextmmYYYY.click();
      };
    };
    await page.locator(`//td[@class='day'][text()='${date}']`).click();
  }
});
