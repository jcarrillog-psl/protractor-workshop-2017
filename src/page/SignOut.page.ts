import { $, ElementFinder, promise } from 'protractor' ;

export class SignOutPage {
    private signOut(): ElementFinder;
      
	constructour {
		this.signOut = $( '#header > div:nth-child(2) > div > div > nav > div:nth-child(2) > a' );
    }
	
    public async goToSignOut(): promise.Promise<void> {
      await this.signOut.click();
    }
}
