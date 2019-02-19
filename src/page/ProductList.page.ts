import { $, ElementFinder } from 'protractor' ;

export class ProductListPage {
    private productList: ElementFinder;
	
	construnctor(){
		this.productList = $( '.button-container > a' );
    }
    public async goToProductList(): Promise<void> {
      await this.productList.click();
    }
}
