// ADD CODE HERE
function reduce(arr, callback, defaultValue) {
  if (!Array.isArray(arr)) {
    return "Please provide an array";
  }
  let acc = defaultValue;
  if (acc === undefined) {
    acc = arr[0];
    arr = arr.slice(1);
  }
  arr.forEach((element, index, array) => {
    acc = callback(acc, element, index, array);
  });
  return acc;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); // should log 8
console.log(reduce(nums, add));

// Implementation 2

// create reduce function that accepts an array and a callback function
function reduce(array, callback, initialValue) {
  if (!Array.isArray(array)) {
    return "Must pass in an array";
  }
  let accumulator = initialValue;
  if (accumulator === "undefined") {
    accumulator = array.shift();
  }
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

// loop through array and apply the callback to each element

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); // should log 8
