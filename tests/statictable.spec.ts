import { test, expect, Locator } from '@playwright/test';


test("Static Web Table ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table: Locator =  page.locator('table[name="BookTable"] tbody');
    await expect(table).toBeVisible();

    // // ## print all the rows in table
    const rows: Locator =  table.locator('tr');
    // await expect(rows).toHaveCount(7);  //one approach


    const rowCount: number = await rows.count();            
    console.log("Number of rows in table:", rowCount);
    expect(rowCount).toEqual(7);                //another approach

    //count number of columns in table
    const columns: Locator = rows.locator('th');
    const columnCount: number = await columns.count();
    console.log("Number of columns in table:", columnCount);


    //read all data from 2nd row
    const secondRow: Locator = rows.nth(2).locator('td');
    const secondRowData: string[] = await secondRow.allInnerTexts();
    console.log("Data in 2nd row:", secondRowData);

    //read all data from 3rd column
    // const thirdColumn: Locator = rows.locator('td:nth-child(3)');
    // const thirdColumnData: string[] = await thirdColumn.allInnerTexts();
    // console.log("Data in 3rd column:", thirdColumnData);

    //read all data from the table (excluding header)
    const allData = await rows.all();
    for(let row of allData.slice(1)){  //slice(1) to exclude header row
        const rowData: string[] = await row.locator('td').allInnerTexts();
        console.log("Row data:", rowData);
    }

    const mukeshbooks: string[] = [];
    //read data from cell which has author name as "Mukesh"
    for(let row of allData.slice(1)){
        const cells = await row.locator('td').allInnerTexts();
        const authorName = cells[1];  // Assuming author name is in the second column (index 1)
        const bookName = cells[0];    // Assuming book name is in the first column (index 0)
        if(authorName.trim() === "Mukesh"){
            console.log(`${authorName} is the author of ${bookName}`);
            mukeshbooks.push(bookName);
        }
    }

    await page.waitForTimeout(3000);

    console.log("Books by Mukesh:", mukeshbooks);


    //calculate total price of all books in table
    let totalPrice: number = 0;
    for(let row of allData.slice(1)){
        const cells = await row.locator('td').allInnerTexts();
        const priceText = cells[3];  // Assuming price is in the fourth column (index 3)
        const price = parseFloat(priceText.replace('$', '').trim()); // Remove $ and convert to number
        totalPrice += price;
    }
    console.log("Total price of all books:", totalPrice);

});