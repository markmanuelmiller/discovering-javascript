# Example 1

```js
var foo = "bar";

function bar() {
  console.log(foo); // undefined
  var foo = "baz";
  console.log(foo); // "baz"
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}
```

1. `console.log(foo)` on line 5 is undefined since `var foo` shadows global foo and is set to `undefined` during the first pass.
1. With `strict mode`, line 12 will throw a ReferenceError instead of implicitly declaring a variable `bam` on global.

# Example 2

```js
var foo = "bar";

function bar() {
  var foo = "baz";
  function baz(foo) {
    foo = "bam";
    bam = "yay";
  }
  baz();
}

bar();
foo; // "bar"
bam; // "yay"
baz(); // Error
```

Pass 1 - Compilation Phase (creation phase)

1. Hey global scope, we have a formal declaration of foo on line 1, have you heard of him?
1. No, so we declare a new variable foo
1. Hey global scope, we have a formal declaration of bar on line 3, have you heard of him?
1. No, so we declare a new variable bar
1. Hey scope of bar, we have a formal declaration for foo, have you heard of him?
1. No, so we declare a new variable foo
   ...
