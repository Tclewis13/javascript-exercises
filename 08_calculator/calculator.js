const add = function(firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(inputArray) {
	const summation = inputArray.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return summation;
};

const multiply = function(inputArray) {
  const summation = inputArray.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return summation;
};

const power = function(firstNum, secondNum) {
	return Math.pow(firstNum,secondNum);
};

const factorial = function(inputNum) {
	let summation = 1;
  if (inputNum === 0 || inputNum === 1){
    return 1;
  }
  else{
    for (i = inputNum; i > 0; i--){
      summation *= i;
      console.log(summation);
    }
    return summation;
  }
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
