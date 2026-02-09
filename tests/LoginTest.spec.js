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