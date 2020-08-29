# Functions, Execution Contexts & The Call Stack

## What happens when javascript executes code

As soon as we start running our code, we create a **global execution context** which consists of:

1. Thread of execution - parsing and executing the code line by line
1. Live memory of variables with data (known as a **Global Variable Envrionment**)

```js
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const name = "Will";
```

Walk through the code:

1. Declare a constant variable called num and assigning it an integer of 3 in global memory
1. Create a function declaration called multiplyBy2 in global memory
   - JavaScrit grabs the "multipleBy2" function code and stores it in the heap and passes a reference to it to the multiplyBy2 label
1. Declare a constant variable called name and assing it a string of "Will" in global memory

## The thread in JavaScript

- Single threaded (one thing at a time)
- Synchronous execution (for now)

## Running/Calling/Invoking a function

- Not the same as defining a function

When you execute a function you create a new execution context comprising:

1. The thread of execution (we go through the code in the function line by line)
1. A local memory (variable environment) where anything defined in the function is stored

```js
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);
```

Walk through the code:

1. Declare and define a constant, num, in the global variable environment and assign it an integer of 3
1. Declare a function named multiplyBy2 in the global variable environment
1. Declare a constant, output, and define it as `undefined`. Then evaluate the multiplyBy2 function
   - The parenthesis show that there is work to be done here
1. Create a local execution context which includes a local memory environment (our thread weaves into multiplyBy2)
1. Declare a variable inputNumber and assign it the integer of 4 (our argument)
1. Declare a constant, result, and assign it the value of inputNumber \* 2 (8)
1. Return the value of result to the global execution context and assign it to the global variable, output
   - Now our thread weaves its way out to global (due to return or a closing bracket '}')
1. Declare a constant, newOutput, and assign it as `undefined`. Then evaluate the multiplyBy2 function and assign that value to newOutput
1. Create a local execution context which includes a local variable environment (local memory)

## The Call Stack

- JavaScript uses a call stack to keep track of which execution context we are in - that is, what function is currently being run and where to return to after an execution context is popped off the stack
- One global execution context, multiple function contexts

```
|        |
| mb2()  |
|global()|
|________|
```

- Pushes and pops the current variable environment

# Callbacks & Higher Order Functions

```js
function tenSquard() {
  return 10 * 10;
}
```

1. Create a function declaration that, tenSquard, which accepts no parameters
1. Return 10 \* 10;

We can generalize the function

```js
function squareNum(num) {
  return num * num;
}
squareNum(10);
squareNum(9);
...
```

## Now suppose we have a function copyArrayAndMultiplyBy2...

```js
function copyArrayAndMultiplyBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
const myArray = [1, 2, 3];
let result = copyArrayAndMultiplyBy2(myArray);
```

Walking through...

1. Declare a function named copyArrayAndMultiplyBy2 and storing it in global memory
1. Declare a constant myArray and assign it an array with the values 1, 2, 3
1. Declare a variable result and assign it undefined, in global memory
1. Call copyArrayAndMultiplyBy2 and pass myArray, the result will be stored in the result variable
1. Add copyArrayAndMultipleBy2 to the call stack
1. Create a new local execution context
1. Assign a new local variable, array and assign it the value of the argument array
1. Declare a local variable output and assign it an empty array
1. Initialize a for loop
1. Take 1 and multiply it by 2 and push the value, 2 to output in local memory
1. Increase i to 1, i is less than the array length,
1. Take 2 and multiply it by 2 and push the value, 4 to output in local memory
1. ...
1. Return the value of output from local memory to the global memory's result variable

```js
function copyArrayAndDivideBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}
const myArray = [1, 2, 3];
let result = copyArrayAndDivideBy2(myArray);
```

Walking through...

1. Declare a function named copyArrayAndDivideBy2 and storing it in global memory
1. Declare a global varaible myArray and assign it an array with the values 1,2,3
1. Declare a global variable result and set it to undefined until we invoke the function
1. Invoke the function copyArrayAndDivideBy2, creating a new local execution context and adding it to the call stack
1. Declare a local variable, array, and assign it to the value of the passed in parameter, array
1. Declare a local variable, output, and assign it an empty array
1. Initialize a for loop
1. Take 1 and divid it by 2 and push the value, 2 to output in local memory
1. Increase i to 1, i is less than the array length
1. Take 2 and divid by 2 and push the value, 1 to output in local memory
1. ...
1. Return the value of output from local memory to the result variable in global memory

Add 3

```js
function copyArrayAndAdd3(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}
const myArray = [1, 2, 3];
let result = copyArrayAndAdd3(myArray);
```

## We can generalize our function so that we pass in our specific instruction only when we run the copyArrayAndManipulate function

```js
function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array.[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

let result = copyArrayAndManipulate([1,2,3], multiplyBy2);
```

Walking through...

1. Declare a function copyArrayAndManipulate in global memory
1. Declare a function multiplyBy2 in global memory
1. Declare a variable, result and assign it a value of undefined in global memory
   - Will stay as undefined until the function returns the value
1. Call/invoke copyArrayAndManipulate, passing in an array and a reference to multiplyBy2
1. Add copyArrayAndManipulate to the call stack and create a new local execution context, thread weaves in
1. Declare 2 new variables, array and instructions and assign them the values [1,2,3] and the function declaration (previously known by multiplyBy2)
   - instructions becomes a reference to multiplyBy2
1. Declare a variable output and assign it a value of an empty array in local memory
1. Initialize a for loop
1. i has a value of 0 and is less than the length of the array
1. array[i] is equal to 1
1. Invoke instructions passing in the value of 1
1. Create a new local execution context and add it to the call stack
1. Create a new local variable input and assign it the value of 1
1. return 1 \* 2 from the multiplyBy2 execution context to the copyArrayAndManipulate exeuction context and push it to the output array
1. multiplyBy2 execution context is garbage collected and pushed off call stack
1. i has a value of 1 and is less than the length of the array
1. array[i] is equal to 2
1. Invoke instructions passing in the value of 2
1. Create a new local execution context and add it to the call stack
1. Create a new local variable input and assign it the value of 1
1. return 2 \* 2 from the multiplyBy2 execution context to the copyArrayAndManipuulate execution context and push it to the output array
1. multiplyBy2 execution context is garbage collected and pushed off call stack
1. ...
1. return the value of output
1. assign [2,4,6] to the result variable in the global execution context

## How is this possible?

- Functions in JavaScript are first class objects
- They can co-exist with and can be treated like any other JS object
- Assigned to variables and properties of other objects
- Passed as arguments into functions
- Returned as values from functions
- Functions have 1 special property from normal objects, they can be invoked

## Callback vs. Higher-Order Function

- Which is our callback function - multiplyBy2
- Which is our higher-order function - copyArrayAndManipulate

## Higher-Order Functions

- **Any function that takes in another function OR returns out another function, is a higher-order function**
- HOF and callbacks keep our code DRY
- And they do something even more powerful, they let us run asynchronous code

## Definitions

Callback

> In JavaScript, a callback is a function that is passed as an argument to another function.

Higher-Order Function

> A function that takes at least one function as input and/or returns a function as output.

- So basically, higher-order functions have callbacks as inputs and call those callbacks somewhere in their definition.
- Any time we notice we are writing code that repeats except for one small part, we turn it into a function! The function body will contain the repetitive code block, and its parameter will replace the one thing we want to change.
- In JavaScript, functions are first-class citizens. This means that functions can be passed as input to other functions (as well as returned from other functions, modified, and assigned to variables).
- This gives developers the ability to use functions as parameters, which we refer to as callbacks.
