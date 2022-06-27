const { browser } = require('protractor');
var helper = require('../helper/helper.js');

describe(
    "Teste regressão API HUB: ",
    function(){
        var EC = protractor.ExpectedConditions;
        beforeAll(
            function(){            
                browser.waitForAngularEnabled(false);    
                //browser.get('/#/v1/marketplaces');                
            }
        );

        it(

            "Should login as user",
            function(){
                helper.loginHub();
                browser.sleep(1000);
                browser.get('/#/v1/marketplaces');

                browser.wait(EC.elementToBeClickable($('.unit-selector-container')),5000);
                
                            
            }
        )
    }
)