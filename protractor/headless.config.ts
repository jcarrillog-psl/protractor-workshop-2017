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
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  },
  capabilities: {// version headless of chrome
    browserName: 'chrome' ,
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
