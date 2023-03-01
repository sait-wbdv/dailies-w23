// Step 1: Declare function
const greet = function(name, lang) {
  let greeting;

  if (lang === 'es') {
    // console.log(`Hola, ${name}!`);
    greeting = `Hola, ${name}!`;
  } else if (lang === 'fr') {
    // console.log(`Bonjour, ${name}!`);
    greeting = `Bonjour, ${name}!`;
  } else if (lang === 'ch') {
    // console.log(`Nihao, ${name}!`);
    greeting = `Nihao, ${name}!`;
  } else {
    // console.log(`Hi, ${name}!`);
    greeting = `Hi, ${name}!`;
  }

  return greeting;
}

// Step 2: Invoke function
const greeting1 = greet('Tony', 'ch');
console.log(greeting1);

const greeting2 = greet('Cordelle', 'fr');
console.log(greeting2);

const greeting3 = greet('Deadpool', 'es');
console.log(greeting3);

const greeting4 = greet('The Last of Us', 'en');
console.log(greeting4);

