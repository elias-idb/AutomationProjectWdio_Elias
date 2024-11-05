1.Take standard_user.spec.js file in specs folder use this code in standard_user.spec.js
    const loginActions = require("../pages/login/loginActions");

    const userName = "standard_user";
    const password = "secret_sauce";

    describe("Demo ecommerce site automation", () => {
        it("Should able to successfully login", async() => {
            await loginActions.enterUserName(userName);
            await loginActions.enterPassword(password);
            await loginActions.clickOnLoginButton();
            await browser.pause(5000);
        
        })

    })

2.open wdio.conf.js file 
    a.write this code for finding path standard_user.spec.js file
        const standard_user = "./test/specs/standard_user.spec.js"
    b.use standard_user variable in specs 
        specs: [
            standard_user
        ],
3.Then run project in terminal use this code
    npm run test  
4.Create reset folder in pages folder
5.create resetAppLocators.js file in reset folder
    a.writ this code in errorMessageLocators.js
        class ResetAppLocators{
            get hamburgerMenuButton(){
                return $("//button[@id='react-burger-menu-btn']");
            }

            get resetAppStateButton(){
                return $("//a[@id='reset_sidebar_link']");
            }

    
        }

module.exports = new ResetAppLocators();


6.create resetAppActions.js file in reset folder 
    a.writ this code in errorMessageLocators.js 
        const resetAppLocators = require("./resetAppLocators");

            class ResetAppActions{  
                async clickOnHamburgerMenuButton(){
                    await resetAppLocators.hamburgerMenuButton.click();
                }

                async clickOnresetAppStateButton(){
                    await resetAppLocators.resetAppStateButton.click();
                }
            }

        module.exports = new ResetAppActions();
       
7.create new it function in describe function for reset appp state
    it("Should able to click reset app state button", async() => {
        await resetAppActions.clickOnHamburgerMenuButton();
        await resetAppActions.clickOnresetAppStateButton();
        await browser.pause(5000);    
    })

8.Then run project in terminal use this code
    npm run test 
    
9.Create addToCart folder in pages folder          