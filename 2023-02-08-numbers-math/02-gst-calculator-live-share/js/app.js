// Goal: 

// 1. Define a sub total of a bill
let billSubTotal; // The sub-total of a bill at the supermarket
billSubTotal = prompt("How much is the bill?");

// 2. Define a GST tax rate
const gstTaxRate = 0.05;

// 3. Calculate the GST on the sub total
const gstAmount = billSubTotal * gstTaxRate; // Additional tax amount on the bill sub-total: sub-total times the tax rate

// 4. Define and calculate the bill total
const billTotal =  parseFloat(billSubTotal) + gstAmount; // The total bill amount: sub-total plus the GST


console.log(billSubTotal, gstTaxRate, gstAmount, billTotal);