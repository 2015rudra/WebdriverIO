describe("Interaction with WebdriverIO", function(){

    it("get the header text" , function()
    {
        browser.url('https://www.freshworks.com/')
        browser.maximizeWindow();
        const header = $('h1');
        let text = header.getText();
        console.log(text);

    });

});