// Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
// oddishOrEvenish(43) ➞ "Oddish"
// oddishOrEvenish(373) ➞ "Oddish"
// oddishOrEvenish(4433) ➞ "Evenish"

// @param {number} num
// @return {string} ?
function oddishOrEvenish(num) {
  // declare variable sum and initialize to 0
  let sum = 0;
  // declare const numbers and assign the returned array from splitting num
  const numbers = String(num).split("");
  // iterate through numbers array
  numbers.forEach((element) => {
    // for each number, sum will equal sum + number (cast to numbers)
    sum += Number(element);
  });
  // if sum mod 2 striclty equals 0, return "Evenish"
  if (sum % 2 === 0) {
    return "Evenish";
  } else {
    // otherwise, return "Oddish"
    return "Oddish";
  }
}

// console.log(oddishOrEvenish(43)); // Oddish
// console.log(oddishOrEvenish(4433)); // Evenish

// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// Examples
// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
//input: nested array
//output: length of flattened array

//init collectArr as empty array in params, init index as 0 in params
//base case: if arr at index is undefined, return collectArr
//init nestedIndex
//loop through input arr
//check if current element is an array, if so, reassign nestedIndex to the index of current element
//else, push current element in collectArr
//create new var called newArr, and set it input arr at nestedIndex
//recursive call: return getLength(newArr, collectArr, index + 1)
function getLength(arr) {
  // base case - if arr is not an array, returning 1
  if (!Array.isArray(arr)) return 1;
  // initialize variable counter, set to 0
  let counter = 0;
  // iterate over arr
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      counter += getLength(element);
    } else {
      counter++;
    }
  });
  // if element is an array, reassign counter = counter + recursive call to getLength
  // otherwise, increment counter

  // return counter
  return counter;

  // if (index === 0) return arr.length
  // let nestedIndex;
  // arr.forEach((element, i) => {
  // if (Array.isArray(element)) {
  // nestedIndex = i;
  // }
  // });
  // let newArr = []
  // if (nestedIndex === undefined) {
  // newArr = ''
  // } else {
  // newArr = arr[nestedIndex]
  // }
  // return getLength(arr.concat(newArr), index + 1)
}
// console.log(getLength([1, [2, 3]])) //➞ 3
// console.log(getLength([1, [2, [3, 4]]]))// ➞ 4
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))// ➞ 6
// console.log(getLength([1, [2], 1, [2], 1]))// ➞ 5

// Rock, Paper, Scissors!
// Abigail and Benson are playing Rock, Paper, Scissors.
// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".
// R stands for Rock
// P stands for Paper
// S stands for Scissors
// Examples
// calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"
// // Ben wins the first game (Paper beats Rock).
// // Abigail wins the second game (Rock beats Scissors).
// // Abigail wins the third game (Scissors beats Paper).
// // Abigail wins 2/3.
// calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"
// calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"

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
/*
if they equal eachother, it's a tie
R beats S
P beats R
S beats P
*/

// Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]
// Bonus:Try solving this without Regex

//input: arr, of strings
//output: arr, sorted by numbers in string
//edge case: if input array's elements contain no numbers, return an empty array

//matchNum numbers in input arr
//if match === null, return []
//matchWord, set it match of only words with numbers in it
//sort matchWord by matching the numbers in the words
//return matchWord
function numInStr(arr) {
  const matchNum = arr.join(" ").match(/\d/g);
  if (matchNum === null) return [];

  let matchWord = arr.filter((word) => {
    const hasNum = word.match(/\d/g);
    return hasNum !== null;
  });
  return console.log(
    matchWord.sort((a, b) => Number(a.match(/\d+/g)) - Number(b.match(/\d+/g)))
  );
}
// numInStr(["1a", "a", "2b", "b"])// ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) //➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) //➞ ["test1"]

// Vowel to Vowel Links
// Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel.
// Examples
// vowelLinks("a very large appliance") ➞ true
// vowelLinks("go to edabit") ➞ true
// vowelLinks("an open fire") ➞ false
// vowelLinks("a sudden applause") ➞ false
// Notes
// You can expect sentences in lowercase/uppercase.

