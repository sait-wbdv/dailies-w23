const billTotal = 40;

const calculateTax = function(subTotal, taxRate = 0.05) {
  return (subTotal * taxRate + subTotal).toFixed(2);
}

const total = calculateTax(billTotal);

console.log(`$${billTotal} plus GST is $${total}.`);