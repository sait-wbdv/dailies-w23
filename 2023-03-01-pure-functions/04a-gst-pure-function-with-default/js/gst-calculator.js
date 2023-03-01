const hstRate = 0.13;

const calculateTax = function(subTotal, taxRate = 0.05) {

  // taxRate now has a default, which cleans up our code
  const tax = subTotal * taxRate;
  const total = subTotal + tax;

  // console.log(`$${subTotal} plus ${gstRate * 100}% GST is $${total.toFixed(2)}.`);
  return `$${subTotal} plus ${taxRate * 100}% tax is $${total.toFixed(2)}.`;
}

// Sub Total 1
const subTotal1 = 40;
const paymentSummaryAB = calculateTax(subTotal1);

console.log(paymentSummaryAB);

// Sub Total 2
const subTotal2 = 55;
const paymentSummaryBC = calculateTax(subTotal2, hstRate);

console.log(paymentSummaryBC);

