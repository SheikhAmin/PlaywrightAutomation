exports.Cart = class Cart {
    btnProduct = "a[href='/product_details/1']";
    btnAddtoCart = "button[type='button']";
    btnContinue = ".modal-footer > .btn";
    btnCart = ".shop-menu > .nav > :nth-child(3) > a";
    btnProceed = ".col-sm-6 > .btn";
    OrderData = "textarea[name='message']";
    btnPlaceOrder = ".btn.btn-default.check_out";
    NameOnCard = '[data-qa="name-on-card"]';
    CardNumber = '[data-qa="card-number"]';
    CVC = "input[placeholder='ex. 311']";
    MM = "input[placeholder='MM']";
    YYYY = "input[placeholder='YYYY']";
    btnPay = "#submit";
    btnContinue1 = '[data-qa="continue-button"]';
  
    constructor(page){
        this.page = page;
    }
    // clicking product1 
    async clickProduct() {
      //cy.get(this.btnProduct).click();
      await this.page.locator(this.btnProduct).click();
    };
  
    // clicking add to cart
    async clickAddToCart() {
      //cy.get(this.btnAddtoCart).click();
      await this.page.locator(this.btnAddtoCart).click();
    };
  
    // clicking continue to pop up
    async clickContinue() {
      //cy.get(this.btnContinue).click();
      await this.page.locator(this.btnContinue).click();
    };
  
    // clicking cart btn
    async clickCart() {
      //cy.get(this.btnCart).click();
      await this.page.locator(this.btnCart).click();
    };
  
    // clicking proceed
    async clickProceed() {
      //cy.get(this.btnProceed).click();
      await this.page.locator(this.btnProceed).click();
    };
  
    // providing order data
    async setOrderData(data) {
      //cy.get(this.OrderData).type(data);
      await this.page.locator(this.OrderData).fill(data);
    };
  
    // clicking place order btn
    async clickPlaceOrder() {
      //cy.get(this.btnPlaceOrder).click();
      await this.page.locator(this.btnPlaceOrder).click();
    };
  
    // providing name on card
    async setNameOnCard(name) {
     // cy.get(this.NameOnCard).type(name);
     await this.page.locator(this.NameOnCard).fill(name);
    };
  
    // providing card number
    async setCardNum(cnum) {
      //cy.get(this.CardNumber).type(cnum);
      await this.page.locator(this.CardNumber).fill(cnum);
    };
  
    // providing cvc 
    async setCVC(cvc) {
      //cy.get(this.CVC).type(cvc);
      await this.page.locator(this.CVC).fill(cvc);
    };
  
    // providing mm
    async setMM(mm) {
      //cy.get(this.MM).type(mm);
      await this.page.locator(this.MM).fill(mm);
    };
  
   // providing expiary year
    async setYYY(yyy) {
      //cy.get(this.YYYY).type(yyy);
      await this.page.locator(this.YYYY).fill(yyy);
    };
  
    // clicking to pay btn
    async clickPay() {
     // cy.get(this.btnPay).click();
     await this.page.locator(this.btnPay).click();
    };
  
    // clicking continue btn after confirmation msg
    async clickContinue1() {
     // cy.get(this.btnContinue1).click();
     await this.page.locator(this.btnContinue1).click();
    };
  }
  
  