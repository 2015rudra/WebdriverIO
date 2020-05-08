class InternetPage
{

    getlinkElements(index)
    {
        return $(`ul li:nth-child(${index}) a`);
    }

    clickonElement(index)
    {
        this.getlinkElements(index).waitForDisplayed();
        this.getlinkElements(index).click();
    }


    getCheckboxElements(index)
    {

        return $(`form#checkboxes input:nth-child(${index})`)

    }

    clickonCheckbox(index)
    {
        this.getCheckboxElements(index).waitForDisplayed();
        this.getCheckboxElements(index).click();
    }

}

module.exports = new InternetPage();