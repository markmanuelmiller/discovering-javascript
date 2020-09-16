# Object Oriented Programming

Fundamental goal in OOP: data and functionality right next to each other.

How to create new objects?

## Solution 1

...

## Solution 2

```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Mark", 2);
user1.increment();
```

Reasons why above shouldn't be used (it used to be the way)

- Global variables are not a good best-practice

## `new`

- Using `new` before the invocation of a function, JS will automate 2 major processes.
  1. The return of the object is automatically done (don't need to write `return newUser`)
  1. The creation of the object itself

## Solution 3

```js
// userCreator is a function AND an object
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment: function () {
  this.score++;
};

userCreator.prototype.login: function () {
  console.log("Logged in");
};

const user1 = new UserCreator("Will", 3);
const user2 = new UserCreator("Mark", 2);
user1.increment();
```

This is preferred over solution 2.

1. Declare a new function in global memory with the label UserCreator (it also is an object)
   - The UserCreator has an object which also has a prototype property that is an object
1. Create a new method on the UserCreator prototype object with the label of increment (it sees the `.` and knows it's trying to access the object of the function)
1. Create a new method on the UserCreator prototype object with the label of login
1. Create a new constant in global memory named user1 and assign it the returned value from executing new UserCreator
1. Create a new local execution context and push UserCreator on the call stack
1. Resolve our parameters as arguments. Name gets assigned the string of Eva and score gets assigned the integer 9.
1. JavaScript creates a new object called `this` in local memory
1. The new `this` object has a property, `__proto__`, which points to the prototype object of the object form of the function UserCreator that we're currently executing.
1. Set the name property inside of the this object, which will be assigned a string of "Eva".
1. Set the score property inside of the this object, which will be assigned an integer of 9
1. `this` object gets returned automatically by JavaScript, and will be stored in `user1` in global memory.
1. Invoke the increment method on the UserCreator prototype by following the **proto** on user1.
1. Create a new local execution context
1. `this.score++` - `this` equals the object to the left of the dot. `this` gets resolved to `user1`.
1. JavaScript looks for user1.score++ in local memory and it does not find user1
1. JS then looks in global memory and finds user1 there. It looks for a score property on user1 object and increments it from 9 to 10.

## `class`

- ECMAScript 6
- Syntactic sugar ontop of solution 3

## Solution 4

```js
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();
```

- When we invoke this class, we execute everything in the `constructor`
- Everything outside of the constructor but inside the class, (increment, login), JS automatically grabs it and sticks it in the prototype of `UserCreator`

### Benefits

- Emerging as the new standard
- Feels more like style of other languages (e.g. Python)

## \_\_proto\_\_

## prototype

- `prototype` is an object
