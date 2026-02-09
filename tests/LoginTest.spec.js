<<<<<<< HEAD
//import{test, expect}from ('@playwright/test');
//import { test, expect } from '@playwright/test';
/*test('LoginTest', async({page})=>{
await page.goto('https://demoblaze.com/index.html');
await page.click('#login2');
await page.fill('#loginusername', 'pavanol');
await page.fill('#loginpassword', 'test@123');
await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');
await waitForTimeout(3000);
const nameOfUser = await page.locator('#nameofuser');
=======

import { test, expect } from '@playwright/test';
test('LoginTest', async({page})=>{
await page.goto('https://practicesoftwaretesting.com/');
await page.click('//*[@id="navbarSupportedContent"]/ul/li[4]/a');
   await page.locator('#email').fill("gubbalatest100@yahoo.com") ;
   await page.locator('#password').fill("Passw0rd100#@");
   await page.click("//input[@value='Login']");
   await page.waitForTimeout(3000);
//Login successfull and verify the name of user is displayed on the page.
   const nameOfUser=await page.locator('#menu')
   await expect(nameOfUser).toContainText(" Babu Kavuru ");
})
>>>>>>> 05984c25d35f3872bde32682be39bbca13c8d0ab


await expect(nameOfUser).containsText('Welcome pavanol');



})*/
import { test, expect } from '@playwright/test'
import{LoginPage} from '../pages/LoginPage';
import config from '../config.json';
test('test', async({page})=>{
    const login= new LoginPage(page);
           await login.gotoLoginPage();
           await login.login('jen_perry_12345', 'Pass_1234#');

           await page.waitForTimeout(3000);
           const nameOfAccount = await page.locator ('//*[@id="maincontainer"]/div/div[1]/div/h1/span[1]');
           await expect(nameOfAccount).toContainText('My Account');
})