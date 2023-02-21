// Example 1: AND (&&) Operator
// Using a logical AND operator (&&), refactor the following code so that ONE if statement is used to correctly nap when you are sleepy AND it's the afternoon.

const timeOfDay = 'afternoon';
const sleepy = true;

if (timeOfDay === 'afternoon') {
  if (sleepy) {
    console.log('Time to have my afternoon nap!');
  }
}

// Example 2: OR (||) Operator
// Using a logical OR operator (||), refactor the following code into ONE if statement that contains ONE console log.

const mood = 'happy';

if (mood === 'stressed') {
  console.log('Pass the potato chips!');
}

if (mood === 'hungry') {
  console.log('Pass the potato chips!');
}

// Example: Logical NOT (!) Operator
// Using a logical NOT operator (!), refactor the condition of the following if statement so that the statement is logged to the console correctly.

const cloudy = true;

if (cloudy) {
  console.log('Put on sun glasses.');
}