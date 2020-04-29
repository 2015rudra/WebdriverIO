describe("Interaction with WebdriverIO", function(){

    it("Enter value in field" , function()
    {
        browser.url('/')
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');

        browser.pause(5000);

    })

    it("Get text values" , function()
    {
        browser.url('/')
        browser.pause(5000);

        const label = $('//span[@class="a-size-base a-color-base"]');
        let text = label.getText();
        console.log(text);

    })


    it("Click on search" , function()
    {
        browser.url('/')
        
        const search = $('#twotabsearchtextbox');
        
        search.setValue('Apple Mac Book');

        browser.pause(5000);

        const button = $('//input[@class="nav-input" and @type="submit"]');
        button.click();
        browser.pause(5000);

    })



});