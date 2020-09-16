/*
Construct a function multiMap that will accept two arrays - an array of 
values and an array of callbacks. multiMap will return an object whose 
keys match the elements in the array of values. The corresponding values 
that are assigned to the keys will be arrays consisting of outputs from 
the array of callbacks, where the input to each callback is the key.
*/

// ADD CODE HERE
function multiMap(values, callbacks) {
  const obj = {};
  values.forEach((value) => {
    obj[value] = callbacks.map((callback) => {
      return callback(value);
    });
  });
  return obj;
}
// Uncomment these to check your work!
function uppercaser(str) {
  return str.toUpperCase();
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
  return str + str;
}
const items = ["catfood", "glue", "beer"];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Solution 2

// input: array of values, array of callbacks
// output: object
function multiMap(arrayOfValues, arrayOfCallbacks) {
  // return object where keys match the elements in the array of values
  //  object values will be arrays consisting of the returned result from calling callbacks
  return arrayOfValues.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = arrayOfCallbacks.map((callback) => {
      return callback(currentValue);
    });
    return accumulator;
  }, {});
}
// Uncomment these to check your work!
function uppercaser(str) {
  return str.toUpperCase();
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
  return str + str;
}
const items = ["catfood", "glue", "beer"];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
