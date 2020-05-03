const blaze = require("../pages/blazemeter")


describe("Element of Blazemeter", function(){

    it("get all links text", function()
    {
        browser.url('https://www.blazemeter.com/');
        blaze.litext
    })

});


