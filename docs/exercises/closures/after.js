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
