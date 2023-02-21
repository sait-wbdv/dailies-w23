// During a dungeon quest, you find a room with a locked chest.
// You can open the chest and get the treasure inside, IF:
// 1. You have the key, OR
// 2. You have lockpicks, OR
// 3. You have a battleaxe.

// Step 1: define our variables.
const hasKey = false;
const hasLockPick = false;
const hasBattleAxe = true;  
 
// Step 2: Use multiple IF statements.
if (hasKey) {
  console.log("chest is open");
} else if (hasLockPick) {
  console.log("chest is open");
} else if (hasBattleAxe) {
  console.log("chest is open");
} else {
  console.log('chest will not open');
}

// Step 3: Refactor our code to DRY it out.

if (hasKey || hasLockPick || hasBattleAxe) {
  console.log("chest is open!")
} else {
  console.log("chest will not open!")
}
