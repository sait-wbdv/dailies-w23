const gstRate = 0.05

const calculateGST = function(subTotal) {

  // Use of `gstRate` makes this an impure function because
  // it's not passed as an argument
  const gst = subTotal * gstRate;
  const total = subTotal + gst;

  console.log(`$${subTotal} plus ${gstRate * 100}% GST is $${total.toFixed(2)}.`);
}

// Sub Total 1
const subTotal1 = 40;
calculateGST(subTotal1);

// Sub Total 2
const subTotal2 = 55;
calculateGST(subTotal2);

// Sub Total 3
const subTotal3 = 32.45;
calculateGST(subTotal3);