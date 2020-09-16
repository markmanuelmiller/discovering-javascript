# Promises, Async & The Event Loop

###### Example

```js
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

1. Create a constant in global memory called result and assign it the value of 3
1. In global memory declare a new function called multiplyBy2 and assign it the function declaration.
1. Create a new constant, output, in global memory and assign it the value of undefined. Invoke multiplyBy2 passing the argument num, which is 3.
1. Push multiplyBy2 on the call stack and create a new local execution context
1. Create a local varible, inputNumber, and assign it the value of 3.
1. Create a new constant named result in local memory and assign it the evaluated result of inputNumber \* 2 which is 6.
1. Return result, which closes the local exeuction context, pops multiplyBy2 off the call stack and returns the value to output in global memory.
1. Create a new constant newOutput and assign it the value of undefined in global memory. Invoke multiplyBy2 with the argument of 10.
1. Create a new local execution context and push multiplyBy2 onto the call stack
1. Create a new local variable, inputNumber, and assign it the value that was passed in which is 10.
1. Create a new constant named result and assign it the value of 20 in local memory.
1. Return result, 20, to the newOutput variable in global memory
1. The local execution context is destroyed and the multiplyBy2 gets popped off of the call stack.

## Core JavaScript has 3 main parts

1. Thread of execution
1. Memory/variable environment
1. Call stack

JavaScript is not enough. We need more...

1. Browser API
1. Promises
1. Event loop
1. Callback/task queue

---

###### Example

```js
function printHello() {
  console.log("Hello");
}

function blockFor1Sec() {}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me first!");
```

## Callback Queue

...

## Event Loop

...

## Promises

- Special objects built into JavaScript that get returned immediately when we make a call to a web browsser API/feature (e.g. fetch) that's set up to return promises.
- Promises act as a placeholder for the data we expect to get back from the web browser feature's background work
- Any code we want to run on the returned data must also be saved on the promise object
  - Added using `.then` method to the hidden property `onFulfillment`
  - Promise objects will automatically trigger the attached function to run (with its input being the returned data)

## Microtask Queue

...

## Async Rules

- Hold promise-deferred functions in a microtask queue and callback functions in a task queue (callback queue) when the Web Browser API finishes
- Add the function to the call stack when:

  1. Call stack is empty
  1. All global code run

- Prioritize functions in the microtask queue over the callback queue

## `async` / `await`

- Syntactic sugar ontop of promises
