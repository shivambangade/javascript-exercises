const convertToCelsius = function (f) {
  return Math.round(((f - 32) * (5.0 / 9)) * 10) / 10;
};

const convertToFahrenheit = function (c) {
  return Math.round((c * (9.0 / 5) + 32) * 10) / 10;
  // let ans = c * (9.0 / 5) + 32
  // return Number(num.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
