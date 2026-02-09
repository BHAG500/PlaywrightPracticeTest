import { test, expect } from '@playwright/test';
exports.LogoutPage = class LogoutPage{
    constructor (page){
        this.page=page;
        this.WelcomeBack='//*[@id="customer_menu_top"]/li/a/div';
         this.Logout='//*[@id="customer_menu_top"]/li/ul/li[10]/a';
         this.header="//span[@class='maintext']";

   }



async LogoutfromApplication(){
    await this.page.click(this.WelcomeBack);
    await this.page.click(this.Logout);

}
async verifyLogout (){
    await expect(this.page.locator(this.header)).toBeVisible();
}

}