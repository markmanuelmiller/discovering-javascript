// Challenge 3
// create a function palindrome
// input: string
// output: boolean
function palindrome(string) {
  // base case - return false if string.length <= 1
  if (string.length <= 1) {
    return true;
  }
  // create a copy of the string, remove special characters, set it to lowercase and remove spaces
  let formattedString = string
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  // create a variable to store the first character
  const firstCharacter = formattedString.charAt(0);
  // create a variable to store the last character
  const lastCharacter = formattedString.charAt(formattedString.length - 1);
  if (firstCharacter !== lastCharacter) {
    return false;
  }
  formattedString = formattedString.slice(1, formattedString.length - 1);
  return palindrome(formattedString);
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false

// Challenge 4
// create a function isPrime
// input: number
// output: boolean
function isPrime(num, x = 2) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (x < num) {
    if (num % x === 0) {
      return false;
    }
    x++;
    return isPrime(num, x);
  }
  return true;
}

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false

//Challenge 5
// create a recursive function pathFinder
// input: object, array
// output: string
function pathFinder(obj, arr) {
  // base case - if arr.length === 0 return false
  if (arr.length === 0) {
    return false;
  }
  // if obj has a property === arr[0]
  if (obj.hasOwnProperty(arr[0])) {
    const newObject = obj[arr[0]];
    // shift first time and invoke pathFinder
    return pathFinder(newObject, arr.shift());
  }
  return false;
}

const obj = {
  first: { second: { third: "finish" } },
  second: { third: "wrong" },
};
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr)); //-> "finish"

//Challenge 6
// declare function flattenRecursively
// input: array
// output: flattened array
function flattenRecursively(arr) {
  // declare a new variable hasArray and assign it a value of false
  let hasArray = false;
  // base case - if arr does not contains a nested array, return arr
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      hasArray = true;
    }
  });

  if (!hasArray) {
    return arr;
  }
  // call flattenRecursively passing a flattened arr
  return flattenRecursively(arr.flat());
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

//Challenge 7
// declare a function findInOrderedSet
// input: array, target, index
// output: boolean
function findInOrderedSet(arr, target) {
  // base case - if index is equal to the length of the array, return false
  if (arr.length === 0) return false;
  // if the first element in the array is equal to target, return true
  if (arr.shift() === target) return true;
  // call findInOrderedSet, passing arr, target, and index
  return findInOrderedSet(arr, target);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4)); //-> true
console.log(findInOrderedSet(nums, 2)); //-> false

