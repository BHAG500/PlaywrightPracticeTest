exports.HomePage = class HomePage{
    constructor(page){
        this.page=page;
        this.ProductList='//*[@id="categorymenu"]/nav/ul/li[1]/a';
        this.addToCartbtn = '//*[@id="block_frame_featured_1769"]/div/div[1]/div[2]/div[3]/a';
        this.cart= '//*[@id="main_menu_top"]/li[3]/a/span';

    }

async addProductToCart(productName){
    const ProductList= await this.page.$$(this.ProductList);
    for(const product of productList){
        if(productName == await product.textContent){
            await product.click();
            break;

        }
    }
    await this.page.on('dialog', async dialog =>{
        if(dialog.message().includes('added')){
            await dialog.accept();

 } })
 await this.page.locator(this.addToCartbtn).click();
    }

 async verifyWelcomeText(){
    await expect(this.page.getByText('Welcome back Jen', { exact: true }));


 }

 

 
}






