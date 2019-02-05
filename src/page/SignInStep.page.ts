import { $, ElementFinder, promise } from 'protractor' ;

export class SignInStepPage {
    private get usernameEmail(): ElementFinder{
      return $( '#email' );
    }
    private get usernamePass(): ElementFinder{
      return $( '#passwd' );
    }
    private get signInStep(): ElementFinder {
      return $( '#SubmitLogin > span' );
    }
    public goToSignInStep(): promise.Promise<void> {
      return this.signInStep.click();
    }
    public goToUsernameEmail(): promise.Promise<void> {
      return this.usernameEmail.sendKeys( 'aperdomobo@gmail.com' );
    }
     public goToUsernamePass(): promise.Promise<void> {
      return this.usernamePass.sendKeys( 'WorkshopProtractor' );
    }
}
