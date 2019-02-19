import { $, ElementFinder } from 'protractor' ;

export class AcceptTermsServiceStepPage {
    private acceptMark: ElementFinder;
	constructor() {
		this.acceptMark = $('#cgv');
	} 
	public async goToAcceptTermsServiceMark(): Promise<void> {
      await this.acceptMark.click();
    }
}
