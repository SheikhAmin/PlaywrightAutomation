import { beforeEach } from "node:test";
import { test, expect } from "playwright/test";
import { SignUp } from "../page/SignUp";
import { LogIn } from "../page/Login";
import { Cart } from "../page/Cart";

test.beforeEach(async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await page.locator('a[href="/login"]').click();
});
/*
test.skip('Sign Up', async({page})=>{
    const obj = new SignUp(page);
    await obj.setName('Trial');
    await obj.setEmailAddress("sheikhamin.c698s2@gmail.com");
    await obj.clickSignUp();
    await obj.setGender();
    await obj.setPassword("amin");
 
});
*/
test("Log In", async ({ page }) => {
  const obj = new LogIn(page);
  await obj.enterEmail("sheikhamin.c6s2@gmail.com");
  await obj.enterPassword("amin");
  await obj.clickLogIn();
  let textvalue = await page.locator(":nth-child(10) > a");
  //checking Loged In as Sheikh Amin or not
  await expect(textvalue).toHaveText("Logged in as Sheikh Amin");

  const cart = new Cart(page);
  await cart.clickProduct();
  await cart.clickAddToCart();
  await cart.clickContinue();
  await cart.clickCart();
  await cart.clickProceed();
  await cart.setOrderData("Order will be received by my a person named Momin.");
  await cart.clickPlaceOrder();
  await cart.setNameOnCard("Tazrin Tuly");
  await cart.setCardNum("611546");
  await cart.setCVC("611");
  await cart.setMM("July");
  await cart.setYYY("2025");
  await cart.clickPay();
  //checking order placement confirmation
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain(
      "Your order has been placed sucessfully!"
    );
    await dialog.accept();
  });
  //checking order confirmation
  let textvalue1 = await page.locator(".col-sm-9 > p");
  await expect(textvalue1).toHaveText(
    "Congratulations! Your order has been confirmed!"
  );
  await cart.clickContinue1();
});
