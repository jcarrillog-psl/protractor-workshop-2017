import { $, ElementFinder } from 'protractor' ;

export class SignInStepPage {
  private userEmail: ElementFinder;
  private userPass: ElementFinder;
  private submitButton: ElementFinder ;

  constructor() {
    this.userEmail = $('#email');
    this.userPass = $('#passwd');
    this.submitButton = $('#SubmitLogin > span');
  }

  public async login(email:string, pass:string): Promise<void> {
    await this.userEmail.sendKeys(email);
    await this.userPass.sendKeys(pass);
    await this.submitButton.click();
  }
}
