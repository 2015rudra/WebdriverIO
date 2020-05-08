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


    it("Header is displayed", function()
    {
        browser.url('https://www.blazemeter.com/');
        browser.maximizeWindow();
        console.log(blaze.Header.isDisplayed());


    })

    it("Header is enabled", function()
    {
        browser.url('https://www.blazemeter.com/');
        browser.maximizeWindow();
        console.log(blaze.Header.isEnabled());


    })

    it("Header is displayed in view port", function()
    {
        browser.url('https://www.blazemeter.com/');
        browser.maximizeWindow();
        console.log(blaze.Header.isDisplayedInViewport());


    })

    it('should save a screenshot of the browser view', function () {
        const elem = $("//h2[@class='home_title']");
        elem.saveScreenshot('./Screenshots/first.png');
    });

});


