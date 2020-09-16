/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  const words = str.split(" ").map((word) => {
    let firstLetter = word.slice(0, 1);
    const regex = /[a-zA-Z0-9]/g;
    if (regex.test(firstLetter)) {
      word = word.slice(1) + firstLetter + "ay";
    }
    return word;
  });
  console.log(words);
  return words.join(" ");
}

Test.assertEquals(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
Test.assertEquals(pigIt("This is my string"), "hisTay siay ymay tringsay");

// Pipe

function pipe(...callbacks) {
  return function (value) {
    return callbacks.reduce((accumulator, callback) => {
      return callback(accumulator);
    }, value);
  };
}

function hello() {
  return "hello";
}

function capitalize(str) {
  return str.toUpperCase();
}

function addWorld(str) {
  return str + " world!";
}

debugger;
let p = pipe(capitalize, addWorld);
let a = p(hello());
console.log(a);

// remove duplicates from sorted array, in place

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // if next number equals current number, remove next number
    if (i + 1 !== nums.length && nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    }
  }
  // return len
  return nums.length;
};

// answer

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  debugger;
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

// two sum

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

// better

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
