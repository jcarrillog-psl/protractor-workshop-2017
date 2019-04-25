exports.config = {
	framework: 'jasmine' ,
	SELENIUM_PROMISE_MANAGER: false,
	specs: [ 'test/Google.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    },
  },
	onPrepare: () => {
		browser.ignoreSynchronization = true ;
	}
}
