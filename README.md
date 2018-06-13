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

---------------------------------------
## Execution Context

- There are 2 phases in JavaScript's execution context
    1. Compilation phase
    1. Execution phase
- During the first pass, compilation, all variables are set to undefined
- Don't set variables to 'undefined'. Will help in debugging.

---------------------------------------

## Gotcha's

Not defined versus undefined
```js
console.log(a); // Uncaught ReferenceError: a is not defined
```

```js
var a;
console.log(a); // undefined
```
> a has been assigned memory with a value of undefined

---------------------------------------
2 Phases in action
```js
function b() {
  console.log('called b!');
}
b();
console.log(a); // undefined
var a = 'Hello world';
console.log(a); // Hello world
```

---------------------------------------
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
