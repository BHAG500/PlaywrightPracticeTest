import { test, expect } from '@playwright/test';
import{LoginPage} from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage'
//import config from '../config.json';

test('Logout from the application', async({page})=>{
const login = new LoginPage(page);
await login.gotoLoginPage();
await login.login("jen_perry_12345", "Pass_1234#");
const logout = new LogoutPage(page);
await logout.LogoutfromApplication()
await page.waitForTimeout(2000);
await logout.verifyLogout();





}
)