// @param {string} str
// @return {boolean} result
function vowelLinks(str) {
  // declare const vowels, array with all vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // declare const, arr and assign value returned from str.split(' ')
  const arr = str.split(" ");
  // declare pointer1, and intialize to 0
  let pointer1 = 0;
  // for loop - pointer2, intialize to 1, loop until arr.length
  for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
    // declare variable lastElement, get last character of element at pointer1
    let lastElement = arr[pointer1];
    let lastElementCharacter = lastElement[lastElement.length - 1];
    // declare varaible firstElement, get first character of element at pointer2
    let firstElement = arr[pointer2];
    let firstElementCharacter = firstElement[0];
    // if both elements are included in my vowels array, return true
    if (
      vowels.includes(lastElementCharacter.toLowerCase()) &&
      vowels.includes(firstElementCharacter.toLowerCase())
    ) {
      return true;
    }
    pointer1++;
  }
  // return false
  return false;
}

// console.log(vowelLinks("a very large appliance")); // ➞ true
// console.log(vowelLinks("go to edabit")); // ➞ true
// console.log(vowelLinks("an open fire")); // ➞ false
// console.log(vowelLinks("a sudden applause")); // ➞ false

// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values.
// Write a function that returns true if an array is positive dominant.
// Examples
// [1, 1, 1, 1, -3, -4] ➞ false
// // there is only 1 unique positive value (1)
// // there are 2 unique negative values (-3, -4)
// [5, 99, 832, -3, -4] ➞ true
// [5, 0] ➞ true
// [0, -4, -1] ➞ false
// Notes
// 0 neither counts as a positive nor a negative value.

//input: array, of numbers
//output: boolean, true if unique positive numbers count > unique negative numbers count

//use Set to remove duplicates from input arr
//init countPos var as 0
//init countNeg var as 0
//loop through newArr with forEach, with param (element) =>
//check if element positive > 0
//increment countPos
//else, increment countNeg
//return boolean, if countPos > countNeg
function isPositiveDominant(a) {
  const newArr = Array.from(new Set(a));
  let countPos = 0;
  let countNeg = 0;

  newArr.forEach((element) => {
    if (element > 0) countPos++;
    else if (element < 0) countNeg++;
  });

  return countPos > countNeg;
}
console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])); //false
console.log(isPositiveDominant([1, 1, -1, 2])); //true
console.log(isPositiveDominant([0, 0, 1, -1])); //false

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
// Examples:
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.
function encrypt(text, n) {}
function decrypt(encryptedText, n) {}

// Calculate Depth of Array
// Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

// Examples
// console.log(depth([1, 2, 3, 4]))// ➞ 1

// console.log(depth([1, [2, 3, 4]]))// ➞ 2

// console.log(depth([1, [2, [3, 4]]]))// ➞ 3

// console.log(depth([1, [2, [3, [4]]]]))// ➞ 4
function depth(arr) {}

// Hole Number Sequence
// What do the digits 0, 4, 6, 8, and 9 have in common? Well, they are whole numbers... and they are also hole numbers (not actually a thing until now). Hole numbers are numbers with holes in their shapes (8 is special in that it contains two holes).

// 14 is a hole number with one hole. 88 is a hole number with four holes.

// Your task is to create a function with argument N that returns the sum of the holes for the integers n in the range of range 0 < n <= N.

// To illustrate, sumOfHoles(14) returns 7, because there are 7 holes in 4, 6, 8, 9, 10 and 14.

// Examples
// sumOfHoles(4) ➞ 1

// sumOfHoles(6) ➞ 2

// sumOfHoles(8) ➞ 4

// sumOfHoles(6259) ➞ 12345

// this implementation exceeds call stack for last test case in Edabit
const holedNumbers = {
  4: 1,
  6: 1,
  8: 2,
  9: 1,
  0: 1,
};
function sumOfHoles(N, holes = 0) {
  if (N <= 0) return holes;
  const numbers = String(N).split("");
  numbers.forEach((number) => {
    if (holedNumbers.hasOwnProperty(number)) {
      holes += holedNumbers[number];
    }
  });
  return sumOfHoles(--N, holes);
}

