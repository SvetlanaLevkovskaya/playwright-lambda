import { Page } from "@playwright/test"

export default class HomePage{
  constructor(public page:Page) {

  };

  async clickOnSpecialMenu(email:string) {
    await this.page.click("(//span[contains(text(),'Special')]/../..)[2]");

  };
};
