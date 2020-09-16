// ADD CODE HERE
function once(callback) {
  let hasBeenCalled = false;
  let cachedResult = null;
  function onceFun(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      cachedResult = callback(...args);
    }
    return cachedResult;
  }
  return onceFun;
}
const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7

// Attempt 2

// create a function once
// input: function
// output: function
function once(callback) {
  // declare a variable called and assign to false
  // declare a variable cache and assign it null
  let cache = null;
  // if cache is false, invoke callback and store in cache
  return function (...args) {
    if (!cache) {
      cache = callback(...args);
    }
    // return cache value
    return cache;
  };
}

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
