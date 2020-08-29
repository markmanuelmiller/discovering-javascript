### Refreshing Array Functions

```js
const numbers = [1, 2, 3];

// returns new array
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});
console.log(numbers); // 1,2,3
console.log(doubleNumArray); // 2,4,6
```

forEach and Map

```js
// ADD CODE HERE
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function map(arr, callback) {
  //const newArry = [];
  forEach(arr, callback);
  return arr;
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]
```

Reduce

```js
// ADD CODE HERE
function reduce(arr, callback, defaultValue) {
  let accumulator = defaultValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(arr[i], accumulator);
  }
  return accumulator;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); // should log 8
```

```js
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
```
