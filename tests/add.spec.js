const {test,expect}=require('@playwright/test')

test('add test ', async ({page}) => {

    let a = 20;
    let b = 10;
    let c = a + b;

    expect(c).toBe(a+b);
    
    
})
test('add test ', async ({page}) => {

    let a = 20;
    let b = 10;
    let c = a + b;

    expect(c).toBe(a+b);
    
    
})
