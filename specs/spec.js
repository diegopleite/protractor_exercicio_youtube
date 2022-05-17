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
                var logo = element(by.className('logo'));
                expect(logo.isDisplayed()).toBeTruthy();
            }
        );
    }
);