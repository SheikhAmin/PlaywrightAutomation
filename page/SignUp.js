exports.SignUp = class SignUp{
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
  constructor(page){
    this.page = page;
    /*
    this.Name = "input[placeholder='Name']";
    this.EmailAddress = '[data-qa="signup-email"]';
    this.btnSignUp = '[data-qa="signup-button"]';
    this.btnGender = "input#id_gender1";
    this.Password = '[data-qa="password"]';
    this.Day = '[data-qa="days"]';
    this.Month = '[data-qa="months"]';
    this.Year = '[data-qa="years"]';
    this.Newsletter = "#newsletter";
    this.Offer = "#optin";
    this.FirstName = '[data-qa="first_name"]';
    this.LastName = '[data-qa="last_name"]';
    this.Company = '[data-qa="company"]';
    this.Address = '[data-qa="address"]';
    this.Address2 = '[data-qa="address2"]';
    this.Country = '[data-qa="country"]';
    this.State = '[data-qa="state"]';
    this.City = '[data-qa="city"]';
    this.ZipCode = "#zipcode";
    this.MobileNum = "#mobile_number";
    this.btnCreateAccount = "button[data-qa='create-account']";
    this.btnContinue = '[data-qa="continue-button"]';
    */
  }
  //assigning name
  async setName(name){
    await this.page.locator(this.Name).fill(name);
  };
  // assigning email address
  async setEmailAddress(email) {
    await this.page.locator(this.EmailAddress).fill(email);
  };

  // clicking sign up btn
  async clickSignUp() {
    await this.page.locator(this.btnSignUp).click();
  };

  // selecting gender
  async setGender() {
    await this.page.locator(this.btnCreateAccount).click();
  };

  // assigning password
  async setPassword(pass) {
    await this.page.locator(this.Password).fill(pass);
  };

  
  // selecting day
  /*
 async setDay(day) {
    //cy.get(this.Day).select(day);
    const day =await this.Day;
    await day?.selectOption(day);
    //await this.page.locator(this.Day).select(day);
  };

  // selecting month
  async setMonth(month) {
    cy.get(this.Month).select(month);
    await this.page.locator(this.Month).fill(name);
  };

  // selecting year
  setYear(year) {
    cy.get(this.Year).select(year);
  };

  // checkbox for newsletter
  clickNewsLetter() {
    cy.get(this.Newsletter).click();
  };

  // checkbox for offer
  clickOffer() {
    cy.get(this.Offer).click();
  };

  // assigning first name
  setFirstName(fname) {
    cy.get(this.FirstName).type(fname);
  };

  // assigning last name
  setLastName(lname) {
    cy.get(this.LastName).type(lname);
  };

  // assigning company name
  setCompany(company) {
    cy.get(this.Company).type(company);
  };

  // providing address 
  setAddress(address) {
    cy.get(this.Address).type(address);
  };

  // providing address 2
  setAddress2(address2) {
    cy.get(this.Address2).type(address2);
  };

  // providing city name
  setCity(city) {
    cy.get(this.City).type(city);
  };

  // providing state name
  setState(state) {
    cy.get(this.State).type(state);
  };

  // providing country name
  setCountry(country) {
    cy.get(this.Country).select(country);
  };

  // providing zip code
  setZipCode(zipcode) {
    cy.get(this.ZipCode).type(zipcode);
  };

  // providing mobile number
  setMobileNum(mobilenum) {
    cy.get(this.MobileNum).type(mobilenum);
  };

  // clicking create account btn
  clickCreateAccount() {
    cy.get(this.btnCreateAccount).click();
  };

  // clicking continue btn
  clickContinue() {
    cy.get(this.btnContinue).click();
  };
  */
}