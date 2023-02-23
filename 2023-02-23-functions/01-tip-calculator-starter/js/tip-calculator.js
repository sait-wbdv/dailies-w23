// Refactor - 
// 1. Declare a function with two parameters: billTotal and tipRate,
// 2. Inside the function, calculate billTotal and tipPercentage,
// 3. Log the same message to the console.

// Bill 1
const tipRate1 = 0.18;
const tipPercentage1 = `${tipRate1 * 100}%`
const billTotal1 = 40;
const tip1 = billTotal1 * tipRate1;

console.log(`${tipPercentage1} tip on $${billTotal1} is $${tip1}.`);

// Bill 2
const tipRate2 = 0.23;
const tipPercentage2 = `${tipRate2 * 100}%`
const billTotal2 = 36.74;
const tip2 = billTotal2 * tipRate2;

console.log(`${tipPercentage2} tip on $${billTotal2} is $${tip2}.`);

// Bill 3
const tipRate3 = 0.21;
const tipPercentage3 = `${tipRate3 * 100}%`
const billTotal3 = 74;
const tip3 = billTotal3 * tipRate3;

console.log(`${tipPercentage3} tip on $${billTotal3} is $${tip3}.`);