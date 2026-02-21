import { test, expect, Locator } from '@playwright/test';


test("Auto Suggest Dropdown options", async({page})=>{

    await page.goto("https://www.flipkart.com/");

   await page.locator("input[name='q']:not([readonly])").fill("smart");
   await page.waitForTimeout(5000);

   const autoSuggestOptions: Locator = page.locator("ul>li");
   
   const count = await autoSuggestOptions.count();
    console.log("Total auto suggest options: "+count);


    await page.waitForTimeout(5000);
     
});