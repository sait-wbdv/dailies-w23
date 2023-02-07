// Add your code here
// Declare and assign a 'fullName' variable as a string;


// Declare and assign a 'picURL' variable as a string;


// Declare and assign a 'age' variable as a number;


// Declare and assign a 'hobbies' variable as a string;


// Declare and assign a 'hungry' variable as a boolean;



/************************************/
/* Do not edit code below this line */
/************************************/

const headingOutput = document.querySelector('h3');
headingOutput.innerHTML = fullName;

const picOutput = document.querySelector('img');
picOutput.src = picURL;

const nameOutput = document.querySelector('.name');
nameOutput.innerHTML = name;

const ageOutput = document.querySelector('.age');
ageOutput.innerHTML = age;

const hobbiesOutput = document.querySelector('.hobbies');
hobbiesOutput.innerHTML = hobbies;

const hungryOutput = document.querySelector('.hungry');
hungryOutput.innerHTML = hungry;