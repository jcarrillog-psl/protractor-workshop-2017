import { browser, Config } from 'protractor' ;
import { reporter } from './helpers/reporter' ;

export const config: Config = {
  framework: 'jasmine' ,
  SELENIUM_PROMISE_MANAGER: false , // does not work on win10
  specs: ['../test/**/*.spec.js'],
  noGlobals: true ,
  onPrepare: () => {
    browser.ignoreSynchronization = true ;
    reporter();
  }
};
