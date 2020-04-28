describe("Interaction with WebdriverIO", function(){

    it("Enter value in field" , function()
    {
        browser.url('/')
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');

    })

});