/*
Write a function called limitedInterval that accepts as arguments in this order -

callback function
wait time in milliseconds
limit time in milliseconds.
limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.

*/

// Create a function, limitedInterval, that accepts a callback, a wait time, and a limit time.
//	limitedInterval should run the callback once every `wait` milliseconds, up to `limit millseconds`
function limitedInterval(callback, wait, limit) {
  const interval = setInterval(() => {
    callback();
  }, wait);

  // clear interval
  setTimeout(() => {
    clearInterval(interval);
  }, limit);
}
// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log("repeating"), 100, 550); // should log 'repeating' once per 100 ms, five times.
