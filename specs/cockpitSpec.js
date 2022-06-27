var helper = require('../helper/helper.js');
var HtmlReporter = require('protractor-html-screenshot-reporter');
const { element, browser, $ } = require('protractor');


describe(
    "Teste automatizado exercicios Protractor",

    function () {
        var EC = protractor.ExpectedConditions;
        beforeEach(
            function () {
                browser.waitForAngularEnabled(false);
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
                //helper.login();    
                browser.wait(EC.textToBePresentInElement($('#app-title h1'), 'Todas as entregas'));
                browser.get('/locations');
                browser.wait(EC.textToBePresentInElement($('#app-title h1'), 'Cadastro de filiais'));

                browser.wait(EC.elementToBeClickable($('.fa-plus')), 5000);

                var location = element(by.css('.fa-plus'));
                location.click();


                expect(element(by.css('#app-title h1')).getText()).toContain('Adicionar filial');
                expect(browser.wait(EC.presenceOf($('form'))));
                expect(browser.wait(EC.presenceOf($('.form-group input'))));
                expect(browser.wait(EC.presenceOf($('.form-group label'))));
                expect(browser.wait(EC.presenceOf($('.checkbox'))));

            }
        );

        // it(
        //     'Should validate required field: Nome fantasia',
        //     function () {
        //         //helper.login();
        //         browser.get('locations/new');

        //         browser.wait(EC.elementToBeClickable($('input[name="tradingName"')), 5000);
        //         $('input[name="tradingName"').click().then(function () {
        //             $('#react-tabs-0').click();
        //             expect(element(by.css('.has-error')));
        //         });
        //     }
        // );

        it(
            'Should validate required field: Nome fantasia',
            function () {
                // helper.login();
                browser.get('locations/new');

                var button = $('.fa-check');
                browser.wait(EC.elementToBeClickable($('.fa-check')), 5000);
                button.click();

                var modal = $('.bootbox-body');
                browser.wait(EC.elementToBeClickable($('.modal-footer button')), 5000);
                expect(modal.getText()).toContain('Informe o Nome fantasia.');
            }
        );

        fit(
            'Should validate required field: Bairro',
            function () {
                helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="address.neighbourhood"')), 5000);
                $('input[name="address.neighbourhood"').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        it(
            'Should validate required field: Estado',
            function () {
                // helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="address.state"]')), 5000);
                $$('input[name="address.state"] .rw-select').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        it(
            'Should validate required field: Id',
            function () {
                //helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="id"')), 5000);
                $('input[name="id"').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        it(
            'Should validate required field: CNPJ',
            function () {
                //helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="documents.cnpj"')), 5000);
                $('input[name="documents.cnpj"').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        it(
            'Should validate required field: Razão social',
            function () {
                //helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="description"')), 5000);
                $('input[name="description"').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        it(
            'Should validate required field: CEP',
            function () {
                //helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="address.zip"')), 5000);
                $('input[name="address.zip"').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        it(
            'Should validate required field: Endereço',
            function () {
                //helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="address.address1"')), 5000);
                $('input[name="address.address1"').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        it(
            'Should validate required field: Numero',
            function () {
                //helper.login();
                browser.get('locations/new');

                browser.wait(EC.elementToBeClickable($('input[name="address.number"')), 5000);
                $('input[name="address.number"').click().then(function () {
                    $('#react-tabs-0').click();
                    expect(element(by.css('.has-error')));
                });
            }
        );

        // it(
        //     'Should validate include Nova Filial',
        //     function () {
        //         //helper.login();
        //         browser.get('locations/new');

        //         browser.wait(EC.elementToBeClickable($('input[name="tradingName"')), 5000);
        //         $('input[name="tradingName"').click().then(function () {
        //             $('#react-tabs-0').click();
        //             expect(element(by.css('.has-error')));
        //         });
        //     }
        // );

        // it(
        //     'Should validate duplicate subscribe form',
        //     function () {
        //         //helper.login();
        //         browser.get('locations/new');

        //         browser.wait(EC.elementToBeClickable($('input[name="tradingName"')), 5000);
        //         $('input[name="tradingName"').click().then(function () {
        //             $('#react-tabs-0').click();
        //             expect(element(by.css('.has-error')));
        //         });
        //     }
        // );
    });