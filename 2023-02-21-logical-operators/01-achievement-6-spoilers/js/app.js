// Don't forget prompt() always returns a string, even for numbers
const number = parseFloat(prompt("Enter a number: "));

// Step 1: Move these three console logs into the correct conditional blocks below

if (number > 100) {
  
  console.log("The number is greater than 100");

} else if (number > 0 && number < 101) {

  console.log("The number is between 1 and 100");

} else if (number === 0) {

  console.log("The number is 0");
  
} else {
  
  console.log("The number is negative");

}

// Step 2: Test and refactor your code to ensure these conditional statements are operating correctly (don't forget to test zero!). Hint: Remember that numbers can also be strings.

