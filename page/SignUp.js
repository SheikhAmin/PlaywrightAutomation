exports.SignUp = class SignUp {
  Name = "input[placeholder='Name']";
  EmailAddress = '[data-qa="signup-email"]';
  btnSignUp = '[data-qa="signup-button"]';
  btnGender = "input#id_gender1";
  Password = '[data-qa="password"]';
  Day = '[data-qa="days"]';
  Month = '[data-qa="months"]';
  Year = '[data-qa="years"]';
  Newsletter = "#newsletter";
  Offer = "#optin";
  FirstName = '[data-qa="first_name"]';
  LastName = '[data-qa="last_name"]';
  Company = '[data-qa="company"]';
  Address = '[data-qa="address"]';
  Address2 = '[data-qa="address2"]';
  Country = '[data-qa="country"]';
  State = '[data-qa="state"]';
  City = '[data-qa="city"]';
  ZipCode = "#zipcode";
  MobileNum = "#mobile_number";
  btnCreateAccount = "button[data-qa='create-account']";
  btnContinue = '[data-qa="continue-button"]';
  constructor(page) {
    this.page = page;
  }
  //assigning name
  async setName(name) {
    await this.page.locator(this.Name).fill(name);
  }
  // assigning email address
  async setEmailAddress(email) {
    await this.page.locator(this.EmailAddress).fill(email);
  }

  // clicking sign up btn
  async clickSignUp() {
    await this.page.locator(this.btnSignUp).click();
  }

  // selecting gender
  async setGender() {
    await this.page.locator(this.btnCreateAccount).click();
  }

  // assigning password
  async setPassword(pass) {
    await this.page.locator(this.Password).fill(pass);
  }

  // selecting day

  async setDay(day) {
    await this.page.locator(this.Day).selectOption(day);
  }

  // selecting month
  async setMonth(month) {
    await this.page.locator(this.Month).selectOption(month);
  }

  //selecting year
  async setYear(year) {
    await this.page(this.Year).selectOption(year);
  }

  // checkbox for newsletter
  async clickNewsLetter() {
    await this.page.locator(this.Newsletter).click();
  }

  // checkbox for offer
  async clickOffer() {
    await this.page.locator(this.Offer).click();
  }

  // assigning first name
  async setFirstName(fname) {
    await this.page.locator(this.FirstName).fill(fname);
  }

  // assigning last name
  async setLastName(lname) {
    await this.page.locator(this.LastName).fill(lname);
  }

  // assigning company name
  async setCompany(company) {
    await this.page.locator(this.Company).fill(company);
  }

  // providing address
  async setAddress(address) {
    await this.page.locator(this.Address).fill(address);
  }

  // providing address 2
  async setAddress2(address2) {
    await this.page.locator(this.Address2).fill(address2);
  }

  // providing city name
  async setCity(city) {
    await this.page.locator(this.City).fill(city);
  }

  // providing state name
  async setState(state) {
    await this.page.locator(this.State).fill(state);
  }

  // providing country name
  async setCountry(country) {
    await this.page.locator(this.Country).selectOption(country);
  }

  // providing zip code
  async setZipCode(zipcode) {
    await this.page.locator(this.ZipCode).fill(zipcode);
  }

  // providing mobile number
  async setMobileNum(mobilenum) {
    await this.page.locator(this.MobileNum).fill(mobilenum);
  }

  // clicking create account btn
  async clickCreateAccount() {
    await this.page.locator(this.btnCreateAccount).click();
  }

  // clicking continue btn
  async clickContinue() {
    await this.page.locator(this.btnContinue).click();
  }
};
