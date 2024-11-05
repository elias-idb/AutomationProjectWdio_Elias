const checkOutLocators = require("./checkOutLocators");

class CheckOutActions{
    async clickOnCheckOutButton(){
        await checkOutLocators.buttonCheckOut.click();
    }

    async enterBuyerFirstName(firstName){
        await checkOutLocators.buyerFirstNameInput.setValue(firstName);
    }

    async enterBuyerLastName(lastName){
        await checkOutLocators.buyerLastNameInput.setValue(lastName);
    }

    async enterBuyerPostalCode(postalCode){
        await checkOutLocators.buyerPostalCodeInput.setValue(postalCode);
    }

    async clickOnContiniueButton(){
        await checkOutLocators.buttonContiniue.click();
    }

    async selectedProductBackPack(){    
        const getProductBackPack =  await checkOutLocators.productBackpack.getText();
        return getProductBackPack;     
    }

    async selectedProductBackLight(){       
        const getProductBackLight =  await checkOutLocators.productBackLight.getText();
        return getProductBackLight;        
    }

    async selectedProductBackTshirtt(){       
        const getProductBackTshirt =  await checkOutLocators.productBackTshirt.getText();
        return getProductBackTshirt;        
    }

    async selectedProductRedTshirt(){       
        const getProductRedTshirt =  await checkOutLocators.productRedTshirt.getText();
        return getProductRedTshirt;        
    }

     

}

module.exports = new CheckOutActions();
