
import { test, expect } from '@playwright/test';
test('LoginTest', async({page})=>{
await page.goto('https://practicesoftwaretesting.com/');
await page.click('//*[@id="navbarSupportedContent"]/ul/li[4]/a');
   await page.locator('#email').fill("gubbalatest100@yahoo.com") ;
   await page.locator('#password').fill("Passw0rd100#@");
   await page.click("//input[@value='Login']");
   await page.waitForTimeout(3000);

   const nameOfUser=await page.locator('#menu')
   await expect(nameOfUser).toContainText(" Babu Kavuru ");
})


