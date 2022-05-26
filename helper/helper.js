//helper.js

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
    }

}