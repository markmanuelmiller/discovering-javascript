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

## Promises


----------------------------------
