import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
  {
    name: "chrome",
    use: {
      ...devices["Desktop Chrome"]
    }
  },
  {
    name: "firefox",
    use: {
      ...devices["Desktop Edge HiDPI"]
    }
  },
],

  testMatch: ["pomtest/addToCardUsingFixtures.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "on",
    video: "on",
    launchOptions: {
      //slowMo: 1000
    }
  },
  retries: 0,
  reporter: [
    ["dot"], 
    ["json", {
    outputFile: 
    "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]   
  };

  
export default config;
