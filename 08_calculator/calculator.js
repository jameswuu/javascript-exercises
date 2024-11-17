const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(array) {
  // old ways to do it
  // let sum = 0;
  // for(let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }
  // return sum;

  // Cleaner way of doing it using reduce
  const sum = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0) 
  return sum;

};

const multiply = function(array) {
  // Using reduce to perform product
  const productOfAllNums = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);

  return productOfAllNums;
};

const power = function(base, root) {
  let answer =  1;

  for (let i = 0; i < root; i++) {
    answer *= base;
  }

  return answer;
};

const factorial = function(num) {
  let answer = 1;
  for (let i = 1; i < (num + 1); i++) {
    answer *= i;
  }
  return answer;
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
