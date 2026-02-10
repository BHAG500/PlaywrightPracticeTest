exports.SpecialoffersPage = class SpecialoffersPage{
    constructor(page){
        this.page=page;
        this.SpecialoffersLink='//*[@id="main_menu_top"]/li[1]/a/span';
        this.ProductItem='//*[@id="maincontainer"]/div/div/div/div/div[2]/div[1]/div[2]/a/img';
        this.AddToCardbtn='//*[@id="product"]/fieldset/div[4]/ul/li/a';
       // this.header='//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[1]/a/img';


    }

    async SpecialoffersPage(){
        await this.page.locator(this.SpecialoffersLink).click();
        await this.page.locator(this.ProductItem).click();
        await this.page.locator(this.AddToCardbtn).click();
        



    }


    //This code is not working 

     async verifyProcuctAddedToCart(){
        await expect(
  this.page.getByRole('link', { name: /Absolue Eye Precious Cells/i })).toBeVisible();


}
}
