// ADD CODE HERE
function delay(callback, waitTime) {
  // return function
  return function () {
    setTimeout(callback, waitTime);
  };
}
// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// Attempt 2

// create a function delay
// input: callback function, waitTime
// output: function
function delay(callback, waitTime) {
  // return function
  return function () {
    // use setTimeout to invoke the callback after waitTime
    setTimeout(callback, waitTime);
  };
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
