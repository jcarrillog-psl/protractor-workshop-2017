import { browser, Config } from 'protractor' ;
import { reporter } from './helpers/reporter' ;

export const config: Config = {
  framework: 'jasmine' ,
  SELENIUM_PROMISE_MANAGER: false , // does not work on win10
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 3000,
  noGlobals: true ,
  onPrepare: () => {
    browser.ignoreSynchronization = true ;
    browser.manage().timeouts().implicitlyWait(3000);
    reporter();
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
