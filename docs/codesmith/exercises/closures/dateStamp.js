/*
Create a function dateStamp that accepts a function and returns a function. 
The returned function will accept whatever arguments the passed-in function 
accepts and return an object with a date key whose value is today's date 
(not including the time) represented as a human-readable string (see the Date 
object for conversion methods), and an output key that contains the result 
from invoking the passed-in function.
*/

// ADD CODE HERE
function dateStamp(callback) {
  return function (args) {
    const obj = {};
    obj.date = new Date().toDateString();
    obj.output = callback(args);
    return obj;
  };
}
// Uncomment these to check your work!
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

// Attempt 2

// create function dateStamp
// input: callback
// output: function
function dateStamp(callback) {
  // return function that accepts a number of arguments
  return function (...args) {
    // declare a new object with the key equal to todays date
    // assign object value to invoking the callback with the passed in arguments
    return {
      date: new Date().toDateString(),
      output: callback(...args),
    };
  };
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
