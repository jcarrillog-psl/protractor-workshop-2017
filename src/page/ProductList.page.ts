import { $, ElementFinder, promise } from 'protractor' ;

export class ProductListPage {
    private get productList(): ElementFinder {
      return $( '.button-container > a' );
    }
    public selectProduct(): promise.Promise<void> {
      return this.productList.click();
    }
}
