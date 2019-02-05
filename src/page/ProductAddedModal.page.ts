import { $, ElementFinder, promise } from 'protractor' ;

export class ProductAddedModalPage {
    private get productAddedModal(): ElementFinder {
      return $( '#add_to_cart > button > span' );
    }
    public goToProductAddedModal(): promise.Promise<void> {
      return this.productAddedModal.click();
    }
}
