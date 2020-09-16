// Implement memoise
// @param {function} callback
// @return {function} annonymous
function memoise(callback) {
  // declare a cache variable
  const cache = {};
  let counter = 0;
  // return new function with parameters
  return function (arg) {
    // stringify parameters
    let parameters = JSON.stringify(arg);
    // check if cache has a key that matches string of parameters
    if (cache.hasOwnProperty(parameters)) {
      // if so, return value
      console.log(counter);
      return cache[parameters];
    }
    // otherwise, store result of invoking callback with arguments
    let result = callback(arg);
    // add new key to cache with property of string of arguments
    // and value of result
    cache[parameters] = result;
    counter++;
    // return result
    return result;
  };
}

const heavyCalc = (arg1) => {
  return arg1 * arg1;
};

// const memo = memoise(heavyCalc);
// console.log(memo(10));
// console.log(memo(20));
// debugger;
// console.log(memo(10));

// Implement pipe
// @param {array} callbacks
// @param {?} initialValue
// @return {} result
function pipe(callbacks, initialValue) {
  // declare variable result and initialize to initialValue

  // iterate over callbacks
  //invoke callback passing in result, and store returned value to result

  // return result
  return callbacks.reduce((accumulator, callback) => {
    return callback(accumulator);
  }, initialValue);
}

// Test Cases
const addTwo = (value) => {
  return value + 2;
};

const multiplyByTwo = (value) => {
  return value * 2;
};

const divideBy3 = (value) => {
  return value / 3;
};

const funcs = [addTwo, multiplyByTwo, divideBy3];
let initial = 4;

let storedResult = pipe(funcs, initial);
console.log(storedResult);

// Implement pipe w/ closure
// @param {array} callbacks
// @return {function} annonymous
function pipeWithClosure(callbacks) {
  // return annonymous function that accepts 1 parameter, value
  return function (initialValue) {
    // iterate over callbacks and return final result
    return callbacks.reduce((accumulator, callback) => {
      return callback(accumulator);
    }, initialValue);
  };
}

let pipeWithFunctions = pipeWithClosure(funcs);

let result1 = pipeWithFunctions(10);
let result2 = pipeWithFunctions(20);

console.log(result1);
console.log(result2);

// Implement pipe recursively
//

// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// Interview challenge

/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:
const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
oddCounter(); -> { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); -> false
oddCounter(); -> { true: 1, false: 1 }
*/
// Input - Function
// Return - Bool || {}
function checkerLogger(callback) {
  // declare a variable cache{}
  const cache = { true: 0, false: 0 };
  // Return function that takes an argument
  return function (value) {
    // Check if value
    // If arg is passed => result = callback(), update cache
    if (value) {
      let result = callback(value);
      cache[result] += 1;
      return result;
    }
    // Else - return cache {}
    return cache;
  };
}

const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); // -> { true: 0, false: 0 }
console.log(oddCounter(3)); // -> true
console.log(oddCounter(2)); // -> false
console.log(oddCounter()); // -> { true: 1, false: 1 }

/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.

Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

function changeCase(letter) {
  let lower = /[a-z]/;
  if (letter.match(lower)) {
    return letter.toUpperCase();
  } else {
    return letter.toLowerCase();
  }
}

/*
Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
- The shorten function will have an "accumulator value" which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
- The array is iterated over, passing the accumulator value and the next array element to the callback function.
- The callback function's returned value becomes the new accumulator value
- The next loop executes with the new accumulator value.
*/

/*
Create a function "concatWithSpace" that takes in two arguments (both will be strings). "concatWithSpace" should return the two strings concatenated with a space in between them.
For example, if the arguments are "hello" and "world" then "concatWithSpace" should return "hello world".
*/
