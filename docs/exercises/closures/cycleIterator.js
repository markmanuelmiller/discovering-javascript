/*
Create a function cycleIterator that accepts an array, and returns a function. 
The returned function will accept zero arguments. When first invoked, the returned 
function will return the first element of the array. When invoked a second time, 
the returned function will return the second element of the array, and so forth. 
After returning the last element of the array, the next invocation will return the 
first element of the array again, and continue on with the second after that, and 
so forth.
*/

// ADD CODE HERE
function cycleIterator(array) {
  let counter = 0;
  return function () {
    if (counter >= array.length) {
      counter = 0;
    }
    return array[counter++];
  };
}
// Uncomment these to check your work!
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
