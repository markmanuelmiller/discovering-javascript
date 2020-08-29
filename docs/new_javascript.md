# Next Generation JavaScript

### let and const

ECMAScript 6 (ES6/ES2015) introduced the let and const keywords that support the declaration of block scope local variables. This means the variable will be confined to the scope of a block that it is defined in, such as an if statement or for loop and will not be accessible outside of the opening and closing curly braces of the block. This is contrary to var declarations which are accessible outside blocks they are defined in. The difference between let and const is that a const declaration is, as the name implies, constant - a read-only reference to a value. This does not mean the value is immutable, just that the variable identifier cannot be reassigned.

#### Rules

1. don't use var anymore, because let and const are more specific
1. default to const, because it cannot be re-assigned or re-declared
1. use let when re-assigning the variable

### Shorthand Object Assignment

```js
const name = "Robin";
const user = {
  name: name,
};

// can become
const user = {
  user,
};
```

### Shorthand Method Names

```js
var userService = {
  getUserName: function (user) {
    return user.firstname + " " + user.lastname;
  },
};

// can become
const userService = {
  getUserName(user) {
    return user.firstname + " " + user.lastname;
  },
};
```

### Computed Property Names

```js
var user = {
  name: "Robin",
};

// computed key property for dynamic naming
const key = "name";
const user = {
  [key]: "Robin",
};
```

- You are able to use computed property names to allocate values by key in an object dynamically, a handy way to generate lookup tables (also called dictionaries) in JavaScript.

### Spread syntax

> Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6
console.log(sum.apply(null, numbers));
// expected output: 6

// For function calls:
myFunction(...iterableOjb);

// For array literals or strings:
[...iterableObj, "4", "five", 6];
```

### Rest parameter syntax

> Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

```js
function restFunction(a, b, ...c) {
  console.log(c); // [3, 4, 5]
}
restFunction(1, 2, 3, 4, 5);
```

### Spread?

```js
var [...a] = "hello";
console.log(a); // ["h", "e", "l", "l", "o"]
```

### Destructing assignment

- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// expected output: Array [30,40,50]

var obj = { a: 10, b: 20 };
({ a, b } = obj);
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

Object destructuring

```js
const state = { counter: 1, list: ["a", "b"] };
// no object descturing
const list = state.list;
const counter = state.counter;
// object descturing
const { list, counter } = state;
```

Destructuring in function signature

```js
// no descturing
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}

// destructuring
function Greeting({ greeting }) {
  return <h1>{greeting}</h1>;
}
```

Rest destructuring

```js
const state = { counter: 1, list: ["a", "b"] };
const { list, ...rest } = state;
console.log(rest); // {counter:1}
console.log(list); // ['a', 'b']
```

### Arrow Functions

```js
function myFunc() {}

const myFunc = () => {
  // 'this' will always keep it's context
};

// one argument
const myFunc = (name) => {
  console.log(name);
};

const myFunc = (name, age) => {
  console.log(name + " " + age);
};

const multiply = (number) => {
  return number * 2;
};

// becomes one line
const multiply = (number) => number * 2;
```

### Exports & Imports (Modules)

person.js

```js
const person = {
  name: "Max",
};

export default person;
```

utility.js

```js
export const clean = () => {...}
export const baseData = 10;
```

app.js

```js
import person from "./person.js";
import prs from "./person.js";

import { baseData } from "./utility.js";
import { clean } from ".utility.js";
```

default export

```js
import person from "./person.js";
import prs from "./person.js";
```

named export

```js
import { smth } from "./utility.js";
import { smth as Smth } from "./utility.js";
import * as bundled from "./utility.js";
```

### Classes

Blueprints for objects

```js
class Person {
  name: 'Max' // property
  call = () => { // method
    ...
  }
}

const myPerson = new Person()
myPerson.call()
console.log(myPerson.name);
```

Example

```js
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person {
  constructor() {
    super();
    this.name = "Mark";
    this.gender = "female";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
```

### Classes, Properties & Methods

```js
// ES6 Properties
constructor() {
  this.myProperty = 'value'
}

// ES7
myProperty = 'value'


// ES6 Methods
myMethod() { ... }

// ES7
myMethod = () => { ... }
```

### Classes Versus Factory Functions

Creating new objects

Classes

```js
class Dog {
  constructor() {
    this.sound = "woof";
  }
  talk() {
    console.log(this.sound);
  }
}

const sniffles = new Dog();
// sniffles.talk(); // woof

function snifflesTalks() {
  sniffles.talk();
}

//snifflesTalks(); // woof

//$('.myButton').click(sniffles.talk); // undefined

//$('.myButton').click(sniffles.talk.bind(sniffles)); // woof

$(".myButton").click(() => sniffles.talk()); // woof
```

```html
<button class="myButton">Click me</button>
```

Factory function

```js
const dog = () => {
  const sound = "woof"; // private
  return {
    talk: () => console.log(sound),
  };
};

const sniffles = dog();
sniffles.talk();
$(".myButton").click(sniffles.talk); // woof
```

```html
<button class="myButton">Click me</button>
```

In this example we never use `this`.

Factory accepting parameters

```js
var dog = (config) => {
  let height = config.height;
  let width = 50 || config.width;
  const sound = "woof";
  return {
    // closure
    talk: () => console.log(sound),
    setWidth: (w) => (width = w),
    getWidth: () => width,
  };
};

var sniffles = dog({ height: 50, width: 100 });
sniffles.talk();

$(".myButton").click(sniffles.talk);

var oscar = dog({ height: 10, width: 75 });
```

- With functions over classes, you don't need to use the `new` or `this` keywords
- Classes are faster, so if creating thousands think about classes

### Spread & Rest Operators

Whether it's spread or rest depends on where we use it

Spread: used to split up array elements OR object properties

```js
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 };
```

Rest: used to merge a list of function arguments into an array

```js
function sortArgs(...args) {
  return args.sort();
}
```

Example

```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1,2,3,4]

const person = { name: "Mark" };
const newPerson = {
  ...person,
  age: 29,
};
console.log(newPerson); // {name: 'Mark', age: 29}

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3)); // [1]
```

### Destructuring

> Easily extract array elements or object properties and store them in variables

Array Destructuring

```js
[a, b] = ["Hello", "Max"];
console.log(a); // Hello
console.log(b); // Max
```

Object Destructuring

```js
{name} = {name: 'Max', age: 28}
console.log(name) // Max
console.log(age) // undefined
```

Example

```js
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); // 1 2

[num1, , num3] = numbers;
console.log(num1, num3); // 1 3
```

### Reference and Primitive Types

```js
const number = 1;
const num2 = number;
// num2 is a copy

const person = {
  name: "Max",
};
const secondPerson = person;
person.name = "Manu";
console.log(secondPerson); // {name: 'Manu'}
// secondPerson references person; not a copy

// create new object
const secondPerson = { ...person };
```
