import { $, ElementFinder, browser, ExpectedConditions } from 'protractor' ;

export class ProductAddedModalPage {
  private productAddedModal: ElementFinder;
  private EC = ExpectedConditions;

  constructor() {
    this.productAddedModal = $('#add_to_cart > button > span');
  }
  public async goToProductAddedModal(): Promise<void> {
    await browser.wait(this.EC.visibilityOf(this.productAddedModal), 5000);
    await this.productAddedModal.click();
  }
}
