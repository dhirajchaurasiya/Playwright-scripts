import { test, expect, Locator } from '@playwright/test';


test("Hidden Bootstrap Dropdown options", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   await page.locator('input[name="username"]').fill("Admin");
   await page.locator('input[name="password"]').fill("admin123");
   await page.locator('button[type="submit"]').click();

    // await page.waitForTimeout(3000);

    //click on the PIM
    await page.getByText('PIM').click();

    //click on Job Title Dropdown
    await page.locator('form i').nth(2).click();

    await page.waitForTimeout(3000);

    //capture all the options from the dropdown
    const jobTitleOptions: Locator = page.locator('div[role="listbox"] span');
    const count:number = await jobTitleOptions.count();
    console.log("Total Job Title options: "+count);

    //print all the options from the dropdown
    for(let i=0; i<count; i++){
        console.log(await jobTitleOptions.nth(i).innerText());
    }

    //select an option from the dropdown
    for(let i=0; i<count; i++){
        console.log(await jobTitleOptions.nth(i).innerText());
        if(await jobTitleOptions.nth(i).innerText() === "Software Engineer"){
            await jobTitleOptions.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(5000);
     
});