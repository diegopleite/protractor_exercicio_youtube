var helper = require('../helper/helper.js');
var HtmlReporter = require('protractor-html-screenshot-reporter');
const { element, browser } = require('protractor');


describe(
    "Teste automatizado exercicios Protractor",

    function () {
        var EC = protractor.ExpectedConditions;
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
                element(by.css('li[data-value="dcg"]')).click();

            }
        );

        it(
            'Should validate text title',
            function () {
                browser.sleep(1000);
                var tooltip = element(by.css('#app-title h1'));
                expect(tooltip.getText()).toContain(`Todas as entregas`);
            }
        );

        it(
            'Should validate layout of "Cadastro de Filiais"',
            function () {               
                browser.wait(EC.textToBePresentInElement($('#app-title h1'), 'Todas as entregas'));
                browser.get('/locations');
                browser.wait(EC.textToBePresentInElement($('#app-title h1'), 'Cadastro de filiais'));         
                
                browser.wait(EC.elementToBeClickable($('.fa-plus')), 5000);       

                var location = element(by.css('.fa-plus'));
                location.click();
                
                
                expect(element(by.css('#app-title h1')).getText()).toContain('Adicionar filial');
                expect(browser.wait(EC.presenceOf($('form'))), 5000);


            }
        );
    });