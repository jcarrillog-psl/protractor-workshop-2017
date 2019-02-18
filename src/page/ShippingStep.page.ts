import { $, ElementFinder, promise } from 'protractor' ;

export class ShippingStepPage {
    private acceptMark(): ElementFinder;
	private shippingStep(): ElementFinder;
	constructor () {
		this.acceptMark = $('#cgv');
	} 
	constructor () {
		this.shippingStep = $('#form > p > button > span');
	} 
	public async goToAcceptMark(): promise.Promise<void> {
      await this.acceptMark.click();
    }
    public async goToShippingStep(): promise.Promise<void> {
      await this.shippingStep.click();
    }
}
