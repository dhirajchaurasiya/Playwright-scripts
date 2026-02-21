import { test, expect, Locator } from '@playwright/test';


test("Sorted Dropdown options", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // ## check if dropdown options are sorted or not
    const dropdownOptions: Locator = await page.locator('#animals option');
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(option => option.trim());
    console.log(optionsText);

    const sortedOptions = [...optionsText].sort();  // ->triple dots is used to create a shallow copy of the original array before sorting, ensuring that the original optionsText array remains unchanged. This allows us to compare the sorted version with the original order without modifying it.
    console.log(sortedOptions);

    expect(optionsText).toEqual(sortedOptions);




    await page.waitForTimeout(5000);
     
});