const billTotal = 40;
const tipRate = 0.20;

const calculateTip = function(subTotal, rate = 0.18) {
  return subTotal * rate;
}

const tip = calculateTip(billTotal, tipRate);

console.log(`${tipRate * 100}% tip on $${billTotal} is $${tip.toFixed(2)}.`);