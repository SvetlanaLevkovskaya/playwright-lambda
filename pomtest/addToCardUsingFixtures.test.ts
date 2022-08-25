import {expect, test} from "../base/pomFixture"
import * as data from "../test-data/addToCard.test-data.test.json"

const email = "sv100@gmail.com"
const password = "12qw12qw"

/* test.use({
  browserName: "firefox"
}); */

test.describe("Page Object test",async () => {
  test("register test", async ({ page, baseURL, registerPage }) => {
    //const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName(data.firstName);
    await registerPage.enterLastName(data.lastName);
    await registerPage.enterEmailName(data.email);
    await registerPage.enterTelephoneName(data.phoneNumber);
    await registerPage.enterPasswordName(data.password);
    await registerPage.enterPassworconfirmdName(data.password);
    expect(registerPage.isSubscribeCheck()).toBeTruthy();
    await registerPage.clickTermandcondition();
    await registerPage.clickContinueToRegister();
        
  });
  
  test("login test", async ({ page, baseURL, loginPage }) => {
    //const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginBtn();
    await loginPage.enterEmail(data.email);
    expect(await page.title()).toBe("Account Login");
   
  });
  
  test("add to card", async ({ page, baseURL, homePage, loginPage, specialPage }) => {
    //const login = new LoginPage(page);
    //const homePage = new HomerPage(page);
    //const special = new SpecialHotPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.login(data.email, data.password);
    await homePage.clickOnSpecialMenu();
    await specialPage.addFirstItemTotheCard();
    const isCardIsVisible = await specialPage.isToastVisible();
    expect(isCardIsVisible).toBeVisible();
  });
});
