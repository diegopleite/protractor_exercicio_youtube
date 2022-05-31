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
            'Should validate tooltip',
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
    });