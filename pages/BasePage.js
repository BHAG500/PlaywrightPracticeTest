import {page, locator, expect} from '@playwright/test';
exports.BasePage= class BasePage{
    constructor(page){
        this.page= page;

    }
    async navigateToURL(url){
        await this.page.goto(url);

    }

    async clickElement(locator){
        await this.page.locator(locator).click();
    }
    async fill(locator, value){
        await this.page.locator(locator).fill(value);
    }
    async waitForUrlContains(url){      
        //await this.page.waitForURL(`**${url}**`);
         await expect(this.page).toHaveURL(new RegExp(url), { timeout: 5000 });
} 

async waitForVisible(locator){
    await expect(this.page.locator(locator)).toBeVisible({ timeout: 5000 });
    
}
}
