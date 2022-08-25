import { Page } from "@playwright/test"

export default class RegisterPage{
  constructor(public page:Page) {

  };

  async enterFirstName(firstname:string) {
    await this.page.locator("//input[@placeholder='First Name']").type(firstname);
    
  };

  async enterLastName(lastname:string) {
    await this.page.locator("//input[@placeholder='Last Name']").type(lastname);

  };

  async enterEmailName(emailname:string) {
    await this.page.locator("//input[@placeholder='E-Mail']").type(emailname);

  };

  async enterTelephoneName(telephone:string) {
    await this.page.locator("//input[@placeholder='Telephone']").type(telephone);

  }

  async enterPasswordName(password:string) {
    await this.page.locator("//input[@placeholder='Password']").type(password);

  };

  async enterPassworconfirmdName(passwordConfirm:string) {
    await this.page.locator("//input[@placeholder='Password Confirm']").type(passwordConfirm);

  };

  async isSubscribeCheck() {
    return await this.page.locator("//label[@for='input-newsletter-no']").isChecked();

  };

  async clickTermandcondition() {
    await this.page.click("//label[@for='input-agree']");

  };

  async clickContinueToRegister() {
    await Promise.all([
      this.page.waitForNavigation({waitUntil:"networkidle"}),
      this.page.click("//input[@value='Continue']")
    ]);
   
  };
};
