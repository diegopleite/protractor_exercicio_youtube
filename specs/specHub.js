var helper = require('../helper/helper.js');

describe(
    "Teste regressão API HUB",
    function(){
        beforeAll(
            function(){            
                browser.waitForAngularEnabled(false);    
                //browser.get('/#/v1/marketplaces');                
            }
        );

        it(

            "Should login as user",
            function(){
                helper.login();
                browser.wait(ExpectedConditions.presenceOf($('#middle')));
                // browser.get('/#/v1/marketplaces');
                var unidadeNegocio = element(by.css('#hubMarketplaces > .dropdown-menu > li:nth-child(1) > a'));
                unidadeNegocio.click();
                browser.wait(ExpectedConditions.elementToBeClickable(unidadeNegocio));             
            }
        )
    }
)