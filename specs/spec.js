var helper = require('../helper/helper.js');
var HtmlReporter = require('protractor-html-screenshot-reporter');

describe(
    "Hello World", 

    function(){
        var enderecoTeste = 'https://blog.taller.net.br/';
        beforeEach(
            function(){
                browser.waitForAngularEnabled(false);
                browser.get(enderecoTeste);
            }
        );

        it(
            "Should have a logo",
            function(){
                helper.verifyElementPresenceByClass('logo');
            }
        );

        it(
            "Should have a img banner",
            function(){
                helper.verifyElementPresenceByClass('tag-widget')
            }
        );

        it(
            "Should navigate first post",
            function(){
                var title = $$('.post-content .entry-title').first();
                expect(title.getText()).toBe('Ciclo de Vida dos Widgets no Flutter');
            }
        );

        it(
            "Should enter post and have a title",
            function(){
                var title = $$('.post-content .entry-title').first();
                var titlePost = $('h1');
                title.click();

                expect(titlePost.getText()).toBe('Ciclo de Vida dos Widgets no Flutter');
                
            }        
        );

        it(
            "Should have a navbar",
            function(){
                var nav = element(by.css('.navbar'));
                expect(nav.isDisplayed()).toBeTruthy();

            }
        );
    }
);