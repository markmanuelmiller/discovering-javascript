// Example 1
// function sync(callback) {
//   setTimeout(function() {
//     var res = deferred();
//     callback(res);
//   }, 1000);
// }
//
// function deferred() {
//   return 'deferred';
// }
//
// sync(function(result) {
//   console.log(result);
// });


// Example 2
// function getSalary(callback) {
//   setTimeout(function() {
//     callback(50000);
//   }, 1000);
// }
//
// function subtractTax(salary) {
//   return salary * 0.75;
// }
//
// function subtractRent(salary) {
//   return salary - 1800;
// }
//
// function getDisposableIncome(callback) {
//   getSalary(function(salary) {
//     salary = subtractTax(salary);
//     salary = subtractRent(salary);
//     callback(salary);
//   });
// }
//
// getDisposableIncome(function(salary) {
//   console.log(salary);
// });


// Example 3
// function getSalary(callback) {
//   setTimeout(function() {
//     callback(50000);
//   }, 1000);
// }
//
// function subtractTax(salary, callback) {
//   setTimeout(function() {
//     callback(salary * 0.75);
//   }, 1000);
// }
//
// function subtractRent(salary, callback) {
//   setTimeout(function() {
//     callback(salary - 1800);
//   }, 1000);
// }
//
// function getDisposableIncome(callback) {
//   getSalary(function(salary1) {
//     subtractTax(salary1, function(salary2) {
//       subtractRent(salary2, function(salary3) {
//         callback(salary3);
//       });
//     });
//   });
// }
//
// getDisposableIncome(function(disposable) {
//   console.log(disposable);
// });


// Example 4 - Promises
// function getSalary() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(50000);
//     }, 1000);
//   });
// }
//
// function subtractTax(salary) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(salary * 0.75);
//     }, 1000);
//   });
// }
//
// function subtractRent(salary) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(salary - 1800);
//     }, 1000);
//   });
// }
//
// function getDisposableIncome(callback) {
//   var salaryPromise = getSalary();
//   var taxPromise = salaryPromise.then(function(salary1) {
//     return subtractTax(salary1);
//   });
//   var rentPromise = taxPromise.then(function(salary2) {
//     return subtractRent(salary2);
//   });
//   return rentPromise;
// }
//
// getDisposableIncome().then(function(disposable) {
//   console.log(disposable);
// });


// Example 5 - Promises Chained
function getSalary() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(50000);
    }, 1000);
  });
}

function subtractTax(salary) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(salary * 0.75);
    }, 1000);
  });
}

function subtractRent(salary) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(salary - 1800);
    }, 1000);
  });
}

function getDisposableIncome(callback) {
  return getSalary().then(subtractTax).then(subtractRent);
}

getDisposableIncome().then(function(disposable) {
  console.log(disposable);
});
