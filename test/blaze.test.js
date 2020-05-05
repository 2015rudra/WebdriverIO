const blaze = require("../pages/blazemeter")


describe("Element of Blazemeter", function(){

    it("get all links text", function()
    {
        browser.url('https://www.blazemeter.com/');
        browser.maximizeWindow();
        //blaze.litext;
        //blaze.usecasestext;
       console.log(blaze.specifiChileElement(3).getText());
       blaze.getSpecificChildElement(4);
      //blaze.ApplicationLogo;
    })

});


