const gstRate = 0.05

const calculateTax = function(subTotal, taxRate) {

  // taxRate is passed as an argument, making this a pure function
  const tax = subTotal * taxRate;
  const total = subTotal + tax;

  // console.log(`$${subTotal} plus ${gstRate * 100}% GST is $${total.toFixed(2)}.`);
  return `$${subTotal} plus ${taxRate * 100}% GST is $${total.toFixed(2)}.`;
}

// Sub Total 1
const subTotal1 = 40;
const paymentSummary1 = calculateTax(subTotal1, gstRate);

console.log(paymentSummary1);

// Sub Total 2
const subTotal2 = 55;
const paymentSummary2 = calculateTax(subTotal2, gstRate);

console.log(paymentSummary2);

// Sub Total 3
const subTotal3 = 32.45;
const paymentSummary3 = calculateTax(subTotal3, gstRate);

console.log(paymentSummary3);
