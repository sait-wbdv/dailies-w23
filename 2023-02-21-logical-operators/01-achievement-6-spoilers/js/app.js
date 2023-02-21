// Don't forget prompt() always returns a string, even for numbers
let number = prompt("Enter a number: ");
number = Number(number);

// const number = 'twenty';

// Step 1: Rearrange the console logs so that the statements are correct

if (number > 100) {
  
  console.log("The number is greater than 100");
  
} else if (number > 0 && number < 101) {
  
  console.log("The number is between 1 and 100");
  
} else if (number === 0) {
  
  console.log("The number is 0");
  
} else if (number < 0) {
  
  console.log("The number is negative");

} else {

  console.log("This is not a number.");

}

// Step 2: Test and refactor your code to ensure these conditional statements are operating correctly
// Don't forget to test zero!
// Hint: Remember that numbers can also be strings.