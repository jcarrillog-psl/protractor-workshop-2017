exports.config = {
	framework: 'jasmine' ,
	seleniumAddress: 'http://localhost:4444/wd/hub' ,
	specs: [ 'test/spec.js' ],
	//specs: [ 'test/Google.spec.js'],
	//specs: [ 'test/spec.js','test/Google.spec.js'],
	//onPrepare: () => {
	//	browser.ignoreSynchronization = true ;
	//}
}