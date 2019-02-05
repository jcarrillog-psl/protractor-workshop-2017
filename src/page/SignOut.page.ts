import { $, ElementFinder, promise } from 'protractor' ;

export class SignOutPage {
    private get signOut(): ElementFinder {
      return $( '#header > div:nth-child(2) > div > div > nav > div:nth-child(2) > a' );
    }
    public goToSignOut(): promise.Promise<void> {
      return this.signOut.click();
    }
}
