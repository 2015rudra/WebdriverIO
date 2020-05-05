class Blazemeter
{
        get parent()
        {
            return $("//ul[@class='list-nav-links']");
        }

        get childElement()
        {
            return this.parent.$$('li');
        }

        get litext()
        {
            return this.childElement.filter(elements => {
                console.log(elements.getText());
            });
        }

        get getusercases()
        {

            return $$("//div[@id='main_b_footer_second_block']//li");
        }

        get usecasestext()
        {
            return this.getusercases.filter(usecases =>{

                console.log(usecases.getText());
            });
        }


        specifiChileElement(index)
        {
            return this.parent.$(`li:nth-child(${index})`);
        }

        getSpecificChildElement(index)
        {
            console.log(this.specifiChileElement(index).getText());
        }

        /* get ApplicationLogo()
        {
           const elem = $("//div[@class='logo-img']");
        let isDisplayed = elem.isDisplayed();
        console.log(isDisplayed); 
        } */
}


module.exports = new Blazemeter();
