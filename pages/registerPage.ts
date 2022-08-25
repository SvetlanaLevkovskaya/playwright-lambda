import { Page } from "@playwright/test"

export default class RegisterPage{
  constructor(public page:Page) {

  };

  async enterFirstName(firstname:string) {
    await this.page.locator("input[name='First Name']").type(firstname);
    
  };

  async enterLastName(lastname:string) {
    await this.page.locator("input[name='Last Name']").type(lastname);

  };

  async enterEmailName(emailname:string) {
    await this.page.locator("input[name='E-Mail']").type(emailname);

  };

  async enterTelephoneName(telephone:string) {
    await this.page.locator("input[naame='Telephone']").type(telephone);

  }

  async enterPasswordName(password:string) {
    await this.page.locator("input[name='Password']").type(password);

  };

  async enterPassworconfirmdName(passwordConfirm:string) {
    await this.page.locator("input[name='Password Confirm']").type(passwordConfirm);

  };

  async isSubscribeCheck() {
    return await this.page.locator("#input-newsletter-nj").isChecked();

  };

  async clickTermandcondition() {
    await this.page.click("input[name='agree']");

  };

  async clickContinueToRegister() {
    await this.page.click("input[value='Continue']");

  };
};
