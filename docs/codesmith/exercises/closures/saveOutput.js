/*
Create a function saveOutput that accepts a function (that will accept one argument), 
and a string (that will act as a password). saveOutput will then return a function 
that behaves exactly like the passed-in function, except for when the password string 
is passed in as an argument. When this happens, the returned function will return an 
object with all previously passed-in arguments as keys, and the corresponding outputs 
as values
*/

// ADD CODE HERE
function saveOutput(callback, password) {
  const obj = {};
  return function (arg1) {
    if (arg1 === password) {
      return obj;
    } else {
      obj[arg1] = callback(arg1);
      return obj[arg1];
    }
  };
}
// Uncomment these to check your work!
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }

// Attempt 2

// create function saveOutput
// input: function, string
// output: function
function saveOutput(callback, password) {
  // create cache variable
  const cache = {};
  // return function that accepts 1 argument
  return function (string) {
    // if argument === password
    if (string === password) {
      // return cache
      return cache;
    } else {
      // otherwise assign the argument as the key and the returned value from the callback as the value
      const result = callback(string);
      cache[string] = result;
      return result;
    }
  };
}
// Uncomment these to check your work!
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }
