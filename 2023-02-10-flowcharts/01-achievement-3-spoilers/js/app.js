// Assign initial values
const billTotal = 75;
const tipRate = .23;

// Create human readable tip percentage
// const tipPercentage = tipRate * 100 + '%'; // ES5
const tipPercentage = `${tipRate * 100}%`; // ES6

// Calculate tip
// const tipAmount = billTotal * tipRate;
const tipAmount = Math.round(billTotal * tipRate * 100) / 100;

// Calculate payment total
// Rounding happens in the console.log
const paymentTotal = billTotal + tipAmount;

// Output
console.log(billTotal, tipRate, tipPercentage, tipAmount, paymentTotal);
console.log(`${tipPercentage} tip on $${billTotal} is $${tipAmount} for a total of $${paymentTotal}!`);