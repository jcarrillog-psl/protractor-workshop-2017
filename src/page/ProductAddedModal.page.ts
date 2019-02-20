import { $, ElementFinder } from 'protractor' ;

export class ProductAddedModalPage {
  private productAddedModal: ElementFinder;

  constructor() {
    this.productAddedModal = $('#add_to_cart > button > span');
  }
  public async goToProductAddedModal(): Promise<void> {
    await this.productAddedModal.click();
  }
}
