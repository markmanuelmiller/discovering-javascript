# Execution Context

Execution context - the environment (scope) the current code is being evaluated in. Each execution context has it's own variable scope.

Whenever a function is invoked, a new execution context is pushed onto the call stack and a new variable environment is created along with it.

## Phases of the Execution Context

An execution context can be divided into a creation and execution phase. In the creation phase, the interpreter will first initialize the scope chain, then create a variable object (also called an activation object) that is composed of all the variables, function declarations, and arguments defined inside the execution context. From there the value of `this` is determined last. Then in the execution phase, code is interpreted and executed.

### 1 - The Creation Phase

    - When the function is called, but before it executes any code
    - During the first phase (creation phase), all variable values are set to undefined.

What happens during the creation phase

#### 1 - First, create the scope chain

#### 2 - Second, create a variable object (known as the activation object) for all variables, function declarations, and arguments defined in the execution context

During this part, we perform the following in order:

1. We create the arguments object, check the context for parameters, initialize the name and value and create a reference copy
1. Scan the context for function declarations
   1. For each function found, create a property in the "variableObject" that is the exact function name, which has a reference pointer to the function in memory
   1. If the function name exists already, the reference pointer value will be overwritten
1. Scan the context for variable declarations
   1. For each variable declaration found, create a property in the "variableObject" that is the variable name, and initialize the value to "undefined".
   1. If the variable name already exists in the "variableObject", do nothing and continue scanning (this is how arguments take precedence).

#### 3 - Third, determine the value of "this"

Pseudocode of the execution context object:

```js
executionContextObj = {
  scopeChain: {},
  variableObject: {
    arguments: {},
  },
  this: {},
};
```

### 2 - The Execution Phase

Assign values, references to functions, and interprets / executes the code line by line

---

## Example 1

```js
function foo(i) {
  var a = "hello";
  var b = function privateB() {
    // do something
  };
  function c() {}
}
foo(22);
```

On calling "foo(22)" the creation stage looks as follows:

```js
fooExecutionContext = {
  scopeChain: {},
  variableObject: {
    arguments: {
      0: 22,
      length: 1
    },
    i: 22,
    c: pointer to function c() (in heap),
    a: undefined,
    b: undefined
  },
  this: {}
}
```

The creation stage handles defining the names of the properties, but not assigning a value to them (done is execution phase), with the exception of formal arguments. Once the creation stage has finished, the thread of execution enters the function and the execution phase looks like this after the function has finished execution:

```js
fooExecutionContext = {
  scopeChain: {},
  variableObject: {
    arguments: {
      0: 22,
      length: 1
    },
    i: 22,
    c: //pointer to function c() (in heap),
    a: 'hello',
    b: //pointer to function privateB()
  },
  this: {}
}
```

## Example 2

```js
(function () {
  console.log(typeof foo); // function pointer
  console.log(typeof bar); // undefined
  var foo = "hello",
    bar = function () {
      return "world";
    };
  function foo() {
    return "hello";
  }
})();
```

The questions we can now answer are:

1. Why can we access foo before we have declared it?
   - If we follow the creation stage, we know the variables have already been created before the activation / code execution stage. So as the function flow started executing, foo had already been defined in the activation object.
2. Foo is declared twice, why is foo shown to be function and not undefined or string?
   - Even though foo is declared twice, we know from the creation stage that functions are created on the activation object before variables, and if the property name already exists on the activation object, we simply bypass the declaration.
   - Therefore, a reference to function foo() is first created on the activation object, and when the interpreter gets to var foo, we already see the property name foo exists so the code does nothing and proceeds.
3. Why is bar undefined?
   - bar is actually a variable that has a function assignment, and we know the variables are created in the creation stage but they are initialized with the value of undefined.

## When does a function end?

- When it encounters a return statement or it encounters a closing bracket `}`
- When a function ends, the following happens
  1. The local execution contexts pop off the execution stack
  1. The functions send the return value back to the calling context. The calling context is the execution context that called this function, it could be the global execution context or another local execution context. It is up to the calling execution context to deal with the reeturn value at that point. The returned value could be an object, an array, a function, a boolean, anything really. If the function has no return statement, `undefined` is returned.
  1. The local execution context is destroyed. This is important. Destroyed. All the variables that were declared within the local execution context are erased. They are no longer available. That's why they're called local variables.
