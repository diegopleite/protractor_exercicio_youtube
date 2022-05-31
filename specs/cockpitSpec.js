var helper = require('../helper/helper.js');
var HtmlReporter = require('protractor-html-screenshot-reporter');
const { element, browser } = require('protractor');


describe(
    "Teste automatizado exercicios Protractor",

    function () {

        beforeEach(
            function () {
                browser.waitForAngularEnabled(false);
                browser.get('/');
            }
        );

        it(
            'Should select store ',
            function () {
                helper.login();
                browser.sleep(1000);
                element(by.css('.store-selector')).click();
                browser.sleep(1000);
                var dropDown = element(by.css('.dropdownlist-list input')).sendKeys('DCG');
                browser.sleep(1000);  
                var el = element(by.css('li[data-value="dcg"]')).click();   
                browser.sleep(1000);
                var selector = element(by.css('.store-selector'))
                expect(selector.getText()).toContain('DCG');            
            }
        );

        it(
            'Should validate text title',
            function(){
                browser.sleep(1000);
                var tooltip = element(by.css('#app-title h1'));
                expect(tooltip.getText()).toContain(`Todas as entregas`);
            }
        );

        it(
            'Should validate layout of "Cadastro de Filiais"',
            function(){                
                browser.get('/locations')
                browser.sleep(1000);
                var title = element(by.css('#app-title h1'));
                expect(title.getText()).toContain(`Cadastro de filiais`);
            }
        );
    });