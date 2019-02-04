import { $, ElementFinder, promise } from 'protractor' ;

export class SummaryStepPage {
    private get summaryStep(): ElementFinder {
      return $( '.cart_navigation span' );
    }
    public goToSummaryStep(): promise.Promise<void> {
      return this.summaryStep.click();
    }
}
