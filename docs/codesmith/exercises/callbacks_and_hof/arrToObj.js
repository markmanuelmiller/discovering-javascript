function arrToObj(array, callback) {
  // call reduce with an empty object as the initialValue
  return array.reduce((accumulator, currentValue) => {
    if (!accumulator.hasOwnProperty(currentValue)) {
      accumulator[currentValue] = callback(currentValue);
    }
    return accumulator;
  }, {});
}

// Uncomment these to check your work!
const arrOfStrings = ["beer", "glue"];
const capitalize = (str) => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
