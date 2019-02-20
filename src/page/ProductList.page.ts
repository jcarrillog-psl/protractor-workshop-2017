import { $, ElementFinder } from 'protractor' ;

export class ProductListPage {
  private productList: ElementFinder;

  constructor() {
    this.productList = $('.button-container > a');
  }

  public async selectProduct(): Promise<void> {
    await this.productList.click();
  }
}
