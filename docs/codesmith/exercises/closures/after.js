/* 
Write a function after that takes the number of times the 
callback needs to be called before being executed as the first 
parameter and the callback as the second parameter.
*/

// ADD CODE HERE
function after(afterXTimes, callback) {
  let counter = afterXTimes;

  function calledAfterXTimes(...args) {
    counter--;
    if (counter === 0) {
      return callback(...args);
    }
  }
  return calledAfterXTimes;
}
const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed

// Attempt 2

// create a function after
// input: integer, callback
// output: function
function after(numberOfTimes, callback) {
  // create a counter variable and assign it to numberOfTimes
  let counter = numberOfTimes;
  // return a function to create our closure
  return function (...args) {
    // decrement counter variable
    counter--;
    // if counter is equal to 0, execute callback with arguments
    return counter <= 0 ? callback(...args) : undefined;
  };
}

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed
