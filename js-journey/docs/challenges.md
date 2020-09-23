# Challenges I've Struggled With

These are challenges from various sources (CSX, CSBin, Edabit, etc.) that I was not able to accomplish right away.

These are in no particular order.

## Challenge

Explanation...

```js
// code with examples and test cases
```

Reasoning of why I struggled.

---

## intersect

Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

```js
// intersection accepts an array of arrays
function intersection(arrays) {
  // declare a new variable that holds the first array
  const firstArray = arrays.shift();
  // declare a new variable that will hold the array returned by reduce
  // for each element in the first array, push that value to the accumulator only if it is also found in the other arrays
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
  // return a new array containing elements found in every array
  return intersect;
}
```

A more elegant approach.

```js
function intersection(...arrays) {
  return arrays.reduce((accumulator, currentArray) => {
    return accumulator.filter((element) => {
      return currentArray.includes(element);
    });
  });
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
```

The key to this is tracking whether a specific element is found in all arrays. This is accomplished by looping through all arrays, and keeping a "tracking" value, which I name `found` in the first example.

In the second example, the author uses `filter` on the accumulator

---

## isPrime

Write a recursive function isPrime that determines if a number is prime and returns true if it is.

```js
// @param {number} num
// @param {number} x
// @return {boolean}
function isPrime(num, x = 2) {
  // base case 1 - if num is equal to 1, return false
  if (num === 1) return false;
  // base case 2 - if num is equal to 2, return true
  if (num === 2) return true;
  if (num > x) {
    if (num % x === 0) {
      return false; // return false
    }
    return isPrime(num, ++x); // return the returned value of invoking isPrime(num ++x)
  }
  return true;
}
```

I struggled with this because I'm not sure what a prime number is.

---

## Palindrome (recursivly)

Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.

```js
//@param: string
function palindrome(string) {
  //if length of string <= 1 return true
  if (string.length <= 1) return true;
  let str = string.toLowerCase().match(/\w*/g).join("");
  //if first element of string equals last (string.length -1)
  if (str[0] === str[str.length - 1]) {
    //call palindrome with subset of string using slice()
    return palindrome(str.slice(1, -1));
  }
  return false;
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false
```

I struggled with the regex to remove all special characters.

---

## Stairs

There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See test cases for examples.

```js
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
```

I was completely lost on this one.

---

## getLength without any native methods or loops

Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

```js
// @param {string} str
// @param {number} len
// @return {number} len
function getLength(str, len = 0) {
  // base case - if str evaluates to false, return len
  if (str[len] === undefined) return len;
  // return getLength(str.slice(1), ++len);
  //len += getLength(str[counter])
  len++;
  //str = str.slice(1);
  //console.log(str - 1);
  return getLength(str, len);
}

console.log(getLength("abcasdfasdf"));
```

I struggled with this because I didn't think to do `str[len]`.

---

## Potions

There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") ➞ "47751"
3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"

```js
// @param {string} potions
// @return {string} result
function usePotions(potions) {
  const result = [];
  const potionsArr = potions.split("");
  for (let i = 0; i < potionsArr.length; i++) {
    let currentElement = potionsArr[i];
    let nextElement = potionsArr[i + 1];
    if (nextElement === "A") {
      result.push(addOne(parseInt(currentElement)));
      i++;
    } else if (nextElement === "B") {
      result.push(subtractOne(parseInt(currentElement)));
      i++;
    } else {
      result.push(currentElement);
    }
  }
  return result.join("");
}

console.log(usePotions("3A78B51")); //➞ "47751"
console.log(usePotions("9999B")); // ➞ "9998"
console.log(usePotions("9A123")); // ➞ "10123"
console.log(usePotions("567")); // ➞ "567"

// DRYer Solution - uses a map of characters and their functions
function usePotions(potions) {
  // declare a constant, result and assign it the value returned from splitting potions
  const result = potions.split("");
  // create a for loop
  for (let i = 0; i < result.length; i++) {
    // for each element, check if the next element is an A or B
    const nextElement = result[i + 1];
    // if its A or B, run a function
    if (potionMap.hasOwnProperty(nextElement)) {
      result[i] = potionMap[nextElement](Number(result[i]));
      result.splice(i + 1, 1);
    }
  }
  return result.join("");
}

const addOne = (num) => num + 1;
const subtractOne = (num) => num - 1;

const potionMap = {
  A: addOne,
  B: subtractOne,
};

console.log(usePotions("3A78B51")); //➞ "47751"
console.log(usePotions("9999B")); // ➞ "9998"
console.log(usePotions("9A123")); // ➞ "10123"
console.log(usePotions("567")); // ➞ "567"
```

I struggled with this because I was looking back (character is an A, let's go back to the previous element), instead of looking forward (character is a 3, is the next character and A or B?).

Also I tried to use `reduce` during the implmentation on the interview, when a for loop would have been much simpler and easier to understand.

---

## Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // declare const result, initialize to array
  const result = [];
  // declare variable pointer1, initialize to 0
  let pointer1 = 0;
  // iterate through for loop with pointer2
  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    // if the sum of pointer1 and pointer 2 equals target, push pointer 1 and pointer 2 to array and return
    if (nums[pointer1] + nums[pointer2] === target) {
      result.push(pointer1, pointer2);
      return result;
    }
    // increment ponter1
    if (pointer2 === nums.length - 1) {
      pointer1++;
      pointer2 = pointer1;
    }
  }

  // return array;
  return result;
};

// better (one pass hash table)

var twoSum = function (nums, target) {
  let numberIndex = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numberIndex.hasOwnProperty(diff)) {
      result.push(numberIndex[diff], i);
      return result;
    } else {
      numberIndex[nums[i]] = i;
    }
  }
  return result;
};
```

In the first approach, I am using a forward looking pointer to compare. In the second approach, an object is used to hold the difference between the number and the target. Then we simply use that as a lookup.

---

## Remove duplicates from sorted array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

```js
// My attempt
var removeDuplicates = function (nums) {
  // iterate through nums array
  for (let i = 0, len = nums.length; i < len; i++) {
    // if next number equals current number, remove next number
    if (i + 1 !== len && nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      len--;
      i--;
    }
  }
  // return len
  return nums.length;
};

// Video solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let pointer1 = 0;
  // iterate through nums array
  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    // if next number equals current number, remove next number
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }
  nums.splice(++pointer1);
  // return len
  return pointer1;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
console.log(arr);
```

I was able to accomplish this but the 'in-place' added an extra challenge. Whenever you modify an array in-place, it always makes things harder.

The video solution to this showed me how to use a slow and fast pointer.

---

## Symmetric Difference

Find the symmetric difference between an array of arrays. Return an array includes the values of an array that are not found in any other array.

```js
function diffArray(arrays) {
  const result = [];
  return arrays.reduce((acc, currentArray) => {
    currentArray.forEach((element) => {
      let found = 0;
      arrays.forEach((arr) => {
        arr.forEach((el) => {
          if (el === element) found++;
        });
      });
      if (found === 1) acc.push(element);
    });
    return acc;
  }, []);
}

const arr1 = [1, 2, 3, 5];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 5, 6, 7, 8, 9];
console.log(diffArray([arr1, arr2, arr3])); // [4,6,7,8,9]

