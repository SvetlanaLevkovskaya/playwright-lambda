import { test, expect } from "@playwright/test"

test("download files", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
  await page.type("#textbox", "Hello!!!");
  await page.click("[id='create']");
  
/*   const download = await Promise.all([
    page.waitForEvent("download"),
    page.click("#link-to-download")
  ]);

  const path = await download[0].path();
  console.log(path); */

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#link-to-download")
  ]);
  
  const fileName = download.suggestedFilename();
  await download.saveAs(fileName)
  //const path = await download.path();
  //console.log(path);

 });

 test("upload files", async ({ page }) => {
  await page.goto("http://blueimp.github.io/jQuery-File-Upload/");
  await page.setInputFiles("[name='files[]']", ["uploadfiles/first.png", "uploadfiles/second.png"]);
  
  
 });

 test.only("upload files1", async ({ page }) => {
  await page.goto("http://blueimp.github.io/jQuery-File-Upload/");

  const [uploadfiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("input[type='file']").click()
  ])

  const isMultiple =  uploadfiles.isMultiple();
  console.log(isMultiple);
  uploadfiles.setFiles(["uploadfiles/first.png", "uploadfiles/second.png"]);
    
 });

