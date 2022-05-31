let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",

    specs: [
        "../specs/specHub.js"        
    ],
    baseUrl : 'https://eldorado.admin.core-hlg.dcg.com.br/',
    capabilities:{
        browserName:"chrome"
    },
    params: {
      adminLogin: {
        'user' : 'core.diego.leite',
        'password': 'Diego001'
      }
    },
 
    onPrepare: function(){
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }));
    } 
}