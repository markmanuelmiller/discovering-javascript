# Snippets


## Check Existence of Function Parameters
```js
function someFunction(parm1, parm2, parm3) {
    if(typeof parm1 !== 'undefined') {
        // parm1 exists
    }
}
```
> This is recommended over `if(parm1 !== undefined){}`

----------------------------------
## By Reference or By Value
Short answer: both

Long answer:
- Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number
- Javascript has 3 data types that are passed by reference: Array, Function, and Object

### By Reference
Example 1
```js
function doSomething() {
  var arr = [1,2,3,4,5];  
  doSomethingElse(arr);
  console.log(arr); // 1,2,3,4,5,6
}

function doSomethingElse(arr) {
  arr.push(6);
  return false;
}

doSomething();
```

Example 2:
```js
function changeAgeImpure(person) {
    person.age = 25;
    return person;
}
var alex = {
    name: 'Alex',
    age: 30
};
var changedAlex = changeAgeImpure(alex);
console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }
```

### By Value
```js
var x = 10;
var y = 'abc';
var a = x;
var b = y;
a = 5;
b = 'def';
console.log(x, y, a, b); // -> 10, 'abc', 5, 'def'
```

----------------------------------

## Performant `for` Loop

----------------------------------

## Prototype

----------------------------------

## `new`

----------------------------------

## Callbacks & Promises

Example 1
```js
function sync(callback) {
  setTimeout(function() {
    var res = deferred();
    callback(res);
  }, 1000);
}
function deferred() {
  return 'deferred';
}
sync(function(result) {
  console.log(result);
});
```

Example 2 - Simple Callback
```js
function getSalary(callback) {
  setTimeout(function() {
    callback(50000);
  }, 1000);
}

function subtractTax(salary) {
  return salary * 0.75;
}

function subtractRent(salary) {
  return salary - 1800;
}

function getDisposableIncome(callback) {
  getSalary(function(salary) {
    salary = subtractTax(salary);
    salary = subtractRent(salary);
    callback(salary);
  });
}

getDisposableIncome(function(salary) {
  console.log(salary);
});
```

Example 3 - Callback Hell
```js
function getSalary(callback) {
  setTimeout(function() {
    callback(50000);
  }, 1000);
}

function subtractTax(salary, callback) {
  setTimeout(function() {
    callback(salary * 0.75);
  }, 1000);
}

function subtractRent(salary, callback) {
  setTimeout(function() {
    callback(salary - 1800);
  }, 1000);
}

function getDisposableIncome(callback) {
  getSalary(function(salary1) {
    subtractTax(salary1, function(salary2) {
      subtractRent(salary2, function(salary3) {
        callback(salary3);
      });
    });
  });
}

getDisposableIncome(function(disposable) {
  console.log(disposable);
});
```

Example 4 - Promises
```js
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
  var salaryPromise = getSalary();
  var taxPromise = salaryPromise.then(function(salary1) {
    return subtractTax(salary1);
  });
  var rentPromise = taxPromise.then(function(salary2) {
    return subtractRent(salary2);
  });
  return rentPromise;
}

getDisposableIncome().then(function(disposable) {
  console.log(disposable);
});
```

Example 5 - Promises Chained
```js
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
```

----------------------------------

## Promises

```js
var promiseToCleanRoom = new Promise(function(resolve, reject) {
  // do work
  var isClean = true;
  if(isClean) {
    resolve('Clean');
  } else {
    reject('not Clean');
  }
});

promiseToCleanRoom.then(function(fromResolve) {
  console.log('the room is ' + fromResolve);
}).catch(function(fromReject) {
  console.log('the room is ' + fromReject);
})
```

----------------------------------

## Working with Arrays
### `forEach`


### `map`


### `reduce`

----------------------------------

----------------------------------


----------------------------------
