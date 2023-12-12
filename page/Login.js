exports.LogIn = class LogIn {
    
    EmailAddress = "input[data-qa='login-email']";
    Password = "input[placeholder='Password']";
    btnLogin = "button[data-qa='login-button']";
  
    constructor(page){
        this.page = page;
    }
    // providing email address
    async enterEmail(email) {
     // cy.get(this.EmailAddress).type(email);
      await this.page.locator(this.EmailAddress).fill(email);
    };
  
    // providing password
    async enterPassword(pass) {
      //cy.get(this.Password).type(pass);
      await this.page.locator(this.Password).fill(pass);
    };
  
    // clicking login btn
    async clickLogIn() {
      //cy.get(this.btnLogin).click();
      await this.page.locator(this.btnLogin).click();
    };
  }