// ABACABA Pattern
// The ABACABA pattern is a recursive fractal pattern that shows up in many places in the real world (such as in geometry, art, music, poetry, number systems, literature and higher dimensions).

// Create a function that takes a number n as an argument and returns a string that represents the full pattern.

// Examples
// console.log(abacabaPattern(1))// ➞ "A"

// console.log(abacabaPattern(2))// ➞ "ABA"

// console.log(abacabaPattern(3))// ➞ "ABACABA"

// Notes
// Result should always be uppercase.
// Check the Resources tab for more info on the ABACABA pattern.
function abacabaPattern(n) {}

// The Kempner Function
// The Kempner Function, applied to a composite number n, finds the smallest integer greater than zero whose factorial is divisble by n.

// kempner(6) ➞ 3

// 1! = 1 % 6 > 0
// 2! = 2 % 6 > 0
// 3! = 6 % 6 === 0

// kempner(10) ➞ 5

// 1! = 1 % 10 > 0
// 2! = 2 % 10 > 0
// 3! = 6 % 10 > 0
// 4! = 24 % 10 > 0
// 5! = 120 % 10 === 0
// A Kempner Function applied to a prime will always return the prime itself.

// console.log(kempner(2))// ➞ 2
// console.log(kempner(5))// ➞ 5
// Given an integer n, implement a Kempner Function.

// Examples
// console.log(kempner(6))// ➞ 3

// console.log(kempner(10))// ➞ 5

// console.log(kempner(2))// ➞ 2
// Notes
// Try to solve this using a recursive method, with an approach oriented to higher order functions.
function kempner(n) {}

// Palindrome Descendant
// A number may not be a palindrome, but its descendant can be. A number's direct child is created by summing each pair of adjacent digits to create the digits of the next number.

// For instance, 123312 is not a palindrome, but its next child 363 is, where: 3 = 1 + 2; 6 = 3 + 3; 3 = 1 + 2.

// Create a function that returns true if the number itself is a palindrome or any of its descendants down to 2 digits (a 1-digit number is trivially a palindrome).

// Examples
// palindromedescendant(11211230) ➞ true
// // 11211230 ➞ 2333 ➞ 56 ➞ 11

// palindromeDescendant(13001120) ➞ true
// // 13001120 ➞ 4022 ➞ 44

// palindromeDescendant(23336014) ➞ true
// // 23336014 ➞ 5665

// palindromeDescendant(11) ➞ true
// // Number itself is a palindrome.
// Notes
// Numbers will always have an even number of digits.
function palindromeDescendant(num) {}

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  //your code here
}

// console.log(rot13("test")) //➞ grfg
// console.log(rot13("Test")) //➞ Grfg

// Word a10n (abbreviation)
// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string) {}

// console.log(abbreviate("internationalization"))// => "i18n"
// console.log(abbreviate("accessibility"))// => "a11y"
// console.log(abbreviate("Accessibility"))// => "A11y"
// console.log(abbreviate("elephant-ride"))// => "e6t-r2e"

// Points on Rectangle Bounds
// Given an array of 2D points [x, y], create a function that returns true if those points can be on the bounds of a rectangle, false otherwise.

// Examples
// onRectangleBounds([[0, 1], [1, 0], [1, 1], [0, 0]]) ➞ true
// onRectangleBounds([[0, 1], [1, 0], [1, 1], [0.5, 0.5]]) ➞ false
// onRectangleBounds([[0, 1], [10, 0], [10, 1]]) ➞ true
// onRectangleBounds([[0, 1]]) ➞ true

// Note: Only rectangles with sides parallel to x-axis and y-axis will be considered.

function onRectangleBounds(points) {}

