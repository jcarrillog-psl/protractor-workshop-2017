import { browser, Config } from 'protractor' ;
import { reporter } from './helpers/reporter' ;

export const config: Config = {
	framework: 'jasmine' ,
	//seleniumAddress: 'http://localhost:4444/wd/hub' ,
	SELENIUM_PROMISE_MANAGER: false,
	specs: ['../test/Google.spec.js'],
	noGlobals: true ,
	onPrepare: () => {
		browser.ignoreSynchronization = true ;
		reporter();
	},
	capabilities: {//version headless of chrome
		browserName: 'chrome' ,
		chromeOptions: {
			args: [ '--headless', '--disable-gpu', '--window-size=800,600' ]
		}
	}
}
