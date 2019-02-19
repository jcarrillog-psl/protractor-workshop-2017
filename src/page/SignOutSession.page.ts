import { $, ElementFinder } from 'protractor' ;

export class SignOutSessionPage {
    private signOut: ElementFinder;
      
	constructour() {
		this.signOutSession = $( '#header > div:nth-child(2) > div > div > nav > div:nth-child(2) > a' );
    }
	
    public async goToSignOutSession(): Promise<void> {
      await this.signOutSession.click();
    }
}
