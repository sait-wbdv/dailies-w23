// Don't forget prompt() always returns a string, even for numbers
let firstNum = prompt("Enter a number: ");

let secondNum = prompt("Enter a another number: ");

const sum = Number(firstNum) + Number(secondNum);

console.log(`The sum of ${firstNum} and ${secondNum} is ${sum}.`);