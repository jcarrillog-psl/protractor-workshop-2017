import { browser, Config } from 'protractor' ;
import { reporter } from './helpers/reporter' ;

export const config: Config = {
  framework: 'jasmine' ,
  seleniumAddress: 'http://localhost:4444/wd/hub' ,
  // SELENIUM_PROMISE_MANAGER: false,//does not work on win10
  specs: ['../test/Google.spec.js'],
  noGlobals: true ,
  onPrepare: () => {
    browser.ignoreSynchronization = true ;
    reporter();
  }
};
