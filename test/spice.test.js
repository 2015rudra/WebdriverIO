const spiceJetPage = require("../pages/spicejet");


describe("Perform Move to Element Operation", function()
{

    it("Move to SignUp options", function()
    {
        browser.url("https://www.spicejet.com/");
        //browser.maximizeWindow();
        spiceJetPage.moveToElement(spiceJetPage.parent);
        //spiceJetPage.clickElement(spiceJetPage.parent);
        browser.pause(5000);
        //spiceJetPage.moveToElement(spiceJetPage.child1);
        //spiceJetPage.clickElement(spiceJetPage.child1);
        //browser.pause(5000);
    });


});