/// Declare a variable 'number' and set it to the value 10.
let number = 10;

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

// @param {number} num
// @return {number} sum
function addNumbers(num) {
  // declare a variable sum, intialize to 0
  let sum = 0;
  // while num is greater than 0
  while (num > 0) {
    // sum equals sum plus num
    sum += num;
    num--;
  }
  // return sum
  return sum;
}

// Test Cases
// console.log(addNumbers(4));
// console.log(addNumbers(5));

// Create a function "addOne" that takes a number as and argument and returns that number plus one
// @param {number} num
// @return {number}
function addOne(num) {
  // return num + 1
  return num + 1;
}

// Test Cases
// console.log(addOne(7));
// console.log(addOne(10));

// Create a function "subtractOne" that takes a number as an argument and returns that number minus one
function subtractOne(num) {
  return num - 1;
}

// Test Cases
// console.log(subtractOne(7));
// console.log(subtractOne(10));

/*
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
*/

// @param {string} potions
// @return {string} result
function usePotions(potions) {
  // iterate over potions string
  // for (let i = 0; i < potions.length; i++) {
  // 	// if character is an A and is not index of 0,
  //   if (potions[i] === 'A' && i !== 0) {
  // 		// assign the previous index the returned result from invoking addOne passing previous character as argument
  //     console.log(potions.charAt(i - 1));
  //     let num = parseInt(potions.charAt(i-1));
  //     potions = potions.charAt(i-1) + addOne(parseInt(potions.charAt(i - 1)));
  //   }
  // 	// if character is a B and is not index of 0,
  //   if (potions[i] === 'B' && i !== 0) {
  //     // assign the previous index the returned result from invoking subtractOne passing previous character as argument
  //     potions[i - 1] = subtractOne(parseInt(potions.charAt(i - 1)));
  //   }
  // }
  const p = potions.split("");
  return p
    .reduce((accumulator, currentElement, index, po) => {
      let result = null;
      if (currentElement !== "A" && currentElement !== "B") {
        if (po[index + 1] === "A") {
          result = addOne(parseInt(currentElement));
        } else if (po[index + 1] === "B") {
          result = subtractOne(parseInt(currentElement));
        }
        if (result) {
          accumulator.push(result);
        } else {
          accumulator.push(currentElement);
        }
      }
      return accumulator;
    }, [])
    .join("");

  // refactored solution after interview
  // const result = [];
  //   const potionsArr = potions.split('');
  //   for (let i = 0; i < potionsArr.length; i++) {
  //       let currentElement = potionsArr[i];
  //       let nextElement = potionsArr[i+1];
  //       if (nextElement === 'A') {
  //           result.push(addOne(parseInt(currentElement)));
  //           i++;
  //       } else if (nextElement === 'B') {
  //           result.push(subtractOne(parseInt(currentElement)));
  //           i++;
  //       } else {
  //           result.push(currentElement);
  //       }
  //   }
  //   return result.join('');
}

// console.log(usePotions("3A78B51")); //➞ "47751"
// console.log(usePotions("9999B")); // ➞ "9998"
// console.log(usePotions("9A123")); // ➞ "10123"
// console.log(usePotions("567")); // ➞ "567"

/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"

Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

// @param {number} num
// @return {function}
function add(num) {
  return function (anotherNumber) {
    // return num + anotherNumber
    return num + anotherNumber;
  };
}

// Test Cases
const addBy10 = add(10);
console.log(addBy10(20));

// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

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

console.log(getLength("abc"));

// explain closure

// difference between var, let, and const
