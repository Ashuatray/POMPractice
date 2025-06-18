const {test}=require('@playwright/test')

test.only('add test ', async ({page}) => {

    let a = 20;
    let b = 10;
    let c = a + b;

    expect(c).toBe(a+b);
    
    
})