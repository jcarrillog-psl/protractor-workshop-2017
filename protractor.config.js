exports.config = {
	framework: 'jasmine' ,
	SELENIUM_PROMISE_MANAGER: false,
	specs: [ 'test/Google.spec.js'],
	onPrepare: () => {
		browser.ignoreSynchronization = true ;
	}
}
