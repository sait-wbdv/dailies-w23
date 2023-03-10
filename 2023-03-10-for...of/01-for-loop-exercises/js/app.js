// // Exercise 1)
// // Get the sum of two arrays…actually the sum of all their elements.
// // P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // Example output: 
// // 276 + 351 = 627

// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < arr_1.length; i++) {
//   // console.log(i, arr_1[i]);
//   // console.log(i, arr_2[i]);

//   sum1 = sum1 + arr_1[i];
//   sum2 = sum2 + arr_2[i];
// }

// // console.log(sum1, sum2);

// const sum3 = sum1 + sum2;
// // console.log(sum3);


// // Exercise 3)
// // Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// for (let i = 8; i >= 0; i--) {
//   // console.log(arr[i]);
// }

// // Exercise 4)
// // Given two arrays of integers. Add up each element in the same position and
// // create a new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output: 
// [12, 7, 16]

let arr_5 = [];

for (let i = 0; i < arr_3.length; i++) {
  console.log(i, arr_3[i]);
  console.log(i, arr_4[i]);

  arr_5.push(arr_3[i] + arr_4[i]);  
}

console.log(arr_5);