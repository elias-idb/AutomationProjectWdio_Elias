const loginActions = require("../pages/login/loginActions");
const resetAppActions = require("../pages/reset/resetAppActions");
const filterActions = require("../pages/filter/filterActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkOutActions = require("../pages/checkOut/checkOutActions");
const verifyOrderActions = require("../pages/verifyOrderMessage/orderMessageActions");
const returnHomeActions = require("../pages/returnHomePage/returnHomeActions");
const logoutActions = require("../pages/logut/logoutActions");
const utility = require("../Utilities/utility");
const orderMessageActions = require("../pages/verifyOrderMessage/orderMessageActions");


const userName = "performance_glitch_user";
const password = "secret_sauce";

const firstName = "Md.";
const lastName = "Elias";
const postalCode = "3228";


describe("Automation of purchase journey for performance glitch user", () => {
    it("Should able to successfully login", async() => {
        await loginActions.enterUserName(userName);
        await loginActions.enterPassword(password);
        await loginActions.clickOnLoginButton();       
    })

    it("Should able to click reset app state button", async() => {
        await resetAppActions.clickOnHamburgerMenuButton();
        await resetAppActions.clickOnresetAppStateButton();
        await browser.pause(5000);    
    })

    it("Should able to click filter product by name(Z-A)", async() => {
        await filterActions.clickOnFilterByNameDropdown();
        await filterActions.clickOnZtoA_Option();
      
        await browser.pause(5000);    
    })

    it("Should able to successfully add product in the cart", async () => { 
        await addToCartActions.productRedShirtAddtoCartButton();
        await addToCartActions.clickOnCart();
        await browser.pause(5000);
   
    });

    it("Should able to click checkout button", async() => {
        await checkOutActions.clickOnCheckOutButton();
        await checkOutActions.enterBuyerFirstName(firstName);
        await checkOutActions.enterBuyerLastName(lastName);
        await checkOutActions.enterBuyerPostalCode(postalCode);
        await checkOutActions.clickOnContiniueButton();
         
        await browser.pause(5000); 

    })

    it("Should able to verify product name", async () => { 
        const expectedProductRedTeaShirt = "Test.allTheThings() T-Shirt (Red)";
        var actualProductRedTeaShirt = await checkOutActions.selectedProductRedTshirt();
        expect(expectedProductRedTeaShirt).toEqual(actualProductRedTeaShirt);        
        await browser.pause(5000); 

    });

    it("Should able to finish purchase and verify order confirmation message", async () => {         
        await orderMessageActions.clickOnFinishButton(); 

        const expectedOrderMessage = "Thank you for your order!";
        const actualOrderMessage = await orderMessageActions.getOrderMessage();
        expect(expectedOrderMessage).toEqual(actualOrderMessage);

        await browser.pause(5000); 

    });

    it("Should able to return home page, resetp app state", async () => {        
        await returnHomeActions.clickOnBackHomeButton(); 
        await resetAppActions.clickOnHamburgerMenuButton();
        await resetAppActions.clickOnresetAppStateButton();
        await browser.pause(5000); 

    });

    it("Should able to successfully logout", async () => {        
        await logoutActions.clickOnLogoutButton(); 
      
        await browser.pause(5000); 

    });

})