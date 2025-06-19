const {test,expect}=require('@playwright/test')

test('add test ', async ({page}) => {

    let a = 20;
    let b = 10;
    let c = a + b;

    expect(c).toBe(a+b);
    console.log(`the sum of two digit is : ${c}`)
    
    
})
test('subtract ', async ({page}) => {

    let a = 20;
    let b = 10;
    let c = a - b;

    expect(c).toBe(a-b);
    console.log(`the subtracrion of value is : ${c}`);
    
    
})
