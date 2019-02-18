import { $, ElementFinder, promise } from 'protractor' ;

export class PaymentStepPage {
    private paymentStep(): ElementFinder;
	constructor{
	this.paymentStep = $( '#HOOK_PAYMENT > div:nth-child(1) > div > p > a' );
    }
    public async goToPaymentStep(): promise.Promise<void> {
      await this.paymentStep.click();
    }
}
