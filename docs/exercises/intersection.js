function intersection(arrays) {
  if (!Array.isArray(arrays)) {
    return "Please provide an array";
  }
  const inter = [];
  const start = arrays.shift();
  start.forEach((element) => {
    let isElementInArray = true;
    arrays.forEach((array) => {
      isElementInArray = isValueInArray(element, array) && isElementInArray;
    });
    if (isElementInArray) {
      inter.push(element);
    }
  });

  // const inter = arrays.reduce((accumulator, currentValue) => {
  //   return currentValue.reduce((accum, element) => {

  //   })
  // }, []);

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
