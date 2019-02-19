import { $, ElementFinder } from 'protractor' ;

export class AcceptTermsServiceStepPage {
    private acceptMark: ElementFinder;
	constructor() {
		this.acceptMark = $('#cgv');
	} 
	public async goToAcceptTermsServiceStep(): Promise<void> {
      await this.acceptMark.click();
    }
}
