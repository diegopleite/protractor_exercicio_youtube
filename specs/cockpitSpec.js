var helper = require('../helper/helper.js');
var HtmlReporter = require('protractor-html-screenshot-reporter');


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
                element(by.css('.dropdownlist-list input')).sendKeys('DCG').sendKeys(protractor.Key.ENTER);
                browser.sleep(1000);
                browser.actions().mouseMove(element(by.css('#app-title .tooltip-icon'))).perform();
                browser.sleep(5000);
                // var toolTip = element(by.css('#app-title .tooltip-icon'))
                // var tooltiptext = toolTip.getAttribute('data-tip');
                expect(tooltiptext.getText()).toBe('');

                // const messageIcon = $('#app-title');
                // browser.actions().mouseMove(messageIcon).perform().then(() => {
                //     const tooltip = $('#app-title .tooltip-icon');
                //     browser.wait(protractor.ExpectedConditions.visibilityOf(tooltip), 5000, 'Expected tooltip to appear').then(() => {
                //         expect(tooltip.getText()).toBe('My tooltip text');
                //     });
                // }
                // );

            }
        );
    });