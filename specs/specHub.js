var helper = require('../helper/helper.js');

describe(
    "Teste regressão API HUB",
    function(){
        beforeAll(
            function(){            
                browser.waitForAngularEnabled(false);    
                browser.get('/');
                var login = $('#UserName');
                login.sendKeys('core.diego.leite')
                var password = $('#Password');
                password.sendKeys('Diego001');
                password.sendKeys(protractor.Key.ENTER);
            }
        );

        it(
            "Should access validate if channel exists",
            function(){
                element(by.css('.unit-selector-container .dropdown-menu'));

                var marketplaces = element(by.binding('marketplace.zoom'));
                expect(marketplaces.getText()).toBe('Zoom');
                // var button = marketplaces.element(by.css('btn'));
                expect(button.getText()).toBe('Ativar');
                // browser.wait(ExpectedConditions.elementToBeClickable(button));
                // button.click();
                
            }
        )
    }
)