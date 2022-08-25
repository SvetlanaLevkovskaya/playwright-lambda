import { Page } from "@playwright/test"

export default class LoginPage{
  constructor(public page:Page) {

  };

  async enterLoginEmail(email:string) {
    await this.page.locator("input[name='email']").type(email);

  };

  async enterLoginPassword(password:string) {
    await this.page.locator("input[name='password']").type(password);

  };

  async clickLoginBtn() {
    await this.page.click("input[value='Login']");

  };
};
