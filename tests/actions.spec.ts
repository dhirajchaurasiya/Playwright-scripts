import { test, expect, Locator } from '@playwright/test';

// test("Text Input Actions", async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     const takename: Locator = page.locator('#name');
//     await expect(takename).toBeVisible();

//     //use await for element(the one that returns promise ) but neednot for values.
//     const maxlength: any  = await takename.getAttribute("maxlength");
//     expect(maxlength).toBe('15');

//     await takename.fill("John Kennedy"); 

//     //capturing the input value
//      console.log("Input value of Name:",await takename.inputValue());
     
//     await page.waitForTimeout(5000);
// });

//Radio Button
// test("Radio Button Actions ", async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     const maleRadio:Locator = page.locator('#male');

//     await expect(maleRadio).toBeVisible();
//     await expect(maleRadio).toBeEnabled();

//     expect(await maleRadio.isChecked()).toBe(false);
//     await maleRadio.check(); 


//     await page.waitForTimeout(5000);
     
// });

//checkbox
test.only("Radio Button Actions ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sundayCheckbox:Locator = page.getByLabel('Sunday');
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();

    
    await page.waitForTimeout(5000);
     
});