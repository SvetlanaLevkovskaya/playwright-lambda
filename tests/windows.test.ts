import { test, expect } from "@playwright/test"

test("interact with tab",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

  console.log(page.url());

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'")
  ]);

  console.log(newWindow.url());
  // newWindow.fill("", "")
  
});

test.only("interact with multiple tabs",async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

  const [newWindows] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth")
  ]);

  await newWindows.waitForLoadState();
  const pages = newWindows.context().pages()
  console.log(pages.length);
  
  pages.forEach(tab =>{
    console.log(tab.url())
  });

  //await pages[1].fill("", "")

  let facebookPage;
  for (let index = 0; index < pages.length; index++) {
      const url = pages[index].url();
      if (url == "https://www.facebook.com/lambdatest/") {
        facebookPage = pages[index]
      };

  }
  const text = await facebookPage.textContent("//h1");
  console.log(text);
    
});
