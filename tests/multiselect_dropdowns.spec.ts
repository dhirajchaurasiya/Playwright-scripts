import { test, expect, Locator } from '@playwright/test';


test("Multiselect Dropdown options ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // ## select option from multiselect dropdown
    await page.locator('#colors').selectOption(['Red', 'Green', 'Blue']);  // -> by using visible text
    await page.locator('#colors').selectOption(['red', 'green', 'white']);  // -> by using value attribute
    await page.locator('#colors').selectOption({label:'Red'});  // -> by using label attribute
    await page.locator('#colors').selectOption([{index:0},{index:2}]);  // -> by using index attribute

    // ## check number of options in dropdown
    const dropdownOptions: Locator = await page.locator('#colors option');
    await expect(dropdownOptions).toHaveCount(7);

    //## check presence of option in dropdown
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(option => option.trim());
    console.log(optionsText);
    expect(optionsText).toContain('Red');
    // expect(optionsText).toContain('Green');
    // expect(optionsText).toContain('Blue');

    // ## print all the options in dropdown
    for (const option of optionsText) {
        console.log(option);
    }



    await page.waitForTimeout(5000);
     
});