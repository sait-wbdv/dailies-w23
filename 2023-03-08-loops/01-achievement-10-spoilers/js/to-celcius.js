const tempF = 72;

const tempToCelcius = function(temp) {
  temp = (5 / 9) * (temp - 32);

  return temp;
}

const tempC = tempToCelcius(tempF);

console.log(`${tempF} degrees Fahrenheit is ${tempC.toFixed(1)} degrees Celcius`);