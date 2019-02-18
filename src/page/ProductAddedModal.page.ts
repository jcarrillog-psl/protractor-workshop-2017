import { $, ElementFinder, promise } from 'protractor' ;

export class ProductAddedModalPage {
    private productAddedModal: ElementFinder;
	constructor{
	this.productAddedModal = $( '#add_to_cart > button > span' );
    }
    public async goToProductAddedModal(): promise.Promise<void> {
      await this.productAddedModal.click();
    }
}
