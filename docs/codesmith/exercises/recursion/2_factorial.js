/*
Write a function that returns the factorial of a number.

EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
*/

function factorial(num, sum = 1) {
  if (num === 0) {
    return sum;
  }
  let newSum = sum * num--;
  return factorial(num, newSum);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
