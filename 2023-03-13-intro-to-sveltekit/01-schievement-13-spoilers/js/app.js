// Exercise 1
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

const arrReversed = arr.reverse();

console.log(arrReversed);

// Exercise 2
const n = 22;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Twice as fast as above
for (let i = 2; i <= n; i+=2) {
  console.log(i);
}

// Exercise 3

let integers = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let sum = 0;

for (let number of integers) {
  // sum = sum + number;
  sum += number;
}

console.log(`The sum of all integers is: ${sum}!`);