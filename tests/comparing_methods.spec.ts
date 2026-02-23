import { test, expect, Locator } from '@playwright/test';


test("Comparing methods ", async({page})=>{

    await page.goto("http://demowebshop.tricentis.com/"); //website not working 

    const products: Locator = await page.locator('.product-title');

    //innertext vs textContent
    // console.log(await products.first().innerText());  // -> returns visible text of the element
    // console.log(await products.nth(1).innerText()); // -> returns all the text content of the element including hidden text
    // console.log(await products.first().textContent()); // -> returns all the text content of the element including hidden text

    //textcontent displays spaces and line breaks hence we can use trim() to remove them.

    // const count = await products.count();
    // for(let i=0; i<count; i++){
    //     const productname : string = await products.nth(i).innerText();
    //     console.log(productname);
    // }   
    
    // await page.waitForTimeout(5000);


    // 2) allinnertext vs alltextcontent

    console.log("Comparing allinnertext vs alltextcontent");
    
    const allInnerText: string[] = await products.allInnerTexts();
    const allTextContent: string[] = await products.allTextContents();

    const productnametrimmed: string[] = allTextContent.map(text => text.trim());
    console.log(productnametrimmed);
     
});