import {expect, test} from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomerPage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"

const email = "lev02@gmail.com"
const password = "12qw12"

test.describe("Page Object test",async () => {
  test("register test", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("svetlana");
    await register.enterLastName("lev");
    await register.enterEmailName(email);
    await register.enterTelephoneName("+375286695842");
    await register.enterPasswordName(password);
    await register.enterPassworconfirmdName(password);
    expect(register.isSubscribeCheck()).toBeTruthy();
    await register.clickTermandcondition();
    await register.clickContinueToRegister();
  });
  
  test("login test", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.enterEmail(email);
    await login.enterPassword(password);
    await login.clickLoginBtn();
    expect(await page.title()).toBe("My Account");
   
  });
  
  test("add to card", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const homePage = new HomerPage(page);
    const special = new SpecialHotPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.login(email, password);
    await homePage.clickOnSpecialMenu();
    await special.addFirstItemTotheCard();
    const isCardIsVisible = await special.isToasNisible();
    expect(isCardIsVisible).toBeVisible();
  });
});
