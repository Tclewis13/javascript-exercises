const convertToCelsius = function(inputDegrees) {
  let convertedDegrees;
  convertedDegrees = ((inputDegrees-32)*5)/9;
  convertedDegrees = Math.round(convertedDegrees * 10) / 10;
  return convertedDegrees;
};

const convertToFahrenheit = function(inputDegrees) {
  let convertedDegrees;
  convertedDegrees = ((inputDegrees*9)/5)+32;
  convertedDegrees = Math.round(convertedDegrees * 10) / 10;
  return convertedDegrees;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
