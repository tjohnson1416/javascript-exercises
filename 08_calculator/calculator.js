const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	const sum = array.reduce((runningSum, a) => runningSum + a, 0);
  return sum;
};

const multiply = function(array) {
  const result = array.reduce((runningTotal,a) => runningTotal * a,1);
  return result;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let total = 1;
	for(let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
