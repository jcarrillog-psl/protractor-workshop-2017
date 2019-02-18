import { $, ElementFinder, promise } from 'protractor' ;

export class ProductListPage {
    private productList: ElementFinder;
	construnctor{
		this.productList = $( '.button-container > a' );
    }
    public async goToProductList(): promise.Promise<void> {
      await this.productList.click();
    }
}
