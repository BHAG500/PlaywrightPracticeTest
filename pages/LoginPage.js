import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.loginLink = page.getByRole("link", { name: "Login or register" });
    this.usernameInput = page.locator("#loginFrm_loginname");
    this.passwordInput = page.locator("#loginFrm_password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async gotoLoginPage() {
    await this.navigateTo("https://automationteststore.com/");
  }

  async login(username, password) {
    await this.loginLink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
