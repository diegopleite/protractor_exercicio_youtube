var HtmlReporter = require('protractor-html-screenshot-reporter');

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
    
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'reports/tmp'
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