import {expect, test} from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginrPage from "../pages/loginPage"
import HomerPage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"

const email = "lev01@gmail.com"
const password = "12qw12"
test("register test_01",async ({ page, baseURL }) => {
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
