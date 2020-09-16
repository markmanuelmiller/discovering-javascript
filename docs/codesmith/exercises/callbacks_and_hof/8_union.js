// ADD CODE HERE
function union(arrays) {
  if (!Array.isArray(arrays)) {
    return "Please provide an array.";
  }
  arrays = arrays.flat();
  const vals = arrays.reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return vals;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// Implementation 2

function union(arrays) {
  // declare a new array
  const u = arrays.reduce((accumulator, currentArray) => {
    currentArray.forEach((element) => {
      if (!accumulator.includes(element)) {
        accumulator.push(element);
      }
    });
    return accumulator;
  }, []);
  return u;
}