//Challenge 8
// declare function countWaysToReachNthStair
// input: integer
// output: integer
function countWaysToReachNthStair(n) {
  // base case 1 - if n equals 0, return 0
  if (n < 0) return 0;
  // base case 2 - if n equals 1, return 1
  if (n === 0) return 1;
  // return the invocation of countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2)
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

console.log(countWaysToReachNthStair(1)); //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)); //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)); //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
// 5 => (1,1,1,1,1), (2,1,1,1), (1,1,1,2), (2,2,1), (1,2,2), (1,2,1,1), (1,1,2,1),

//Challenge 10
// declare function getRangeBetween
// input: starting integer, ending integer (both exclusive), array
// output: array
function getRangeBetween(x, y, range = []) {
  // base case - if x equals y return range
  // increment x
  if (++x >= y) return range;
  // push x on to range
  range.push(x);
  // call getRangeBetween
  return getRangeBetween(x, y, range);
}

console.log(getRangeBetween(2, 9)); //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)); //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// Challenge 1
function countdown(n) {
  // base case - if n = 0 return
  if (n === 0) {
    return;
  }
  console.log(n--);
  return countdown(n);
}

// To check if you've completed it, uncomment these console.logs!
//countdown(5);
//countdown(10);

// Challenge 2
// create recusrive function sum
// input: array, integer
// output: integer
// this mutates array
function sum(array, currentSum = 0) {
  // base case - if array.length === 0, return currentSum
  if (array.length === 0) {
    return currentSum;
  }
  // copy array
  const copiedArray = array.concat();
  // add last value of array to sum
  currentSum += copiedArray.pop();
  // call sum
  return sum(copiedArray, currentSum);
}

// uncomment these to check your work
//console.log(sum([1,1,1])); // -> returns 3
//console.log(sum([1,2,3,4,5,6])); // -> returns 21

// Challenge 3
// create a function palindrome
// input: string
// output: boolean
function palindrome(string) {
  // base case - return false if string.length <= 1
  if (string.length <= 1) {
    return true;
  }
  // create a copy of the string, remove special characters, set it to lowercase and remove spaces
  let formattedString = string
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  // create a variable to store the first character
  const firstCharacter = formattedString.charAt(0);
  // create a variable to store the last character
  const lastCharacter = formattedString.charAt(formattedString.length - 1);
  if (firstCharacter !== lastCharacter) {
    return false;
  }
  formattedString = formattedString.slice(1, formattedString.length - 1);
  return palindrome(formattedString);
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

// Challenge 4
// create a function isPrime
// input: number
// output: boolean
function isPrime(num, x = 2) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (x < num) {
    if (num % x === 0) {
      return false;
    }
    x++;
    return isPrime(num, x);
  }
  return true;
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

//Challenge 5
// create a recursive function pathFinder
// input: object, array
// output: string
function pathFinder(obj, arr) {
  // base case - if arr.length === 0 return false
  if (arr.length === 0) {
    return false;
  }
  // if obj has a property === arr[0]
  if (obj.hasOwnProperty(arr[0])) {
    const newObject = obj[arr[0]];
    // shift first time and invoke pathFinder
    return pathFinder(newObject, arr.shift());
  }
  return false;
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"

//Challenge 6
// declare function flattenRecursively
// input: array
// output: flattened array
function flattenRecursively(arr) {
  // declare a new variable hasArray and assign it a value of false
  let hasArray = false;
  // base case - if arr does not contains a nested array, return arr
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      hasArray = true;
    }
  });

  if (!hasArray) {
    return arr;
  }
  // call flattenRecursively passing a flattened arr
  return flattenRecursively(arr.flat());
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

//Challenge 7
// declare a function findInOrderedSet
// input: array, target, index
// output: boolean
function findInOrderedSet(arr, target) {
  // base case - if index is equal to the length of the array, return false
  if (arr.length === 0) return false;
  // if the first element in the array is equal to target, return true
  if (arr.shift() === target) return true;
  // call findInOrderedSet, passing arr, target, and index
  return findInOrderedSet(arr, target);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false

//Challenge 8
// declare function countWaysToReachNthStair
// input: integer
// output: integer
function countWaysToReachNthStair(n) {
  // base case 1 - if n equals 0, return 0
  if (n < 0) return 0;
  // base case 2 - if n equals 1, return 1
  if (n === 0) return 1;
  // return the invocation of countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2)
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

console.log(countWaysToReachNthStair(1)); //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)); //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)); //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
// 5 => (1,1,1,1,1), (2,1,1,1), (1,1,1,2), (2,2,1), (1,2,2), (1,2,1,1), (1,1,2,1),

//Challenge 9
function getPermutations(arr) {}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

//Challenge 10
// declare function getRangeBetween
// input: starting integer, ending integer (both exclusive), array
// output: array
function getRangeBetween(x, y, range = []) {
  // base case - if x equals y return range
  // increment x
  if (++x >= y) return range;
  // push x on to range
  range.push(x);
  // call getRangeBetween
  return getRangeBetween(x, y, range);
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

//Challenge 11
// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array. Try NOT to use Array.flat()
// Examples
console.log(getLength([1, [2, 3]])); //➞ 3
console.log(getLength([1, [2, [3, 4]]])); // ➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // ➞ 6
console.log(getLength([1, [2], 1, [2], 1])); // ➞ 5

// @param {array} arr
// @return {number} counter
function getLength(arr, counter = 0) {
  // iterate over arr
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // if arr element is an array, invoke getLength() passing subArry and counter
      let len = getLength(arr[i]);
      counter += len;
    } else {
      counter++; // otherwise return incremented counter
    }
  }
  return counter;
}

// Challenge 4
// @param {number} num
// @param {number} x
// @return {boolean}
function isPrime(num, x = Math.floor(num / 2)) {
  // base case 1 - if num is equal to 1, return false
  if (num === 1) return false;
  // base case 2 - if num is equal to 2, return true
  if (num === 2) return true;
  // if num > x
  if (num > x) {
    if (num % x === 0)
      // if remainder of num modulo x equals 0
      return false; // return false
    return isPrime(num, ++x); // return the returned value of invoking isPrime(num ++x)
  }
  return true;

  if (num <= 1) return false;
  if (x === 1) return true;
  if (num % x === 0) return false;
  return isPrime(num, --x);
}

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false
