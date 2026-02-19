// locators

import { test, expect, Locator } from '@playwright/test';

test("verify playwright locators", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/");

    //alt text is for images

    const logo:Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();


    //getbytext is for finding an element by text
    //use this locator to find non interactive elements like div,span,p etc.
    // for interactive elements button, a , input etc use role locator.

    //these strings are case sensitive
    await expect(page.getByText("Welcome to our store")).toBeVisible();

    //inorder to make case sensitive
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i )).toBeVisible();


    //role include buttons, checkboxes, headings, links, lists, tables
    // prefer for interactive elements like buttons, checkboxes, lists, tables, headings, etc.
    await page.getByRole("link", {name: 'Register'}).click();
    await expect(page.getByRole("heading",{name: 'Register'})).toBeVisible();   //getbytext can also be used


    //getbylabel is used for form handling
    await page.getByLabel('First name:').fill("John");
    await page.getByLabel('Last name:').fill("John");
    await page.getByLabel('Email:').fill("abc@gmail.com ");


    //similarly there's placeholder which is for identifying the placeholder in the input box

    //The getbyTitle works by locating and element which has title as it's attribute

    //similarly getbytestID also locates for the element whose attribute is testid
    
})