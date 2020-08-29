/* 
Construct a function objOfMatches that accepts two arrays and a callback. 
objOfMatches will build an object and return it. To build the object, objOfMatches 
will test each element of the first array using the callback to see if the output 
matches the corresponding element (by index) of the second array. If there is a match, 
the element from the first array becomes a key in an object, and the element from the 
second array becomes the corresponding value.
*/

// ADD CODE HERE
function objOfMatches(arr1, arr2, callback) {
  const obj = {};
  arr1.forEach((element, index) => {
    if (callback(element) === arr2[index]) {
      obj[element] = arr2[index];
    }
  });
  return obj;
}
// Uncomment these to check your work!
const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
