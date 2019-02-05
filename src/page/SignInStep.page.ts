import { $, ElementFinder, promise } from 'protractor' ;

export class SignInStepPage {
    private get signInStep(): ElementFinder {
      $( '#email' ).sendKeys( 'aperdomobo@gmail.com' );
      $( '#passwd' ).sendKeys( 'WorkshopProtractor' );
      return $( '#SubmitLogin > span' );
    }
    public goToSignInStep(): promise.Promise<void> {
      return this.signInStep.click();
    }
}
