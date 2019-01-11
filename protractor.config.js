exports.config = {
	framework: 'jasmine' ,
	seleniumAddress: 'http://localhost:4444/wd/hub' ,
	//SELENIUM_PROMISE_MANAGER: false,
	specs: [ 'test/Google.spec.js'],
	onPrepare: () => {
		browser.ignoreSynchronization = true ;
	}
}
