var helper = require('../helper/helper.js');

describe (
    'Other sites',
    function(){
        beforeEach(
            function(){
                browser.waitForAngularEnabled(false);
                browser.get('/');
            }
        );

        it(
            "should blog have a logo",
            function(){
                browser.get('/');
                helper.verifyElementPresenceByClass("logo");                
            }
        );

        it(
            "Should navigate through the site pages by relative URL",
            function(){
                var author = $$('.author').last();
                browser.get('/ciclo-de-vida-dos-widgets-no-flutter/');

                expect(author.getText()).toContain('Allan Carlos');

            }
        );

        it(
            "Should Search",
            function(){
                    var text = 'protractor'
                    var searchField = $(".search__container");
                    searchField.click();
                    var searchInput = $('input.search-panel__form');
                    searchInput.sendKeys(text).sendKeys(protractor.Key.ENTER);

                    helper.verifyElementPresenceByClass('archives-title');
                    expect($('.archives-title').getText()).toContain(`Resultados da busca para "${text}"`);
            }
        );
    }
);