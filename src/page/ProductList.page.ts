import { $, ElementFinder, browser, ExpectedConditions } from 'protractor' ;

export class ProductListPage {
  private productList: ElementFinder;
  private EC = ExpectedConditions;

  constructor() {
    this.productList = $('.button-container > a');
  }
  public async selectProduct(): Promise<void> {
    await browser.wait(this.EC.visibilityOf(this.productList), 5000);
    await this.productList.click();
  }
}
