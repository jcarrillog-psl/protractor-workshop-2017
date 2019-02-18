import { $, ElementFinder, promise } from 'protractor' ;

export class SignInStepPage {
    private userEmail: ElementFinder;
    private userPass: ElementFinder;
    private submitButton: ElementFinder ;
	
	constructor () {
		this.userEmail = $('#email');
	}
	constructor () {
		this.userPass = $('#passwd');
	}
	constructor () {
		this.submitButton = $('#SubmitLogin > span');
	}
	
    public async goToSubmitButton(): promise.Promise<void> {
      await this.submitButton.click();
    }
    public async goToUserEmail(): promise.Promise<void> {
      await this.userEmail.sendKeys( 'aperdomobo@gmail.com' );
    }
     public async goToUserPass(): promise.Promise<void> {
      await this.userPass.sendKeys( 'WorkshopProtractor' );
    }
}
