/*
Write a function that takes an input character and returns that character 
repeated 5 times using recursion. For example, if the input is 'g', then 
the output should be 'ggggg'.
*/

function repeater(char) {
  if (char.length === 5) {
    return char;
  }
  let str = char + char[0];
  return repeater(str);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater("g"));
console.log(repeater("j"));
