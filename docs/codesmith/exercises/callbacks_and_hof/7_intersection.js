// ADD CODE HERE
function intersection(arrays) {
  if (!Array.isArray(arrays)) {
    return "Please provide an array";
  }
  const inter = [];
  function containsInArray(value, array) {
    let contains = false;
    array.forEach((element) => {
      if (element === value) {
        contains = true;
      }
    });
    return value;
  }
  // for each array
  //   arrays.forEach(array => {
  //     array.forEach(element => {

  //     })
  // 			// array.reduce((inter, currentValue, index, arr) => {
  // 			// console.log(inter);
  // 			// }, inter);
  //   });

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      let currentValue = arrays[i][j];
      console.log(currentValue);
    }
  }

  return inter;
}

function isValueInArray(value, array) {
  if (array.indexOf(value) === -1) {
    return false;
  } else {
    return true;
  }
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// ----------------------------------------------------------------------------

// Implementation 2
// intersection accepts an array of arrays
function intersection(arrays) {
  // declare a new variable that holds the first array
  const firstArray = arrays.shift();
  // declare a new variable that will hold the array returned by reduce
  const intersect = firstArray.reduce((accumulator, currentValue) => {
    let found = true;
    arrays.forEach((array) => {
      found = array.includes(currentValue) && found;
    });
    if (found) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  // for each element in the first array, push that value to the accumulator only if it is also found in the other arrays

  // return a new array containing elements found in every array
  return intersect;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// ----------------------------------------------------------------------------

// Implementation 3

function intersection(arrays) {
  return arrays.reduce((accumulator, currentArray) => {
    return accumulator.filter((element) => {
      return currentArray.includes(element);
    });
  });
}
