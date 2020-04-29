describe("Interaction with WebdriverIO", function(){

    it("Enter value in field" , function()
    {
        browser.url('/')
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');

        browser.pause(5000);

        const label = $('//span[@class="a-size-base a-color-base"]');
        let text = label.getText();
        console.log(text);

    })

});