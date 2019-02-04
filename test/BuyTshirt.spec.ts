import { $, browser } from 'protractor' ;
import { MenuContentPage } from '../src/page' ;
import { ProductDetailPage } from '../src/page' ;
import { ProductAddedModalPage } from '../src/page' ;
import { ProductListPage } from '../src/page' ;
import { SummaryStepPage } from '../src/page' ;
import { SignInStepPage } from '../src/page' ;
import { AddressStepPage } from '../src/page' ;
import { ShippingStepPage } from '../src/page' ;
import { PaymentStepPage } from '../src/page' ;
import { BankPaymentPage } from '../src/page' ;

describe('Buy a t-shirt' , () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productDetailPage: ProductDetailPage = new ProductDetailPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const productListPage: ProductListPage = new ProductListPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    const signInStepPage: SignInStepPage = new SignInStepPage();
    const addressStepPage: AddressStepPage = new AddressStepPage();
    const shippingStepPage: ShippingStepPage = new ShippingStepPage();
    const paymentStepPage: PaymentStepPage = new PaymentStepPage();
    const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });
    it( 'then should be bought a t-shirt' , async () => {
        await browser.get('http://automationpractice.com/');
        await (browser.sleep(10000));
        await menuContentPage.goToTShirtMenu();
        await (browser.sleep(3000));
        await productDetailPage.goToProductDetail();
        await (browser.sleep(3000));
        await productAddedModalPage.goToProductAddedModal();
        await (browser.sleep(3000));
        await productListPage.goToProductList();
        await (browser.sleep(3000));
        await summaryStepPage.goToSummaryStep();
        await (browser.sleep(3000));
        await signInStepPage.goToSignInStep();
        await (browser.sleep(3000));
        await addressStepPage.goToAddressStep();
        await (browser.sleep(3000));
        await shippingStepPage.goToShippingStep();
        await (browser.sleep(3000));
        await paymentStepPage.goToPaymentStep();
        await (browser.sleep(3000));
        await bankPaymentPage.goToBankPayment();
        await (browser.sleep(3000));
        await expect($( '#center_column > div > p > strong' ).getText())
        .toBe( 'Your order on My Store is complete.' );
    });
});
