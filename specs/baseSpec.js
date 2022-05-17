describe(
    "Testes End-to-end no youtube",
    function(){
        var enderecoTeste = "https://youtube.com";

        beforeEach(
            function(){
                browser.waitForAngularEnabled(false);
                browser.get(enderecoTeste);
            }
        );

        it(
            "Escrever na barra de buscas",
            function(){
                var campoBusca = element(by.css('input#search'));
                var botaoFiltro = element(by.css("tp-yt-paper-button#button"));

                browser.wait(ExpectedConditions.elementToBeClickable(campoBusca));
                campoBusca.sendKeys("QArentena");
                campoBusca.sendKeys(protractor.Key.ENTER);

                browser.wait(ExpectedConditions.presenceOf(botaoFiltro));
                
            }
        )
    }
);