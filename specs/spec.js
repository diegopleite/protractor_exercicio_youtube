var helper = require('../helper/helper.js');

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
            "Should navigate firs post",
            function(){
                var title = $$('.post-content .entry-title').first();
                expect(title.getText()).toBe('Ciclo de Vida dos Widgets no Flutter');
            }
        );
    }
);