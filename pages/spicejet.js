class spiceJet
{
    get parent()
    {
        return $("//li[@class='li-login float-right tabres']");
    }

    get child1()
    {
        return $('=SpiceClub Members');
    }

    get child2()
    {
        return $('=Member Login');
    }

    moveToElement(element)
    {
        element.waitForDisplayed();
        element.moveTo();
    }

    clickElement(element)
    {
        element.waitForDisplayed();
        element.click();
    }

}

module.exports = new spiceJet();