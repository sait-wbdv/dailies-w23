const firstNum = 6;

const secondNum = 98.3;

const operation = 'add';

console.log(operation);


if (operation === 'add') {
  // Add the two numbers
  const sum = firstNum + secondNum;
  console.log(`The sum of ${firstNum} and ${secondNum} is ${sum}.`);
}

if (operation === 'subtract') {
  const difference = firstNum - secondNum;
  console.log(`The difference between ${firstNum} and ${secondNum} is ${difference}.`);
}

if (operation === 'multiply') {
  const product = firstNum * secondNum;
  console.log(`The product of ${firstNum} and ${secondNum} is ${product}.`);
}

if (operation === 'divide') {
  const quotient = firstNum / secondNum;
  console.log(`The quotient of ${firstNum} and ${secondNum} is ${quotient}.`);
}

console.log('Please enter a valid operation');