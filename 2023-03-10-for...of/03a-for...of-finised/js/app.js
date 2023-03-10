// Create treasure chest
const treasureChest = ['Rusty knife', 'Gem', 'Kitten', 'Boots of Flight', 'Skeleton Key'];

// Step 1: Create an empty output variable which will contain a string of the completed <li> elements;
let output = '';


// Step 2: Loop through the array using for...of;


// Step 3: At each iteration, add (i.e. concatenate) each array item (surrounded by <li> and </li> tags) to output;


// Step 4: After the loop completes, print the completed output variable to a <ul> on the page using .innerHTML.

// Create variables for each paragraph span
const treasureChestSpan = document.querySelector('.chest');

console.log(treasureChestSpan);

// List the items in the span elements with .join()
treasureChestSpan.innerHTML = output;
