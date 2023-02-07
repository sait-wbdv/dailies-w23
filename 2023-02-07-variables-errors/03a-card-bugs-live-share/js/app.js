// Add your code here
// Declare and assign a 'fullName' variable as a string;
const fullName = 'Henry Barnicles';

// Declare and assign a 'picURL' variable as a string;
const picURL = 'https://images.squarespace-cdn.com/content/v1/5f08e83019d176469c40c39f/1621910013732-0R5PB4EGBC84QHWU98M3/188514137_314852066894088_9036480733253524885_n.png?format=1000w';
// Declare and assign a 'age' variable as a number;
const age = 50;

// Declare and assign a 'hobbies' variable as a string;
const hobbies = 'eating and sleeping';

// Declare and assign a 'hungry' variable as a boolean;
const hungry = true;


/************************************/
/* Do not edit code below this line */
/************************************/

const headingOutput = document.querySelector('h3');
headingOutput.innerHTML = fullName;

const picOutput = document.querySelector('img');
picOutput.src = picURL;

const nameOutput = document.querySelector('.name');
nameOutput.innerHTML = fullName;

const ageOutput = document.querySelector('.age');
ageOutput.innerHTML = age;

const hobbiesOutput = document.querySelector('.hobbies');
hobbiesOutput.innerHTML = hobbies;

const hungryOutput = document.querySelector('.hungry');
hungryOutput.innerHTML = hungry;