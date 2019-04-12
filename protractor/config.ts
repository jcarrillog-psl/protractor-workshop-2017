import { browser, Config } from 'protractor' ;
import { reporter } from './helpers/reporter' ;

export const config: Config = {
  framework: 'jasmine' ,
  seleniumAddress: 'http://localhost:4444/wd/hub' ,
  // SELENIUM_PROMISE_MANAGER: false,//does not work on win10
  // specs: ['../test/Google.spec.js'],
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 3000,
  noGlobals: true ,
  onPrepare: () => {
    browser.ignoreSynchronization = true ;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