// console.log(onRectangleBounds([[0, 1]]))//, true, 'A point alone can be on the boundary of any rectangle'
// console.log(onRectangleBounds([[0, 1], [2, 3]]))// true
// console.log(onRectangleBounds([[0, 1], [2, 3], [0, 5]]))// true
// console.log(onRectangleBounds([[0, 1], [2, 3], [4, 5]]))// false
// console.log(onRectangleBounds([[0, 1], [2, 3], [4, 5], [6, 7]]))// false
// console.log(onRectangleBounds([[1.94, 0.0], [1.92, 0.0], [1.99, 0.0],[1.85,0.0],[0.56,0.0],[0.42,0.0],[0.35,0.0],[1.37,0.0],[0.91,0.0],[1.39,0.0],[0.02,0.0],[1.78,0.0],[1.63,0.0],[0.93,0.0],[1.92,0.0],[1.32,0.0],[0.73,0.0],[1.87,0.0],[1.48,0.0],[0.12,0.0]]))// true
// console.log(onRectangleBounds([[2.0,-0.16],[2.0,-0.65],[2.0,1.0],[2.0,-0.43],[2.0,-0.84],[2.0,-0.15],[2.0,-0.29],[2.0,0.86],[2.0,0.89],[2.0,-0.17],[2.0,-0.69],[2.0,-0.95],[2.0,0.76],[2.0,-0.45],[2.0,0.8],[2.0,0.19],[2.0,-0.87],[2.0,-0.05],[2.0,-0.24],[2.0,0.95]]))// true
// console.log(onRectangleBounds([[0.6,0.94],[0.74,1.18],[1.22,2.04],[1.1,1.21],[1.48,2.58],[0.19,3.78],[0.29,3.87],[0.9,1.4],[0.33,0.36],[0.49,2.67],[0.74,2.5],[1.87,3.64],[0.47,1.83],[1.39,3.89],[0.57,0.11],[1.75,1.07],[1.78,1.81],[1.9,2.51],[1.65,3.65],[0.05,3.78]]))// false
// console.log(onRectangleBounds([[-1.12,-1.0],[-1.4,-1.0],[-0.97,-1.0],[-0.97,-1.0],[-1.61,-1.0],[-0.22,3.0],[-0.97,3.0],[-0.02,3.0],[-1.06,3.0],[-1.2,3.0],[-2.0,2.71],[-2.0,0.51],[-2.0,1.34],[-2.0,-0.84],[-2.0,-0.22],[2.0,3.28],[2.0,4.45],[2.0,3.79],[2.0,4.51],[2.0,4.77]]))// false
// console.log(onRectangleBounds([[-1.01,-1.0],[-1.22,-1.0],[-1.44,-1.0],[-0.89,-1.0],[-0.1,-1.0],[-0.94,3.0],[-1.65,3.0],[-1.21,3.0],[-0.63,3.0],[-1.16,3.0],[-2.0,-0.57],[-2.0,-0.26],[-2.0,-0.27],[-2.0,-0.57],[-2.0,1.55],[2.0,2.79],[2.0,2.75],[2.0,2.85],[2.0,2.49],[2.0,2.73]]))// true
// console.log(onRectangleBounds([[1.66,0.66],[0.02,-0.98],[0.87,-0.13],[1.87,0.87],[1.44,0.44],[0.19,-0.81],[1.92,0.92],[0.84,-0.16],[0.71,-0.29],[0.31,-0.69],[1.25,0.25],[0.76,-0.24],[0.58,-0.42],[0.53,-0.47],[0.37,-0.63],[0.04,-0.96],[0.71,-0.29],[1.68,0.68],[0.82,-0.18],[1.94,0.94]]))// false
// console.log(onRectangleBounds([[0.19,-0.81],[1.89,0.89],[1.17,0.17],[1.82,0.82],[1.84,0.84],[1.74,0.74],[1.92,0.92],[0.09,-0.91],[1.66,0.66],[1.83,0.83],[0.29,-0.71],[0.84,-0.16],[1.95,0.95],[1.68,0.68],[0.56,-0.44],[1.97,0.97],[1.09,0.09],[0.23,-0.77],[1.13,0.13],[1.24,0.24],[-1.03,1.03],[-0.74,0.74],[-0.39,0.39],[-0.04,0.04],[-1.24,1.24],[-0.91,0.91],[-0.94,0.94],[-0.68,0.68],[-1.51,1.51],[-1.96,1.96],[-0.34,0.34],[-1.75,1.75],[-1.53,1.53],[-0.66,0.66],[-1.28,1.28],[-0.68,0.68],[-1.47,1.47],[-0.36,0.36],[-0.38,0.38],[-0.48,0.48]]))// false
// console.log(onRectangleBounds([[2.69,-1.0],[0.95,-1.0],[3.68,-1.0],[-0.79,-1.0],[2.42,-1.0],[1.85,-1.0],[-0.3,-1.0],[-0.25,-1.0],[3.51,-1.0],[0.83,-1.0],[1.45,-1.0],[1.13,-1.0],[1.74,-1.0],[0.08,-1.0],[2.33,-1.0],[0.31,-1.0],[1.89,-1.0],[2.24,-1.0],[-1.94,-1.0],[-1.19,-1.0],[1.49,3.0],[0.28,3.0],[0.12,3.0],[-1.97,3.0],[1.94,3.0],[-0.96,3.0],[-1.74,3.0],[-1.59,3.0],[0.19,3.0],[-1.33,3.0],[0.53,3.0],[0.12,3.0],[0.83,3.0],[0.42,3.0],[-0.13,3.0],[1.41,3.0],[-1.65,3.0],[0.93,3.0],[0.75,3.0],[-0.21,3.0],[-2.0,1.52],[-2.0,0.75],[-2.0,2.96],[-2.0,1.5],[-2.0,2.35],[-2.0,0.11],[-2.0,0.42],[-2.0,-0.42],[-2.0,-0.03],[-2.0,1.7],[-2.0,0.05],[-2.0,0.76],[-2.0,1.56],[-2.0,1.51],[-2.0,2.22],[-2.0,2.82],[-2.0,0.65],[-2.0,2.73],[-2.0,1.44],[-2.0,-0.51],[2.0,1.01],[2.0,-0.7],[2.0,0.7],[2.0,1.35],[2.0,2.84],[2.0,-0.02],[2.0,0.3],[2.0,-0.81],[2.0,1.66],[2.0,0.9],[2.0,2.3],[2.0,-0.12],[2.0,-0.77],[2.0,0.64],[2.0,-0.35],[2.0,0.54],[2.0,-0.08],[2.0,2.05],[2.0,1.03],[2.0,-0.17]]))// false
// console.log(onRectangleBounds([[-0.08,-1.0],[0.37,-1.0],[0.56,-1.0],[-1.32,-1.0],[-1.76,-1.0],[0.56,-1.0],[0.6,-1.0],[1.94,-1.0],[-0.42,-1.0],[1.66,-1.0],[0.9,-1.0],[0.79,-1.0],[0.24,-1.0],[1.13,-1.0],[-1.89,-1.0],[-0.6,-1.0],[1.5,-1.0],[-1.34,-1.0],[-0.95,-1.0],[1.96,-1.0],[1.17,3.0],[-0.87,3.0],[-0.45,3.0],[1.82,3.0],[-0.5,3.0],[0.56,3.0],[-1.95,3.0],[1.42,3.0],[0.98,3.0],[0.24,3.0],[-0.41,3.0],[1.32,3.0],[1.48,3.0],[-0.5,3.0],[0.64,3.0],[-1.63,3.0],[-0.23,3.0],[0.62,3.0],[-0.58,3.0],[-1.37,3.0],[-2.0,1.06],[-2.0,1.24],[-2.0,2.31],[-2.0,-0.6],[-2.0,0.75],[-2.0,1.33],[-2.0,-0.49],[-2.0,-0.87],[-2.0,-0.56],[-2.0,0.1],[-2.0,2.4],[-2.0,-0.65],[-2.0,1.36],[-2.0,2.1],[-2.0,-0.53],[-2.0,1.53],[-2.0,0.9],[-2.0,2.67],[-2.0,1.67],[-2.0,0.02],[2.0,-0.67],[2.0,2.48],[2.0,-0.77],[2.0,-0.99],[2.0,-0.53],[2.0,2.88],[2.0,1.13],[2.0,0.73],[2.0,1.93],[2.0,-0.93],[2.0,0.53],[2.0,0.29],[2.0,2.99],[2.0,0.12],[2.0,0.08],[2.0,-0.77],[2.0,2.44],[2.0,-0.74],[2.0,1.07],[2.0,0.67]]))// true
// console.log(onRectangleBounds([[-0.64,-1.0],[-1.4,-1.0],[-1.51,-1.0],[-1.64,-1.0],[-1.34,-1.0],[-1.78,-1.0],[-1.96,-1.0],[-0.97,-1.0],[-0.46,-1.0],[-1.51,-1.0],[-0.63,-1.0],[-1.86,-1.0],[-0.85,-1.0],[-0.15,-1.0],[-1.49,-1.0],[-1.52,-1.0],[-1.3,-1.0],[-1.85,-1.0],[-0.21,-1.0],[-0.92,-1.0],[1.56,3.0],[-1.62,3.0],[0.93,3.0],[-1.23,3.0],[0.77,3.0],[-1.59,3.0],[-1.46,3.0],[-0.85,3.0],[0.28,3.0],[1.32,3.0],[0.29,3.0],[-0.37,3.0],[-1.2,3.0],[-1.03,3.0],[1.4,3.0],[-0.8,3.0],[1.87,3.0],[-0.79,3.0],[0.53,3.0],[1.2,3.0],[-2.0,-0.51],[-2.0,0.11],[-2.0,0.55],[-2.0,0.02],[-2.0,1.83],[-2.0,1.69],[-2.0,2.16],[-2.0,1.54],[-2.0,0.91],[-2.0,0.77],[-2.0,2.05],[-2.0,0.14],[-2.0,1.42],[-2.0,1.76],[-2.0,0.59],[-2.0,-0.14],[-2.0,1.65],[-2.0,1.03],[-2.0,0.13],[-2.0,0.57],[2.0,2.59],[2.0,2.77],[2.0,2.84],[2.0,2.01],[2.0,2.54],[2.0,2.4],[2.0,2.92],[2.0,2.8],[2.0,2.63],[2.0,2.28],[2.0,2.37],[2.0,2.89],[2.0,2.68],[2.0,2.28],[2.0,2.4],[2.0,2.77],[2.0,2.78],[2.0,2.55],[2.0,2.61],[2.0,2.94]]))//, true
// console.log(onRectangleBounds([[-1.18,-1.0],[2.12,-1.0],[2.48,-1.0],[3.01,-1.0],[2.85,-1.0],[-0.62,-1.0],[0.38,-1.0],[2.12,-1.0],[3.42,-1.0],[1.2,-1.0],[1.72,-1.0],[2.33,-1.0],[2.27,-1.0],[0.23,-1.0],[1.23,-1.0],[3.91,-1.0],[2.3,-1.0],[1.29,-1.0],[-0.64,-1.0],[-0.4,-1.0],[0.49,3.0],[1.44,3.0],[0.19,3.0],[1.35,3.0],[-0.95,3.0],[-1.49,3.0],[0.17,3.0],[0.31,3.0],[0.9,3.0],[1.25,3.0],[-0.31,3.0],[-1.58,3.0],[-1.31,3.0],[0.54,3.0],[1.14,3.0],[-1.35,3.0],[-0.38,3.0],[0.55,3.0],[0.94,3.0],[-1.88,3.0],[-2.0,2.7],[-2.0,2.89],[-2.0,2.39],[-2.0,2.02],[-2.0,-0.85],[-2.0,1.61],[-2.0,-0.3],[-2.0,1.39],[-2.0,-0.59],[-2.0,0.58],[-2.0,2.6],[-2.0,1.54],[-2.0,-0.18],[-2.0,-0.8],[-2.0,0.82],[-2.0,1.07],[-2.0,0.65],[-2.0,2.67],[-2.0,2.72],[-2.0,2.39],[2.0,-0.97],[2.0,-0.19],[2.0,-1.73],[2.0,-1.89],[2.0,-1.57],[2.0,-0.8],[2.0,-0.43],[2.0,-0.26],[2.0,0.33],[2.0,-2.38],[2.0,0.87],[2.0,-1.46],[2.0,-0.55],[2.0,-2.32],[2.0,-2.09],[2.0,0.51],[2.0,-1.88],[2.0,-0.91],[2.0,0.89],[2.0,-1.27]])// false
// console.log(onRectangleBounds([[-1.06,-1.0],[-0.9,-1.0],[-1.16,-1.0],[-0.78,-1.0],[-0.15,-1.0],[-0.76,-1.0],[-1.23,-1.0],[-1.55,-1.0],[-0.91,-1.0],[-1.62,-1.0],[-1.02,-1.0],[-0.88,-1.0],[-0.57,-1.0],[-2.0,-1.0],[-0.11,-1.0],[-1.57,-1.0],[-1.05,-1.0],[-1.52,-1.0],[-0.86,-1.0],[-0.87,-1.0],[1.75,3.0],[-0.91,3.0],[1.14,3.0],[-1.09,3.0],[0.53,3.0],[0.82,3.0],[-1.51,3.0],[1.28,3.0],[1.41,3.0],[0.89,3.0],[-0.46,3.0],[-1.92,3.0],[-1.67,3.0],[-1.83,3.0],[1.02,3.0],[1.79,3.0],[-0.1,3.0],[-0.56,3.0],[-0.27,3.0],[0.56,3.0],[-2.0,-0.5],[-2.0,-0.19],[-2.0,2.95],[-2.0,2.28],[-2.0,1.05],[-2.0,0.78],[-2.0,1.07],[-2.0,-0.57],[-2.0,2.4],[-2.0,-0.01],[-2.0,-0.15],[-2.0,0.06],[-2.0,0.93],[-2.0,0.36],[-2.0,0.64],[-2.0,2.28],[-2.0,-0.97],[-2.0,0.53],[-2.0,-0.94],[-2.0,-0.23],[2.0,2.88],[2.0,1.85],[2.0,-0.77],[2.0,1.55],[2.0,0.65],[2.0,2.25],[2.0,0.45],[2.0,1.13],[2.0,0.45],[2.0,-0.86],[2.0,2.04],[2.0,0.72],[2.0,2.17],[2.0,-0.78],[2.0,0.6],[2.0,-0.28],[2.0,2.28],[2.0,2.77],[2.0,1.06],[2.0,2.26]])// true
// console.log(onRectangleBounds([[-0.52,-1.0],[-0.26,-1.0],[-0.13,-1.0],[-0.51,-1.0],[-0.17,-1.0],[-1.88,-1.0],[-0.99,-1.0],[-0.43,-1.0],[-0.04,-1.0],[-1.13,-1.0],[-0.76,-1.0],[-0.91,-1.0],[-0.13,-1.0],[-0.3,-1.0],[-1.83,-1.0],[-0.57,-1.0],[-1.65,-1.0],[-1.09,-1.0],[-0.27,-1.0],[-1.73,-1.0],[-0.26,3.0],[-0.9,3.0],[-1.61,3.0],[-0.72,3.0],[-0.11,3.0],[-1.95,3.0],[-0.62,3.0],[-1.19,3.0],[-0.75,3.0],[-0.4,3.0],[-1.59,3.0],[-0.44,3.0],[-0.32,3.0],[-0.22,3.0],[-1.69,3.0],[-1.71,3.0],[-0.58,3.0],[-1.15,3.0],[-1.32,3.0],[-0.07,3.0],[-2.0,-0.41],[-2.0,0.83],[-2.0,1.27],[-2.0,2.45],[-2.0,1.85],[-2.0,-0.71],[-2.0,2.72],[-2.0,0.15],[-2.0,2.49],[-2.0,2.69],[-2.0,0.49],[-2.0,0.91],[-2.0,0.11],[-2.0,1.54],[-2.0,-0.48],[-2.0,0.13],[-2.0,2.79],[-2.0,2.66],[-2.0,-0.49],[-2.0,1.18],[2.0,2.36],[2.0,2.41],[2.0,2.1],[2.0,2.98],[2.0,2.48],[2.0,2.11],[2.0,2.61],[2.0,2.52],[2.0,2.88],[2.0,2.01],[2.0,2.41],[2.0,2.22],[2.0,2.16],[2.0,2.14],[2.0,2.46],[2.0,2.99],[2.0,2.92],[2.0,2.75],[2.0,2.65],[2.0,2.57]])) //true

