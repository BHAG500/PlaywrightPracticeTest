exports.LoginPage = class LoginPage{
constructor(page){
this.page= page;
this.LoginLink='//*[@id="customer_menu_top"]/li/a';
this.usernameInput='#loginFrm_loginname';
this.passwordInput='#loginFrm_password';
this.loginButton='//*[@id="loginFrm"]/fieldset/button';

}
async gotoLoginPage(){
    await this.page.goto('https://automationteststore.com/');
}

async login(username, password){
    await this.page.locator(this.LoginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
}


    }