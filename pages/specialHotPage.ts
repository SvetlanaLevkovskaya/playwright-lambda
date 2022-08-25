import { Page } from "@playwright/test"

export default class SpecialHotPage{
  constructor(public page:Page) {

  };

  async addFirstItemTotheCard() {
    await this.page.hover("(//img[@title='iPod Touch'])[1]", { strict:false });
    await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click();

};
  async isToasNisible(){
    const toast = this.page.locator("a.btn.btn-primary.btn-block");
    await toast.waitFor({state:"visible"});
    return toast;
}
}
