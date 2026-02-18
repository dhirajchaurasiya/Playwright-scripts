import {test,expect} from "@playwright/test";

// fixture is a global variable. eg: page, browser.
test("Verify page title", async({page})=>{

    //launch the url
    await page.goto("https://chatgpt.com");
    let title:string = await page.title();
    console.log("Title:",title);

    await expect(page).toHaveTitle("ChatGPT");


})