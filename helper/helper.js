const { DriverProvider } = require("protractor/built/driverProviders");
const driver = require('protractor');

//helper.js
var adminLogin = browser.params.adminLogin;

module.exports = {
    verifyElementPresenceById : function(id){
        var element = $('#' + id);
        expect(element.isDisplayed()).toBeTruthy();
    },
    verifyElementPresenceByClass : function(clss){
        var element = $('.' + clss);
        expect(element.isDisplayed()).toBeTruthy();
    },
    verifyElementPresenceByTag : function(tag){
        var element = $(tag);
        expect(element.isDisplayed()).toBeTruthy();
    },

    login : function(){
        var user = adminLogin.user_email
        , password = adminLogin.user_password;

        driver.browser.manage().window().maximize();
        browser.get('/');

        var userName = $('input#user_email'),
        userPassword = $('input#user_password'),
        submitButton = $('.btn-block[type="submit"]');
        userName.sendKeys(user).then(function(){
            userPassword.sendKeys(password).then(function(){
                submitButton.click();
            });
        });
    },

    loginHub : function(){
        var user = adminLogin.user
        , password = adminLogin.password;

        driver.browser.manage().window().maximize();
        browser.get('/');

        var userName = $('input#UserName'),
        userPassword = $('input#Password'),
        submitButton = $('.btn-login');
        userName.sendKeys(user).then(function(){
            userPassword.sendKeys(password).then(function(){
                submitButton.click();
            });
        });
    }
}