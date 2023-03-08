const city = "mIsSIssIPPi";
const lastName = 'gRImeS';

const capitalize = function(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return word;
}

const capCity = capitalize(city);
const capLastName = capitalize(lastName);

console.log(capCity);
console.log(capLastName);
