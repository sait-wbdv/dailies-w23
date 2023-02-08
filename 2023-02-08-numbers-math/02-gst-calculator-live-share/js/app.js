 // 1. Define a sub total of a bill
let billSubTotal = prompt("How much is the bill?"); // The sub-total of a bill at the supermarket
// Convert to number
billSubTotal = parseFloat(billSubTotal);

// 2. Define a GST tax rate
const gstTaxRate = 0.05;

// 3. Calculate the GST on the sub total
const gstAmount = billSubTotal * gstTaxRate; // Additional tax amount on the bill sub-total: sub-total times the tax rate

// 4. Define and calculate the bill total
const billTotal = billSubTotal + gstAmount; // The total bill amount: sub-total plus the GST

// 4a. Define the result as a complete sentence
const result = `The GST on $${billSubTotal} is $${gstAmount} for a total of $${billTotal}.`;

// 5. console.log() a complete sentence
// console.log(billSubTotal, gstTaxRate, gstAmount, billTotal);
console.log(result);

// 6. Output the sentence to the page
// 6a. Create a variable for <p> element
const paragraph = document.querySelector('.bill-total');
console.log(paragraph);

// 6b. Set the content of the <p> to the sentence
paragraph.innerHTML = result;