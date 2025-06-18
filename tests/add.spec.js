const { test , expect } = require('@playwright/test');
test.only("sum test", async({page}) =>{
    let a = 10;
    let b = 20
    const c = a +b;

    const check = expect(c).toBe(a+b);
    expect(check).toBeTruthy;


});