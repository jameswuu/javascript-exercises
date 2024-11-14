const convertToCelsius = function(fahrenheit) {
  let celsius = Math.round((fahrenheit - 32.0) * 5.0 / 9.0 * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = Math.round((celsius * 9.0 / 5.0 + 32.0)*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
