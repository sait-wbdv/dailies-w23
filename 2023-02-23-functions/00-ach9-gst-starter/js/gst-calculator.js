const gstRate = 0.05

const calculateGST = function(subTotal) {
  // Move repeated code here

}

// Refactor the following code so that gst totals are calculated by invoking calculateGST(). Example:
// calculateGST(subTotal1);

// Sub Total 1
const subTotal1 = 40;
const gst1 = subTotal1 * gstRate;
const total1 = subTotal1 + gst1;

console.log(`$${subTotal1} plus ${gstRate * 100}% GST is $${total1}.`);

// Sub Total 2
const subTotal2 = 55;
const gst2 = subTotal2 * gstRate;
const total2 = subTotal2 + gst2;

console.log(`$${subTotal2} plus ${gstRate * 100}% GST is $${total2}.`);

// Sub Total 3
const subTotal3 = 32.45;
const gst3 = subTotal3 * gstRate;
const total3 = subTotal3 + gst3;

console.log(`$${subTotal3} plus ${gstRate * 100}% GST is $${total3}.`);