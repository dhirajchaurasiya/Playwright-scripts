import { test, expect, Locator } from '@playwright/test';

test.only("Single Select Dropdown options ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator('#country').selectOption('India');  // -> This is one way to select the option from dropdown
    // await page.locator('#country').selectOption({value:'uk'});  // -> by using value attribute
    // await page.locator('#country').selectOption({label:'India'});  // -> by using label attribute
    // await page.locator('#country').selectOption({index:1});  // -> by using index attribute 

    // ##check number of options in dropdown
    const dropdownOptions: Locator = await page.locator('#country option');
    await expect(dropdownOptions).toHaveCount(10);

    //## check presence of option in dropdown
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(option => option.trim());
    console.log(optionsText);
    expect(optionsText).toContain('India');


    // ## print all the options in dropdown
    for (const option of optionsText) {
        console.log(option);
    }
    

    await page.waitForTimeout(5000);
     
});