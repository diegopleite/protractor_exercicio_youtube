let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",

    specs: [
        "../specs/spec.js",
        "../specs/spec.others.js"        
    ],
    baseUrl : 'https://blog.taller.net.br/',
    capabilities:{
        browserName:"chrome"
    },

    // onPrepare: function () {
    //   let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    //   jasmine.getEnv().addReporter(new SpecReporter({
    //     spec: {
    //       displayStacktrace: all
    //     },
    //     summary: {
    //       displayDuration: true
    //     }
    //   }));
    // }  
    onPrepare: function(){
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }));
    } 
}