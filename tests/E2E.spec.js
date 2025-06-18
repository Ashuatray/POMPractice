const { test , expect } = require('@playwright/test');
const { table } = require('console');
const { emit } = require('process');

test('E2E tesing', async ({page}) => {
   await  page.goto("https://rahulshettyacademy.com/client/auth/login");
    await page.locator("input#userEmail").fill("Ashu.atray143@gmail.com");
    await page.locator("input#userPassword").fill("Ashu@12345");
    await page.locator("#login").click();
    const products =  await page.locator(".card-body");
    console.log(products.count());
    
})
//const { test, expect } = require('@playwright/test');

test.only('E2E testing', async ({ page }) => {
    const email = "Ashu.atray143@gmail.com";
    const productName = "ADIDAS ORIGINAL";
    const pswd =  "Ashu@12345";
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("input#userEmail").fill(email);
    await page.locator("input#userPassword").fill(pswd);
    await page.locator("#login").click();

  // Wait for navigation or some element that appears after login
    await page.waitForLoadState('networkidle');

    const products = await page.locator(".card-body");
    const count = await products.count();

    console.log(`Number of products: ${count}`);

    const titles = await products.locator("b").allTextContents();
    console.log(titles)
    const size = await products.count();
    await page.waitForLoadState('networkidle');

    for(let i=0;i<size;i++){
        if( await products.nth(i).locator("b").textContent() === productName){
            console.log(await products.nth(i).locator("b").textContent())
            await products.nth(i).locator("text= Add To Cart").click();
            break;

        }
    }

    await page.locator("[routerlink*='/dashboard/cart']").click();
    

    const cartItem = await page.locator(".cartSection ").locator("h3").allTextContents();
    console.log(cartItem);


    //page.pause();

    for(let i=0;i<cartItem.length;i++){
        if(cartItem[i]=== productName){
        expect(cartItem[i]).toContain(productName);
        }
    }

    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator(".btn-primary").locator("text=Checkout").click();
    await page.locator("[placeholder = 'Select Country']").pressSequentially("ind");
    const  options = page.locator(".ta-results")
    await options.waitFor();
    const OptionsCount = await options.locator("button").count();
    console.log(OptionsCount);

    for(let i =0;i<OptionsCount;i++){
        const text = await options.locator("button").nth(i).textContent();
        if(text === " India"){

            options.locator("button").nth(i).click();
            break;

        }
    }
    await Promise.all[
        await page.locator(".action__submit").click(),
        await page.waitForSelector('h1:has-text(" Thankyou for the order.")')
       

        ]

       console.log( await page.locator('h1:has-text(" Thankyou for the order.")').textContent());

       await page.locator("//button[@routerlink='/dashboard/myorders']").click();

       const  tables =  page.locator("tbody tr");
       const tablelength = await tables.count()
       console.log()

       for (let i=0;i<tablelength;i++){
        console.log(await tables.nth(i).locator("th").textContent())
       }



    page.pause();

    


});

