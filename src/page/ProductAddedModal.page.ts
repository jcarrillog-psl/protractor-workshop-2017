import { $, ElementFinder, promise } from 'protractor' ;

export class ProductAddedModalPage {
	private get productImage(): ElementFinder {
		return $( '#center_column > ul > li > div > div.left-block > div > a.product_img_link > img' );
	}
	public goToProductImage(): promise.Promise<void> {
		return this.productImage.click();
	}
}