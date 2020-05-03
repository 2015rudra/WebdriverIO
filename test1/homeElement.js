const homePage = require("../pages/homepage")

describe("Home Page Elements using Pages", function()
{

    it("Verify Home Page header", function()
    {
        browser.url("https://www.freshworks.com/")
        browser.maximizeWindow();
        let headingText = homePage.pageHeader.getText();
        console.log(headingText);
        
        console.log(homePage.subHeader.getText());

        homePage.supportLink.click();
        

        browser.pause(5000);



    });

});