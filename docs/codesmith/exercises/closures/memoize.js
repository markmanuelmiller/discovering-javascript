// Attempt 1

function memoize(callback) {
  let cache = {};

  return function (...args) {
    let a = JSON.stringify(...args);
    console.log(a);
    if (!cache.hasOwnProperty(callback)) {
      cache[callback + a] = callback(...args);
    }
    return cache[callback + a];
  };
}

function someBigJob(int) {
  return 100 + int;
}

function anotherBigJob(int) {
  return 200 + int;
}

let mem = memoize(someBigJob);
let bigJob = mem(100);
let bigJob2 = mem(200);
let bigJob3 = mem(200);

console.log(bigJob);
console.log(bigJob2);
