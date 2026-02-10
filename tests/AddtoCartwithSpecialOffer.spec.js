import {test, expect} from '@playwright/test';
import config from'../config.json';
import { LoginPage}from '../pages/LoginPage';
import { SpecialoffersPage} from '../pages/SpecialOffersPage';
test('Add to cart with special offer', async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login("jen_perry_12345", "Pass_1234#" )

    const specialoffersPage=new SpecialoffersPage(page);
    await specialoffersPage.SpecialoffersPage();
    await specialoffersPage.verifyProcuctAddedToCart();
    


}
)
