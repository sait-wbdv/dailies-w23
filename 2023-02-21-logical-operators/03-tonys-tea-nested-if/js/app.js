/* Requirements for Tony to make his tea latte */
// Before he can make latte, he needs:
// 1. Milk in the fridge
// 2. Tea in the cupboard
// If one or both of those are missing, he has to go to the store.

const hasMilk = true;
const hasTea = false;
const hasSugar = true;

console.log('Tony goes to the kitchen.');

// Problem 1: This is not DRY code
// Reminder: Don't Repeat Yourself

// Problem 2: There's a lot of nesting
// Reminder: There's a special group of coders that call themselves "Never Nesters"
// https://www.reddit.com/r/computing/comments/zglhx1/is_it_better_to_be_a_nester_or_a_nevernester/

if (hasMilk) {
  if (hasTea) {
    if (hasSugar) {
      console.log('Tony makes his tea just before class starts.');
    } else {
      console.log('Tony cancels class and goes to the store.');
    }
  } else {
    console.log('Tony cancels class and goes to the store.');
  }
} else {
  console.log('Tony cancels class and goes to the store.');
}