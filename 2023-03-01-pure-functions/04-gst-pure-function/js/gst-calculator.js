const gstRate = 0.05

const calculateGST = function(subTotal) {
  // Move repeated code here
  const gst = subTotal * gstRate;
  const total = subTotal + gst;

  console.log(`$${subTotal} plus ${gstRate * 100}% GST is $${total.toFixed(2)}.`);
}

// Refactor the following code so that gst totals are calculated by invoking calculateGST(). Example:
// calculateGST(subTotal1);

// Sub Total 1
const subTotal1 = 40;
calculateGST(subTotal1);

// Sub Total 2
const subTotal2 = 55;
calculateGST(subTotal2);

// Sub Total 3
const subTotal3 = 32.45;
calculateGST(subTotal3);