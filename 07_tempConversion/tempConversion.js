const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5.0 / 9.0;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9.0 / 5.0 + 32);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
