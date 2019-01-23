import { browser, Config } from 'protractor' ;
import { reporter } from './helpers/reporter' ;

export const config: Config = {
  framework: 'jasmine' ,
  SELENIUM_PROMISE_MANAGER: false,// does not work on win10
  specs: ['../test/Google.spec.js'],
  noGlobals: true ,
  onPrepare: () => {
    browser.ignoreSynchronization = true ;
    reporter();
  },
  capabilities: {// version headless of chrome
    browserName: 'chrome' ,
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  }
};