// Solution 2 - after thinking about using a hash map
function diffArrayWithMap(arrays) {
  const mapping = {};
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (mapping.hasOwnProperty(arrays[i][j])) {
        mapping[arrays[i][j]]++;
      } else {
        mapping[arrays[i][j]] = 1;
      }
    }
  }
  Object.keys(mapping).forEach((m) => {
    if (mapping[m] === 1) {
      result.push(Number(m));
    }
  });
  return result;
}
// Solution 2 is much faster since it only goes through each array and element only once. Constant time versus ???
```

I was struggling with this because I wasn't sure how to loop through the arrays twice. I don't think this solution will work if the subarrays contain non-unique values (those values should not be included). I also don't think this has a good time complexity since it requires looping through the arrays many times.

Another approach to this is to create a map object, loop through all arrays and elements and if the map object has a property of that element, increment it's value. Then generate an array of all keys, whose values are 1.

---

## minSwap (recursively)

Write a function that returns the minimum number of swaps to convert the first binary string into the second.

Examples
minSwaps("1100", "1001") ➞ 1

minSwaps("110011", "010111") ➞ 1

minSwaps("10011001", "01100110") ➞ 4

```js
function minSwaps(s1, s2, diff = 0) {
  /* Solution 1 - not recursively
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) diff++
	}
	return diff / 2;
  */

  // Solution 2 - finally I was able to solve it recursively the next day
  if (!s1[0]) {
    return diff / 2;
  }

  if (s1[0] !== s2[0]) {
    diff++;
  }
  return minSwaps(s1.slice(1), s2.slice(1), diff);
}
```

First, I had to determine what the equation was. After some thinking and trial and error over the test cases, I determined the equation was f(n) = differences / 2.

I was not able to solve this recursivley at first. I struggled with my base case. Instead of performing the division of 2 when there are no more strings left in the base case, I was trying to perform this at the end, while calling minSwaps right before that. That was causing the issue. I was trying to reassign diff to the returned result of calling minSwaps, which wasn't working.

The next morning, this is the first problem that was starring me in the face. I realized that I can just do the division in the base case since I am passing diff in as an argument.

---

## Rock, Paper, Scissors

Rock, Paper, Scissors!
Abigail and Benson are playing Rock, Paper, Scissors.
Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".
R stands for Rock
P stands for Paper
S stands for Scissors
Examples
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"
// Ben wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper).
// Abigail wins 2/3.
calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"
calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"

```js
// Solution 1
// @param {array} games
// @return {string} winner
function calculateScore(games) {
  // declare const players, and assign "Abigail" with 0, and "Benson" with 0
  // iterate through array
  const results = games.reduce(
    (acc, current) => {
      const result = determineWinner(current[0], current[1]);
      if (result !== "Tie") {
        acc[result]++;
      }
      return acc;
    },
    { Abigail: 0, Benson: 0 }
  );
  // for each element, determine winner
  // element[0] => Abigail
  // element[1] => Benson
  // if (element[0] === 'R' && element[1] === 'P')

  // if player1's wins equal player2's wins, return "Tie"
  // if player1's wins is greater than player2's wins, return "Abigail"
  // if player1's wins is less than player2's wins, return "Benson"
  if (results["Abigail"] === results["Benson"]) {
    return "Tie";
  }
  if (results["Abigail"] > results["Benson"]) {
    return "Abigail";
  }
  return "Benson";
}

// @param {string} player1
// @param {string} player2
// @return {number} result

function determineWinner(player1, player2) {
  if (player1 === player2) {
    return "Tie";
  }
  if (player1 === "R" && player2 === "S") {
    return "Abigail";
  }
  if (player1 === "S" && player2 === "P") {
    return "Abigail";
  }
  if (player1 === "P" && player2 === "R") {
    return "Abigail";
  }
  return "Benson";
}

// console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]])); // ➞ "Abigail"
// console.log(calculateScore([["S", "R"], ["R", "S"], ["R", "R"]])); /// ➞ "Tie"

// Solution 2

const resultMap = {
  R: "S",
  S: "P",
  P: "R",
};
```

Reasoning

---

## Challenge

Explanation...

```js

```

Reasoning

---

## Mentor session

### Challenge 1 - Memoize

### Challenge 2 - stringCase recursion

```js
// Write a function stringCase that takes a string with mixed uppercase and lowercase characters and
//   return the string in either all uppercase or all lowercase depending on which letter case the
//   string has more of. If the string has equal upper and lower case characters, convert the string
//   to all lowercase. Do not include any loops, native methods (exception: toLowerCase() & toUpperCase() allowed) or the length property.
// Ex:
// stringCase('coDe') --> 'code'
// stringCase('CODe') --> 'CODE'
// stringCase('coDE') --> 'code'

// @param {string} string
// @param {number} counter
// @return {string} ?
function stringCase(
  string,
  counter = 0,
  uppercaseCounter = 0,
  lowercaseCounter = 0
) {
  // base case - if string at index counter is false,
  if (string[counter] === undefined) {
    // if lowercaseCharacters >= uppercaseCharacters, return string.toLowerCase()
    // otherwise, return string.toUpperCase()
    return lowercaseCounter >= uppercaseCounter
      ? string.toLowerCase()
      : string.toUpperCase();
  }
  // check if string at index counter is uppercase
  if (string[counter] === string[counter].toUpperCase()) {
    // if uppercase, increment uppercase counter
    uppercaseCounter++;
  } else {
    // else, increment lowercase counter
    lowercaseCounter++;
  }
  // return the recursive invocation of stringCase, passing string, counter, upperCaseCounter, lowercaseCounter
  return stringCase(string, ++counter, uppercaseCounter, lowercaseCounter);
}

console.log(stringCase("coDe")); // --> 'code'
console.log(stringCase("CODe")); // --> 'CODE'
console.log(stringCase("coDE")); // --> 'code'
```
