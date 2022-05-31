var HtmlReporter = require('../node_modules/protractor-html-screenshot-reporter/index');

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
    
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'reports/tmp',
         takeScreenShotsOnlyForFailedSpecs: true
      }));
   }
   
    // onPrepare: function(){
    //   jasmine.getEnv().addReporter(new SpecReporter({
    //     displayFailuresSummary: true,
    //     displayFailuredSpec: true,
    //     displaySuiteNumber: true,
    //     displaySpecDuration: true
    //   }));
    // } 
}