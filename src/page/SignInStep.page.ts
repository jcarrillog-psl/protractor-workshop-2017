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

  public async goToSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }
  public async goToUserEmail(): Promise<void> {
    await this.userEmail.sendKeys('aperdomobo@gmail.com');
  }
  public async goToUserPass(): Promise<void> {
    await this.userPass.sendKeys('WorkshopProtractor');
  }
}
