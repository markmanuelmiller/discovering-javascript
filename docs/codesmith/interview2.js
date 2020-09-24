//console.log("Hello Mark!");

/*
Create a function "concatWithSpace" that takes in two arguments (both will be strings).
"concatWithSpace" should return the two strings concatenated with a space in between them.
For example, if the arguments are "hello" and "world" then "concatWithSpace" should return "hello world".
*/

function concatWithSpace(string1, string2) {
  // return string1 plus space plus string2
  return string1 + " " + string2;
}

// console.log(concatWithSpace("hello", "world")); // "hello world"

/*
Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
- The shorten function will have an "accumulator value" which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
- The array is iterated over, passing the accumulator value and the next array element to the callback function.
- The callback function's returned value becomes the new accumulator value
- The next loop executes with the new accumulator value.
*/

// @param {array} array
// @param {function} callback
// @param {?} initialValue
// @return {?} accumulator
function shorten(array, callback, initialValue) {
  // if array is not an array, log "First element must be an array"
  if (!Array.isArray(array)) return "First element must be an array";

  // declare variable accumulator and initialize to null
  let accumulator = null;
  // declare counter variable and initialize to 0
  let counter = 0;
  // determine if initialValue is defined
  if (typeof initialValue !== "undefined") {
    // assign initialValue to accumulator
    accumulator = initialValue;
  } else {
    // otherwise assign first element in array to accumulator
    // increment counter
    accumulator = array[counter++];
  }

  // iterate over array
  for (let i = counter; i < array.length; i++) {
    // for each element in array, reassign accumulator to the returned invocation of the callback,
    // passing in accumulator, currentValue, and index as arguments
    accumulator = callback(accumulator, array[i], i);
  }
  // return accumulator
  return accumulator;
}

/*
Check that your 'shorten' function is working correctly by passing an array to it with the string values 'is', 'so', 'much' and 'fun!' as the first argument.
Pass your concatWithSpace function as our callback and the string 'Programming' as the initialValue argument. The result of this call to shorten should be the string 'Programming is so much fun!'
*/

// console.log(shorten(['is', 'so', 'much', 'fun!'], concatWithSpace, 'Programming')); // "Programming is so much fun!"
// console.log(shorten(['is', 'so', 'much', 'fun!'], concatWithSpace)); // "is so much fun!"

/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

// @param {array} array
// @param {?} searchValue
// @return {number} ?
function countTimes(array, searchValue) {
  // verify array is an array
  if (!Array.isArray(array)) return "First element must be an array";
  // declare constant, result, and assign it the returned value from invoking array.filter()
  // within filter callback, check if current element (element) === searchValue
  const result = array.filter((element) => element === searchValue);

  // return the length of result
  return result.length;
}

// console.log(countTimes([1, 8, 9, 9, 10], 9)); // -> 2

/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

// @param {array []} wordSearch
// @param {string} letter
// @return {number} counter
function wordSearchLetterCounter(wordSearch, letter) {
  // verify wordSearch is an array
  if (!Array.isArray(wordSearch)) return "First argument must be an array.";
  // declare variable counter, and initialize to 0
  let counter = 0;
  // iterate over wordSearch array
  for (let i = 0; i < wordSearch.length; i++) {
    // reassign counter to counter + the returned result from invoking countTimes, passing in subarray, and letter
    counter += countTimes(wordSearch[i], letter);
  }
  // return counter
  return counter;
}

const arr = [
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"],
];
// console.log(wordSearchLetterCounter(arr, "D"));

/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
Example:
const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
oddCounter(); ->  { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); ->  false
oddCounter(); -> { true: 1, false: 1 }
*/

// @param {function} callback
// @return {function} returnedFunction
function checkerLogger(callback) {
  // declare constant, cache, and initialize to the object literal {"true": 0, "false": 0}
  const cache = {};
  cache["true"] = 0;
  cache["false"] = 0;
  // return function logger, accepting 1 parameter (arg)
  return function logger(arg) {
    // if arg is defined
    if (typeof arg !== "undefined") {
      // declare variable result and assign the returned value from invoking callback, passing in arg
      let result = callback(arg);
      let resultString = String(result);
      // check if cache variable has result as key
      if (cache.hasOwnProperty(resultString)) {
        // increment value
        cache[resultString]++;
      }
      // return result
      return result;
    } else {
      // otherwise return cache
      return cache;
    }
  };
}

const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }
