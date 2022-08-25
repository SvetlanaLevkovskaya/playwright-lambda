import { Page } from "@playwright/test"

export default class SpecialHotPage{
  constructor(public page:Page) {

  };

  async addFirstItemTotheCard() {
    await this.page.hover("//div[@class='image']/a", { strict:false });
    await this.page.locator("(//button[@title='Add to Card'])").nth[0].click();

};
  async isToasNisible(){
    const toast = this.page.locator("a.btn.btn-primary.btn-block");
    await toast.waitFor({state:"visible"});
    return toast;
}
}
