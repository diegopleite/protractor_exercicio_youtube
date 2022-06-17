var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",

    specs: [
        "../specs/cockpitSpec.js"     
    ],
    baseUrl : 'https://oms-homolog.chaordic.com.br/',
    capabilities:{
        browserName:"chrome"
    }, 

    params: {
        adminLogin: {
          'user_email' : 'no-oms-automated@linx.com.br',
          'user_password': 'g99M1RtM'
        }
      },
    //   {
    //     "user": "no-oms-automated@linx.com.br",
    //     "pass": "g99M1RtM"
    //     }
    
    // Setup the report before any tests start
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    },    
   
    // onPrepare: function(){
    //   jasmine.getEnv().addReporter(new SpecReporter({
    //     displayFailuresSummary: true,
    //     displayFailuredSpec: true,
    //     displaySuiteNumber: true,
    //     displaySpecDuration: true
    //   }));
    // } 
}