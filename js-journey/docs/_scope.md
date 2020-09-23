**All of this content came from https://scotch.io/tutorials/understanding-scope-in-javascript and FEM Deep JS Foundations**

# Scope

> Where to look for things

Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

Scope is setup during the first pass.

It's best practice to limit your code to only what is needed - "The Principle of Lease Access"

## 2 Types of Scopes

1. Global Scope - only 1 global scope

   - Variables in global scope can be modified from any scope (nested local scopes)

1. Local Scope - can have many local scopes

   - Variables defined inside a function are in local scope and **they have a different scope for every call of that function**

Variables defined inside a function are in local scope, while variables defined outside of a function are in the global scope. Each function when invoked, creates a new scope.

## Block Statements

Block statesments like `if`, `switch`, `for`, and `while` don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in. Except for `let` and `const`.

**`let` and `const` are block scoped!**

> Global scope lives as long as your application lives. Local scope lives as long as your functions are called and executed.

# Context

What does `this` refer to in some part of my code?

## Difference between Scope and Context

Scope referes to the visibility of variables and context referes to the value of `this` in the same scope.

We can also change the context using function methods.

If scope is in the method of an object, context will be the object the method is part of.

```js
class User {
  logName() {
    console.log(this);
  }
}

new User().logName(); // logs User {}
```

## `new` keyword

The value of context behaves differently if you call your functions using the `new` keyword. The context will then be set to the instance of the called function.

```js
function logFunction() {
  console.log(this);
}
new logFunction(); // logs logFunction {}
```

> When a function is called in strict mode, the context will default to undefined.

# Execution Context

**The word "context" in "execution context" referes to scope and not the context defined above.**

JavaScript is a single-threaded language so it can only execute a single task at a time. The rest of the tasks are queued in the execution context.

Each function call will append its context to the execution context which called it.

> Each function creates its own execution context.

Once the browser is done with the code in that context, that context will then be popped off from the EC and the state of the current context in the execution context will be transferred to the parent context. The browser always executes the execution context that is at the top of the execution stack (call stack), **which is the innermost level of scope in your code**.

## Phases of the Execution Context

### 1 - Creation Phase

Creation phase is present when a function is called but its code is not yet executed. 3 main things happen:

1. Creation of the variable object (activation object)
1. Creation of the scope chain
1. Setting the value of context (`this`)

#### Variable Object (Activation Object)

Contains all of the variables, functions, and other declarations that are defined in a particular branch of the execution context. When a function is called, the interpreter scans it for all resources including function arguments, variables, and other declarations. Everything, when packed into a single object, becomes the Variable Object

```js
variableObject: {
  arguments: {},
  variable1: undefined
  ...
}
```

#### Scope Chain

The scope chain itself contains the variable object. The scope chain is used to resolve variables. When asked to resolve a variable, JS always starts at the innermost level of the code nest and keeps jumping back to the parent scope until it finds the variable or any other resource it is looking for.

The scope chain can simply be defined as an object containing the variable object of its own execution context and all the other execution contexts of its parents (an object having a bunch of other objects).

```js
scopeChain: {
  VO: {},
  parentVO: {},
  grandparentVO: {}
  ...
}
```

#### The Execution Context Object

The execution context can be represented as an abstract object like this

```js
executionContextObject = {
  scopeChain: {},
  variableObject: {},
  this: valueOfThis,
};
```

### 2 - Execution Phase

In the second phase of the execution context, that is the code execution phase, other values are assigned and the code is finally executed.

# Lexical Scope

Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents (also referred to as static scope).

```js
function grandfather() {
  var name = "Hammad";
  // likes is not accessible here
  function parent() {
    // name is accessible here
    // likes is not accessible here
    function child() {
      // Innermost level of the scope chain
      // name is also accessible here
      var likes = "Coding";
    }
  }
}
```

# Public and Private Scope

Emulate public and private scopes using closures. To keep everything separate from the global we must first encapsulate our functions within a function like this:

```js
(function () {
  // private
})();
```

We can add functions and varaibles in it and they will not be accessible outside. But what if we want to access them outside, meaning we want some of them to be public and some of them to be private? One type of closure we can use is called the Module Pattern which allows us to scope our functions using both public and private scopes in an object.

## The Module Pattern

```js
var Module = (function () {
  function privateMethod() {
    // do something
  }
  return {
    publicMethod: function () {
      // can call privateMethod()
    },
  };
})();
```

The return statement of the Module contains our public functions. The private functions are just those that are not returned. Not returning functions makes them inaccessible outside of the Module namepsace. But our public functions can access our private functions which make them handy for helper functions, AJAX calls, and other things.

```js
Module.publicMethod(); // works
Module.privateMethod(); // Uncaught ReferenceError: privateMethod is not defined
```

One convention is to being private functions with an underscore, and return an anonymous object containing our public functions. This makes them easy to manage in a long object.

```js
var Module = (function () {
  function _privateMethod() {}
  function publicMethod() {}
  return {
    publicMethod: publicMethod,
  };
})();
```

## Immediately-Invoked Function Expression (IIFE)

Another type of closure is the IIFE. This is a self-invoked anonymous function called in the context of window, meaning that the value of `this` is set `window`.

```js
(function (window) {
  // do something
})(this);
```

# Changing Context with .call(), .apply(), and .bind()

Call and Apply functions are used to change the context while calling a function.

```js
function hello() {
  // do something
}
hello(); // the usual way
hello.call(context); // here you can pass the context (value of this) as the first argument
hello.apply(context); // here you can pass the context (value of this) as the first argument
```

The difference between `.call()` and `.apply()` is that call accepts the rest of the arguments as a list separated by a comma while apply allows you to pass the arguments in an array.

```js
function introduce(name, interest) {
  console.log("Hi! I'm " + name + " and I like " + interest + ".");
  console.log("The value of this is " + this + ".");
}

introduce("Hammad", "Coding"); // the way you usually call it
introduce.call(window, "Batman", "to save Gotham"); // pass the arguments one by one after the context
introduce.apply("Hi", ["Bruce Wayne", "businesses"]); // pass the arguments in an array after the context

// Output:
// Hi! I'm Hammad and I like Coding.
// The value of this is [object Window].
// Hi! I'm Batman and I like to save Gotham.
// The value of this is [object Window].
// Hi! I'm Bruce Wayne and I like businesses.
// The value of this is Hi.
```

**call is slightly faster in performance than apply**

`bind()` doesn't call the function. It can only be used to bind the value of context and other arguments before calling the function.

```js
(function introduce(name, interest) {
  console.log("Hi! I'm " + name + " and I like " + interest + ".");
  console.log("The value of this is " + this + ".");
}.bind(window, "Hammad", "Cosmology")());

// logs:
// Hi! I'm Hammad and I like Cosmology.
// The value of this is [object Window].
```

Bind is like the call function, it allows you to pass the rest of the arguments one by one separated by a comma and not like apply, which contains the arguments in an array.
