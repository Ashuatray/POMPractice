const { test, expect, defineConfig } = require('@playwright/test');
const { text } = require('stream/consumers');

test('FirstAutomationTest', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.wikipedia.org/")
});

test('second', async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Larry_Page");
});

test('get title',async({browser})=>{
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title());
 await page.locator("[name = 'username']").fill("rahulshettyacademy")
 await page.locator('#password').fill("learning")
 await page.locator('#signInBtn').click()
 //console.log(await page.locator("[style*='block']").textContent());
 //await expect(page.locator("[style*='block']")).toContainText('Incorrect');
 //await page.title();
  await page.waitForLoadState('networkidle');

  //this waitForLoadState are use to wait till the network stable if used the networkIdle.

 const cardtitles = page.locator("div.card-body a")
 console.log(await cardtitles.first().textContent());

 // allTextContent are used to store multiple string and word in array(like as webelements)
 console.log(await cardtitles.allTextContents() )

});

test('UI select', async ({page}) => {
  page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  const dropdown = page.locator("select.form-control");
  const documentLink = page.locator("[href*='documents-request']")
  await dropdown.selectOption("consult");
  await page.locator("input#usertype").nth(1).click();
  await page.locator("button#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  //is checked return value is boolean;
  await expect(page.locator(".radiotextsty").last()).toBeChecked()
  expect(await page.locator("input#terms").uncheck()).toBeFalsy();
 // await expect(documentLink).toHaveAttribute("class","blinkingText")
  //const[childpage]=Promise.all([page.waitForEvent('page'),documentLink.click(),])
  //console.log(childpage.title());
  console.log(await page.title());



  
  await page.pause();
})

test("childPage", async ({browser}) =>{
 const context = await browser.newContext()
 const page = await context.newPage()
 page.goto("https://rahulshettyacademy.com/loginpagePractise/")
 const link = page.locator("[href*='documents-request']")

 const [childpage] = await Promise.all([
  context.waitForEvent('page'),
  link.click()


 ])

 console.log(await childpage.locator(".red").textContent())


});


test.skip('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/documents-request');
  await page.getByRole('link', { name: 'Courses' }).click();
  await page.locator('#heap_product-card-cta_712957').click();
  await page.getByRole('link', { name: 'Courses' }).click();
  await page.getByRole('link', { name: 'Lifetime Access' }).click();
  await page.getByRole('link', { name: 'Career Focussed QA Meetup' }).click();
  await page.getByRole('link', { name: 'Practice', exact: true }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'More ' }).nth(1).click();
  await page.getByRole('link', { name: 'Part time jobs' }).click();
  await page.locator('#select-job-type').selectOption('Freelancing');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://docs.google.com/forms' }).click();
  const page1 = await page1Promise;
});