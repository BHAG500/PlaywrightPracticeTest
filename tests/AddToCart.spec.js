import{test, expect} from '@playwright/test';
import config from '../config.json';
import{LoginPage} from '../pages/LoginPage';
//Test case : Add to cart
test.describe('Add to cart flow', () =>{
  test('Should add item to cart and verify', async({page})=>{
//Navigate to the application
await page.goto(config.url);
await page.waitForTimeout(2000);
//click on the product and add to cart
await page.click("//h5[normalize-space()='Combination Pliers']");
await page.click('#btn-add-to-cart');
await page.waitForTimeout(5000);
//Go to cart and verfiy the itme is added to cart 
await page.click("a[aria-label='cart'] fa-icon[class='ng-fa-icon px-1'] svg");
await page.waitForTimeout(3000);
//Verify the item is added to cart
const cartItem = await page.locator("//span[@class='product-title']");
await expect(cartItem).toContainText("Combination Pliers");



  })


} )