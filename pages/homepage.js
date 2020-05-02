class HomePage
{
    get pageHeader()
    {
        return $('h1');
    }

    get subHeader()
    {
        return $("//p[contains(text(),'Delight')]");
    }

    get supportLink()
    {
        return $("//li[@class='nav-main-item caps-heading-12 has-sub-menu    '][3]");
    }

    

}

module.exports = new HomePage();