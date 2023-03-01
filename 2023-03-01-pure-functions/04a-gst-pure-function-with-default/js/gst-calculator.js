const gstRate = 0.05

const calculateGST = function(subTotal, taxRate) {

  // Use of `gstRate` makes this an impure function because
  // it's not passed as an
  const tax = subTotal * taxRate;
  const total = subTotal + tax;

  // console.log(`$${subTotal} plus ${gstRate * 100}% GST is $${total.toFixed(2)}.`);
  return `$${subTotal} plus ${taxRate * 100}% GST is $${total.toFixed(2)}.`;
}

// Sub Total 1
const subTotal1 = 40;
const paymentSummary1 = calculateGST(subTotal1, gstRate);

console.log(paymentSummary1);

// Sub Total 2
const subTotal2 = 55;
const paymentSummary2 = calculateGST(subTotal2, gstRate);

console.log(paymentSummary2);

// Sub Total 3
const subTotal3 = 32.45;
const paymentSummary3 = calculateGST(subTotal3, gstRate);

console.log(paymentSummary3);
