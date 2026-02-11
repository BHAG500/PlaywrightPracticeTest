


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