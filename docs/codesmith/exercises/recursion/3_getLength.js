/*
Get the length of an array using recursion without accessing its length property.
*/

function getLength(array, len = 0) {
  if (!array[0]) {
    return len;
  }
  len++;
  const newArray = array.concat();
  newArray.pop();
  return getLength(newArray, len);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
