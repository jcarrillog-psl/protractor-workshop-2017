import { $, ElementFinder, promise } from 'protractor' ;

export class SignOutSessionPage {
    private get signOutSession(): ElementFinder {
      return $( '#header > div:nth-child(2) > div > div > nav > div:nth-child(2) > a' );
    }
    public goToSignOutSession(): promise.Promise<void> {
      return this.signOutSession.click();
    }
}
