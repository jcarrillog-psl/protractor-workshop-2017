import { $, ElementFinder, browser } from 'protractor' ;

export class ProductDetailPage {
  private productDetail: ElementFinder;
  private moreButton: ElementFinder;

  constructor() {
    // this.productDetail =
    // $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
    this.productDetail = $('.product_img_link');
    this.moreButton = $('.lnk_view');
  }
  public async goToProductDetail(): Promise<void> {
    await browser.actions().mouseMove(this.productDetail).perform();
    await this.moreButton.click();
  }
}
