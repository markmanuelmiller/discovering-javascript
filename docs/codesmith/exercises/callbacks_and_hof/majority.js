// ADD CODE HERE
function majority(arr, callback) {
  const maj = arr.reduce(
    (acc, current) => {
      if (callback(current)) {
        acc.t = acc.t + 1;
      } else {
        acc.f = acc.f + 1;
      }
      return acc;
    },
    { t: 0, f: 0 }
  );
  console.log(maj);
  return maj.t > maj.f ? true : false;
}
// Uncomment these to check your work!
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Implementation 2

// input: array and a callback
// output: boolean
function majority(array, callback) {
  // iterate through array, invoking callback on each element
  const results = array
    .map((element) => {
      return callback(element);
    })
    .reduce(
      (accumulator, currentValue) => {
        // track returned true and false values
        currentValue ? accumulator.t++ : accumulator.f++;
        return accumulator;
      },
      { t: 0, f: 0 }
    );
  // return true if trues > falses, otherwise return false
  return results.t > results.f ? true : false;
}

// Uncomment these to check your work!
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Implementation 3

// input: array and a callback
// output: boolean
function majority(array, callback) {
  // iterate through array, invoking callback on each element
  const results = array.reduce(
    (accumulator, currentValue) => {
      // track returned true and false values
      callback(currentValue) ? accumulator.t++ : accumulator.f++;
      return accumulator;
    },
    { t: 0, f: 0 }
  );
  // return true if trues > falses, otherwise return false
  return results.t > results.f ? true : false;
}
