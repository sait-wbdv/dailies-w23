// Create treasure chest
const treasureChest = ['rusty knife', 'gem', 'kitten', 4, null, 'boots of flight', 'skeleton key'];

// Replace the null
treasureChest[4] = 'tea mug';

// Find the index of the first item (always the same)
const firstItemIndex = 0;

// Find the index of the last item
const lastItemIndex = treasureChest.length - 1;

// Ask the user for an item to add to the chest
const newItem = prompt('Add an item to the treasure chest.');

// Use the lastItemIndex to add the chosen item to the chest
treasureChest[lastItemIndex] = newItem;

// Log some results
console.log(treasureChest);
console.log(`There are ${treasureChest.length} items in this chest.`);
console.log(`The first item in the chest is ${treasureChest[firstItemIndex]}.`)
console.log(`The last item in the chest is ${treasureChest[lastItemIndex]}.`)
console.log(`You might interested in the ${treasureChest[2]}!`);

// Ask the user to an item and search the chest
const neededItem = prompt('Check if the chest has an item.');

if(treasureChest.includes(neededItem)) {
  console.log(`The chest has a ${neededItem}!`);
} else {
  console.log('Sorry, keep looking.')
}

// Remove an item from the chest and add it to your backpack
const backpack = [];

// Ask the user which item to add to the backpack
const requestedItem = prompt('What item would you like to take?');

console.log(`Take the ${requestedItem}!`);

// Find the index of the requested item
const requestedItemIndex = treasureChest.indexOf(requestedItem);

// Check if the item was found
if (requestedItemIndex === -1) {
  // Dash hopes and dreams
  console.log('Item was not found.');
} else {
  // Remove the item from the treasure chest
  const newBackPackItem = treasureChest.splice(requestedItemIndex, 1);

  // Add the item to the backpack
  backpack.push(newBackPackItem);
}

console.log(treasureChest);
console.log(backpack);

// Output to the page
// Create variables for each paragraph span
const treasureChestSpan = document.querySelector('.chest span');
const backpackSpan = document.querySelector('.backpack span');

console.log(treasureChestSpan);
console.log(backpackSpan);

// List the items in the span elements with .join()
treasureChestSpan.innerHTML = treasureChest.join(', ');
backpackSpan.innerHTML = backpack.join(', ');
