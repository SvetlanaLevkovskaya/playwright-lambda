import { test, expect } from "@playwright/test"

test("interact with frames1",async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const allframes = page.frames();
  console.log("Number of frames: " + allframes.length);

  const myFrame = page.frame("firstFr");
  //if (myFrame != null) {
    //await myFrame.fill("input[name='fname']", "sveta")
  //}
  await myFrame?.fill("input[name='fname']", "sveta");
  await myFrame?.fill("input[name='lname']", "levkovskaya");
  expect(await myFrame?.locator("//p[@class='title has-text-info']").textContent()).toContain("You have entered");

  await page.waitForTimeout(3000);
  
});

test.only("interact with frames",async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const allframes = page.frames();
  console.log("Number of frames: " + allframes.length);

  const myFrame = page.frameLocator("#firstFr");
  await myFrame.locator("input[name='fname']").fill("sveta");
  await myFrame.locator("input[name='lname']").fill ("levkovskaya");
  expect(await myFrame.locator("//p[@class='title has-text-info']").textContent()).toContain("You have entered");
  // const innerframe = myFrame.frameLocator("//div[contains(@class,'container has-text-centered')]//iframe[1]");
  const innerframe = myFrame.frameLocator("iframe[src='innerFrame']");
  await innerframe.locator("input[name='email']").fill("levkovskayase@gmail.com");
  //expect(innerframe.locator("input[name='email'] >> div")).toContain("levkovskayase@gmail.com");

  await page.waitForTimeout(3000);
  
});
