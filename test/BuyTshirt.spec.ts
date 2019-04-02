import { $, browser } from 'protractor' ;
import { MenuContentPage,
         ProductDetailPage,
         ProductAddedModalPage,
         ProductListPage,
         SummaryStepPage,
         SignInStepPage,
         AddressStepPage,
         AcceptTermsServiceStepPage,
         ShippingStepPage,
         PaymentStepPage,
         BankPaymentPage,
         SignOutSessionPage } from '../src/page' ;

describe('Buy a t-shirt' , () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const acceptTermsServiceStepPage: AcceptTermsServiceStepPage = new AcceptTermsServiceStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const signOutSessionPage: SignOutSessionPage = new SignOutSessionPage();

  it('then should be bought a t-shirt' , async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productDetailPage.goToProductDetail();

    await productAddedModalPage.goToProductAddedModal();

    await productListPage.selectProduct();

    await summaryStepPage.goToSummaryStep();

    await signInStepPage.loginButton('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addressStepPage.goToAddressStep();

    await acceptTermsServiceStepPage.goToAcceptTermsServiceStep();

    await shippingStepPage.goToShippingStep();

    await paymentStepPage.goToPaymentStep();

    await bankPaymentPage.goToBankPayment();

    await expect($('#center_column > div > p > strong').getText())
        .toBe('Your order on My Store is complete.');

    await signOutSessionPage.goToSignOutSession();
  });
});
