const { test, expect , getby} = require("@playwright/test")


test('Unique Locatoras', async({page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Employed").click()
    await page.locator("input[name='name']:nth-child(1)").fill("Ashutosh sharma")
    await page.locator("input[name='name']:nth-child(1)").fill("Ashu.atray143@gmail.com")
    await page.getByPlaceholder("Passeword").fill("Ashu@1234")
    await page.getByLabel("Check me out if you Love IceCreams!").click()
    await page.getByLabe("Gender").selectOption("Male")

    



})

test('calender practice', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const day = "29"
    const month = "7"
    const year = 2025;
    const expectedList = [month,day,year];
    

    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+day+"']").click()

    const inputs = page.locator(".react-date-picker__inputGroup input")

    for(let i=0;i<inputs.count();i++){
        const value = await inputs[i].getAttribute("value");
        expect(value).toEqual(expectedList[j]);
        
    }
    console.log("assertions complete")
    await page.pause();

})
test("hide locators", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com/")
    page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    console.log("executed succesfully");

})

test('handle dialogs/popups', async({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    
    page.on('dialog',dialog=> dialog.accept());

    await page.locator("#confirmbtn").click();

})
test.only('hover ', async({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#mousehover").hover();
    await page.locator("a[href='#top']").click();
    page.pause();
})

