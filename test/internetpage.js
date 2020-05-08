const internet = require("../pages/internet.page")

describe("Internet Page checkbox operation", function()
{

    it("Check Page URL", function()
    {

        browser.url("https://the-internet.herokuapp.com/");
        browser.maximizeWindow();
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/");

    });
    

    it("Checkbox Selection", function()
    {

        browser.url("https://the-internet.herokuapp.com/");
        browser.maximizeWindow();
        internet.clickonElement(6);
        internet.clickonCheckbox(1);

        expect(internet.getCheckboxElements(1).isSelected()).equals(true);

        browser.pause(5000);

    });

});