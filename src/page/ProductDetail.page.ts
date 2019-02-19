import { $, ElementFinder } from 'protractor' ;

export class ProductDetailPage {
    private productDetail: ElementFinder;
	
	constructor() {
		this.productDetail = $( '#center_column > ul > li > div > div.left-block > div > a.product_img_link > img' );
    }
    public async goToProductDetail(): Promise<void> {
      await this.productDetail.click();
    }
}