// Write a function stringCase that takes a string with mixed uppercase and lowercase characters and
//   return the string in either all uppercase or all lowercase depending on which letter case the
//   string has more of. If the string has equal upper and lower case characters, convert the string
//   to all lowercase. Do not include any loops, native methods (exception: toLowerCase() & toUpperCase() allowed) or the length property.
// Ex:
// console.log(stringCase('coDe'))// --> 'code'
// console.log(stringCase('CODe'))// --> 'CODE'
// console.log(stringCase('coDE'))// --> 'code'

function stringCase(str) {}

// String Formatting:
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Examples: 
  16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function digitalRoot(n) {}

// console.log(digitalRoot(456)); // 6
// console.log(digitalRoot(16)); // 7

// Find all even length binary sequences with same sum of first and second half bits
// Given a number n, find all binary sequences of length 2n such that sum of first n bits is same as sum of last n bits.

// Examples:

// Input:  N = 2
// Output:
// 0101 1111 1001 0110 0000 1010

// Input:  N = 3
// Output:
// 011011 001001 011101 010001 101011 111111
// 110011 101101 100001 110101 001010 011110
// 010010 001100 000000 010100 101110 100010
// 110110 100100
function bits4Bytes(N) {}

// 1) declare a variable called "numArr" which is an array containing the numbers 1, 2, and 3. then print it to the console
let numArr = [1, 2, 3];
//  console.log(numArr);

