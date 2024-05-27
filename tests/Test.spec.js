
import { test, expect } from "playwright/test";
import { SignUp } from "../page/SignUp";

test.beforeEach(async({page})=>{
     await page.goto("https://automationexercise.com/")
})

test('Add Products in Cart', async ({page})=>{
     await page.locator('.shop-menu > .nav > :nth-child(1) > a').isVisible();
     await page.locator('a[href="/login"]').click();
     const obj = new SignUp();
     await page.locator('.signup-form > h2').isVisible();
     //await obj.setName("momin");

     await page.locator('[data-qa="signup-name"]').fill("momin");
     await obj.setEmailAddress("sheikhamin.qa@gmail.com");
     await obj.clickSignUp();
     await page.locator('.signup-form > form > p').isVisible();
})