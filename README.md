# Discovering JavaScript

1. [JavaScript Snippets](docs/javascript_snippets.md)
1. [JavaScript Resources](docs/resources.md)

## Definitions

### Syntax Parser
> A program that reads your code and determines what it does and if its grammar is valid.

Your code isn't magic. Someone else wrote a program to translate it for the computer.

### Lexical Environment
> Where something sits physically in the code you write

'Lexical' means 'having to do with the words or grammar'. A lexical environment exists in programming languages in which where you write something is important.

### Execution Context
> A wrapper to help manage the code that is running

There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

### Invocation
> Running a function

In JavaScript, using parenthesis ()



## Concepts
### Execution Context

- There are 2 phases in JavaScript's execution context
    1. Compilation phase
    1. Execution phase
- During the first pass, compilation, all variables are set to undefined
- Don't set variables to 'undefined'. Will help in debugging.

---------------------------------------

### By Reference or By Value
Short answer: both

Long answer:
- Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number
- Javascript has 3 data types that are passed by reference: Array, Function, and Object

> [Source](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)


#### By Reference
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

#### By Value
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

### `this`

Rules

1. If the `new` keyword is used when calling the function, this inside the function is a brand new object.
```js
function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}
new ConstructorExample();
// -> {}
// -> { value: 10 }
```

2. If `apply`, `call`, or `bind` are used to call a function, `this` inside the function is the object that is passed in as the argument.
```js
function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
fn.call(obj);  // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }
```

3. If a function is called as a method — that is, if dot notation is used to invoke the function — `this` is the object that the function is a property of. In other words, when a dot is to the left of a function invocation, `this` is the object to the left of the dot. (ƒ symbolizes function in the code blocks)
```js
var obj = {
    value: 5,
    printThis: function() {
        console.log(this);
    }
};
obj.printThis(); // -> { value: 5, printThis: ƒ }
```

4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it’s window.
```js
function fn() {
    console.log(this);
}
// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}
```
> Note that this rule is the same as rule 3 — the difference is that a function that is not declared as a method automatically becomes a property of the global object, `window`. This is therefore an implicit method invocation. When we call `fn()`, it’s interpreted as `window.fn()`, so this is `window`.

5. If multiple of the above rules apply, the rule that is higher wins and will set the this value.

6. If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it’s created. To determine this, go one line above the arrow function’s creation and see what the value of this is there. It will be the same in the arrow function.

---

### `new`


---

### `prototype`

---

### *Not defined* versus *undefined*
```js
console.log(a); // Uncaught ReferenceError: a is not defined
```

```js
var a;
console.log(a); // undefined
```
> a has been assigned memory with a value of undefined

---

### 2 Phases in action
```js
function b() {
  console.log('called b!');
}
b();
console.log(a); // undefined
var a = 'Hello world';
console.log(a); // Hello world
```


```js
var foo = 'bar';
function bar() {
  console.log(foo); // undefined => what???
  var foo = 'baz';
  console.log(foo); // baz
}
function baz(foo) {
  foo = 'bam';
  bam = 'yay';
}
```

> Why is line 9 undefined? This is because during the compilation phase,
the compiler asks bar scope if it's heard of foo. The answer is yes, but
it has not yet been defined in bar's scope since that happens on line 10  .

---

```js

var foo = 'bar';
function bar() {
  var foo = 'baz';
  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bar();
foo;    // bar
bam;    // yay
baz();  // reference error

```

> If line 38 were on line 35, it would be undefined?


---

## Exploring Objects
Objects may contain:
- Primitives (property)
- Objects (property)
- Functions (method)

![Objects](assets/images/objects1.png)

When JavaScript creates an object...
```js

```

---

## Conversations
a) Compiler
b) ...

```js
var foo = "bar";
function bar() {
  var foo = "baz";
}
function baz(foo) {
  foo = "bam";
  bam = "yay";
}
```

1. Compiler: "Hey Global Scope manager, I've found a "
