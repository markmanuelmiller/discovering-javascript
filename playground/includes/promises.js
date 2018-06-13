// Example 1
var promiseToCleanRoom = new Promise(function(resolve, reject) {
  window.setTimeout(function() {
    console.log('work is done');
    var isClean = true;
    if(isClean) {
      resolve('clean');
    } else {
      reject('not clean');
    }
  }, 3000);

});

promiseToCleanRoom.then(function(fromResolve) {
  console.log('the room is ' + fromResolve);
}).catch(function(fromReject) {
  console.log('the room is ' + fromReject);
})


// Example 2
var cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned the room');
  });
};

var removeGarbage = function(msg) {
  return new Promise(function(resolve, reject) {
    resolve(msg + ' remove garbage');
  });
};

var winIceCream = function(msg) {
  return new Promise(function(resolve, reject) {
    resolve(msg + ' won icecream');
  });
};
cleanRoom().then(function(result) {
  return removeGarbage(result);
}).then(function(result) {
  return winIceCream(result);
}).then(function(result) {
  console.log('Finished ' + result);
})
