const addToCartLocators = require("./addToCartLocators");

class AddToCartActions {
    async productBackpackAddtoCartButton(){
        await addToCartLocators.productBackpack.click();
    }

    async productBackLightAddtoCartButton(){
        await addToCartLocators.productBackLight.click();
    }

    async productBackTshirtAddtoCartButton(){
        await addToCartLocators.productBackTshirt.click();
    }

    //After filter product

    async productRedShirtAddtoCartButton(){
        await addToCartLocators.productRedShirt.click();
    }

    async clickOnCart(){
        await addToCartLocators.clickOnCart.click();
    }


}

module.exports = new AddToCartActions();