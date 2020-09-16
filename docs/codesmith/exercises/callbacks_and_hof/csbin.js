// Challenge 6
// declare function reduce
// input: array, callback, initialValue
// output: accumulator
function reduce(array, callback, initialValue) {
  // test array is an array, otherwise return
  if (!Array.isArray(array)) {
    return;
  }
  // declare a new variable and assign it a shallow copy of array
  const copiedArray = array.concat();
  // declare new variable, accumulator, and assign that to initialValue if it exists
  // if initialValue does not exist, assign it the first element in array and shift array
  let accumulator = initialValue || copiedArray.shift();
  // iterate over array
  for (let i = 0; i < copiedArray.length; i++) {
    // invoke callback on each array element passing accumulator value and array element as arguments
    // assign returned result to accumulator
    accumulator = callback(accumulator, copiedArray[i]);
  }
  // return accumulator
  return accumulator;
}

const arr = [1, 2, 3];
const subtract = (a, b) => {
  return a - b;
};
console.log(reduce(arr, subtract, 10)); // 4
console.log(reduce(arr, subtract)); // -4

// Challenge 7
// declare a function intersect
// input: array
// output: array
function intersection(...arrays) {
  // declare a new variable and assign it a shallow copy of arrays
  const copiedArrays = arrays.concat();
  // declare a new variable and assign it the first array in the arrays, remove the first array
  const firstArray = copiedArrays.shift();
  // declare a new variable intersect
  // reduce - initialValue will be an array to keep track of elements
  const intersect = firstArray.reduce((accumulator, currentValue) => {
    // declare new variable isFound and assign it a boolean of true
    let isFound = true;
    // iterate through each element in the first array
    for (let i = 0; i < copiedArrays.length; i++) {
      isFound = isFound && copiedArrays[i].includes(currentValue);
    }
    if (isFound) {
      accumulator.push(currentValue);
    }
    // loop through each array
    // determine if element is in the other array
    // if element is in all arrays, push to accumulator array
    return accumulator;
  }, []);

  // return accumulator
  return intersect;
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

// Challenge 17
// declare function commutative
// @param {function} func1
// @param {function} func2
// @param {number} value
// @return {boolean}
function commutative(func1, func2, value) {
  // declare constant result1 and assign it the value of executing func1 with argument of value
  // and passing result to func2
  const result1 = func2(func1(value));
  // declare constant result2 and assign it the value of executing func2 with argument of value
  // and passing result to func1
  const result2 = func1(func2(value));
  // conditional - if result1 equals result2 return true, otherwise return false
  return result1 === result2 ? true : false;
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
// @param {object} obj
// @param {function} callback
// @return {object} result
function objFilter(obj, callback) {
  // declare constant result, initialize to an object
  const result = {};
  // iterative through obj
  for (let key in obj) {
    // invoke callback with obj's key as argument
    let callbackResult = callback(key);
    // if returned result is equal to obj's value
    // add key,value to result
    if (callbackResult === obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
// declare function rating
// input: array of functions, value
// output: percentage - # of trues / array.length
function rating(arrOfFuncs, value) {
  // declare a new variable results and assign it the returned value from running reduce
  const results = arrOfFuncs.reduce((accumulator, callback) => {
    // for each function, assign the returned value to the accumulator
    accumulator.push(callback(value));
    return accumulator;
  }, []);
  // declare a new variable trues and assign it the returned result of filtering results
  const trues = results.filter((element) => element);

  return (trues.length / arrOfFuncs.length) * 100;
}

// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75

// Challenge 21
// declare function highestFunc
// input: object of functions, value
// output: key of object
function highestFunc(objOfFuncs, subject) {
  // declare variable highestOutput and set to null
  let highestOutput = 0;
  // declare variable highestOutputKey and set to null
  let highestOutputKey = null;
  // iterate through object
  for (let key in objOfFuncs) {
    // declare variable output, to store output of invoking function, passing subject
    let output = objOfFuncs[key](subject);
    // if output is greater than highestOutput, set highestOutputKey to key
    if (output > highestOutput) {
      highestOutputKey = key;
      highestOutput = output;
    }
  }
  // return highestOutputKey
  return highestOutputKey;
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
