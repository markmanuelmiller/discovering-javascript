/*
Create a function defineFirstArg that accepts a function and an argument. 
Also, the function being passed in will accept at least one argument. 
defineFirstArg will return a new function that invokes the passed-in function 
with the passed-in argument as the passed-in function's first argument. 
Additional arguments needed by the passed-in function will need to be passed 
into the returned function.
*/

// ADD CODE HERE
function defineFirstArg(callback, arg) {
  // callback will accept at least one argument
  // return a new function that invokes the passed-in function
  return function (...args) {
    // invoke callback with arguments
    return callback(arg, ...args);
  };
}
// Uncomment these to check your work!
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

// Attempt 2

// create function defineFirstArg
// input: function, integer
// output: function
function defineFirstArg(callback, firstArg) {
  // return anonymous function that accepts a parameter
  return function (...args) {
    // invoke the callback with the integer as the first parameter, and then the other arguments
    return callback(firstArg, ...args);
  };
}
// Uncomment these to check your work!
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
