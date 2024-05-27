export class Cart {
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

  constructor(page) {
    this.page = page;
  }
  // clicking product1
  async clickProduct() {
    await this.page.locator(this.btnProduct).click();
  }

  // clicking add to cart
  async clickAddToCart() {
    await this.page.locator(this.btnAddtoCart).click();
  }

  // clicking continue to pop up
  async clickContinue() {
    await this.page.locator(this.btnContinue).click();
  }

  // clicking cart btn
  async clickCart() {
    await this.page.locator(this.btnCart).click();
  }

  // clicking proceed
  async clickProceed() {
    await this.page.locator(this.btnProceed).click();
  }

  // providing order data
  async setOrderData(data) {
    await this.page.locator(this.OrderData).fill(data);
  }

  // clicking place order btn
  async clickPlaceOrder() {
    await this.page.locator(this.btnPlaceOrder).click();
  }

  // providing name on card
  async setNameOnCard(name) {
    await this.page.locator(this.NameOnCard).fill(name);
  }

  // providing card number
  async setCardNum(cnum) {
    await this.page.locator(this.CardNumber).fill(cnum);
  }

  // providing cvc
  async setCVC(cvc) {
    await this.page.locator(this.CVC).fill(cvc);
  }

  // providing mm
  async setMM(mm) {
    await this.page.locator(this.MM).fill(mm);
  }

  // providing expiary year
  async setYYY(yyy) {
    await this.page.locator(this.YYYY).fill(yyy);
  }

  // clicking to pay btn
  async clickPay() {
    await this.page.locator(this.btnPay).click();
  }

  // clicking continue btn after confirmation msg
  async clickContinue1() {
    await this.page.locator(this.btnContinue1).click();
  }
}
