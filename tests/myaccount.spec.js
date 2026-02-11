import { test, expect } from '@playwright/test'
import config from '../config.json';
import { HomePage } from '../pages/Homepage';
import{LoginPage} from '../pages/LoginPage';
import { BasePage } from '../pages/BasePage';

//Test case : Verify user can login and view account details
//test.describe('Verify user can login and view account details', () => {
    test('Login and view account details', async({page})=>{
        //Instantiate the page objects
        const loginPage = new LoginPage(page);
        const homePage= new HomePage(page);

        // Navigate to the Login page using config URL 
        await loginPage.gotoLoginPage();

        //Login to the application using credentails usng config file
        await loginPage.login(config.username, config.password);

        //Verify home page/account loads
          //await homePage.waitForUrlContains('account');
         // await homePage.verifyWelcomeText();
    

    //Click on the account link
   await page.getByRole('link', { name: 'Account' }).first().click();
   
  
   // Verify account sections are visible
   await expect(page.getByRole('heading', {name: 'My Account', exact: true})).toBeVisible();
   await expect(page.getByRole('link', {name: /Manage Address Book/i})).toBeVisible();
   await expect(page.getByRole('link', {name: /Order history/i})).toBeVisible();
   await expect(page.getByRole('link', {name: /Downloads/i})).toBeVisible();
   await expect(page.getByRole('link', {name: /Transaction history/i})).toBeVisible();    

    })  









