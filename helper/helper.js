//helper.js

module.exports = {
    verifyElementPresenceById : function(id){
        var element = $('#' + id);
        expect(element.isDisplayed()).toBeTruthy();
    },
    verifyElementPresenceByClass : function(clss){
        var element = $('.' + clss);
        expect(element.isDisplayed()).toBeTruthy();
    }
}