 const {POManager} = require('../POMpractice/POManager');
 const {test, expect} = require('@playwright/test');
 const data = JSON.parse(JSON.stringify(require('../utils/POdata.json')));


 test.skip('Client App login', async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     //const username = "Ashu.atray143@gmail.com";
     //const password = "Ashu@12345"
     //const productName = "ADIDAS ORIGINAL";
     //const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.username ,data.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(data.productName);
     await dashboardPage.navigateToCart();

     const cartPage = poManager.getCartPage();
     await cartPage.Checkout();
     await cartPage.VerifyProductIsDisplayed(data.productName);
    

     const ordersReviewPage = poManager.getOrdersReviewPage();
     await ordersReviewPage.searchCountryAndSelect("ind","India");
     const orderId = await ordersReviewPage.SubmitAndGetOrderId();
     console.log(orderId);
     await dashboardPage.navigateToOrders();
     const ordersHistoryPage = poManager.getOrdersHistoryPage();
     await ordersHistoryPage.searchOrderAndSelect(orderId);
     expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
 });
 

 



 