// 2) define a function "multiplyBy2" that takes one number, multiplies it by 2, and returns that values

function multiplyBy2(num) {
  return num * 2;
}
// console.log(multiplyBy2(2)) // 4

// 3) define a function "distanceFrom10" that takes one number and returns its distance from 10. the output should be >= 0 (e.g. passing 8 or 12 should both return a positive 2)

function distanceFrom10(num) {
  return num - 10 < 0 ? (num - 10) * -1 : num - 10;
}
// console.log(distanceFrom10(10)) //0
// console.log(distanceFrom10(12)) //2
// console.log(distanceFrom10(8)) //2

// 4) define a function "map" which takes two arguments, an array and a callback function. "map" will iterate/loop through the array and pass each array element to the callback as an argument. Each output from the callback is pushed to a new array. "map" will return this new array. Please do not use the native .map() method.
//init result array
//iterate through input array
//push into result array: callback(currentElement)
//return result
function map(array, callback) {}

// 5) use your "map" to find the distance from 10 of each number in numArr
// console.log(map(numArr, distanceFrom10))

// 6) define a function called "every" which takes two arguments, an array and a callback function. this callback can be considered a "test", as it will return true or false. "every" will iterate/loop through the array and pass each array element to the callback as an argument. if all outputs from the callback/test are "true", every will return true. if any of the outputs is "false", every will return false. Please do not use the native .every() method.

function every(array, callback) {}

// 7) use your "every" to determine if every number in numArr is greater than 0. Then, run a second test with the array [1, -2, 3]
// console.log(every(numArr, (num) => num > 0))

// 8) refactor your "every" function so that it uses the built-in "reduce" method.
function every(array, callback) {}

function greaterThan0(num) {}
// console.log(every(numArr, greaterThan0)); //true
// console.log(every([1, -2, 3], greaterThan0)); //false

// function string_recurse(active, rest) {
//     if (rest.length == 0) {
//         console.log(active);
//     } else {
//         string_recurse(active + rest[0], rest.substring(1, rest.length));
//         string_recurse(active, rest.substring(1, rest.length));
//     }
// }
// string_recurse("", "abc");

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
