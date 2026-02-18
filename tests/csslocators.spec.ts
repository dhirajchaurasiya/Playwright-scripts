import { test, expect, Locator } from '@playwright/test';

test("verify playwright locators", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    // await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("T-shirts"); 

    //for tag.class
    // await page.locator("input.search-box-text").fill("T-shirts");
    //-> same as above
    //await page.locator(".search-box-text").fill("T-shirts");   
    

    //for tag[attribute=value]
    // await page.locator("input[name=q]").fill("T-shitrts");
    // await page.locator("[name=q]").fill("T-shitrts");


    //tag with class and attribute
    //tag.class[attribute=value]
    await page.locator("input.search-box-text[value='Search store']").fill("T-shirts");

    await page.waitForTimeout(5000);
})