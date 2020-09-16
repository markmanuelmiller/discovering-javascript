# Closure

> A variable environment that has outlived its execution context and remains attached to a function that also has outlived the same execution context

- When a function is defined, it gets a bond to the surrounding local memory ("variable environment") in which it has been defined.

- Persistent lexically scoped referenced data

## Example

```js
function outer() {
  let counter = 0; // persistent lexically scoped referenced data
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
```

Walkthrough:

1. Define a new function in global memory called outer
1. Create a new constant in global memory called myNewFunction and assigning it the returned value of executing outer
1. Create a new local execution context and push outer onto the call stack
1. Resolve the parameters, which there are none
1. In local memory declare a new variable counter and assign it the value of 0
1. In local memory declare a new function called incrementCounter
1. Return the function definition of incrementCounter to myNewFunction in global memory
   1. **All of the surrounding local memory is attached on the function (on the back), and returned with the function - closure**
1. The local execution context gets destroyed and popped off the call stack
1. myNewFunction is invoked in the global execution context
1. Create a new local execution context and push myNewFunction on to the call stack
1. Resolve any parameters, which there are none
1. Increment counter by 1.
   1. First it looks in local memory but it doesn't find it
   1. Next it looks in the closure and finds counter
1. The local exeuction context gets destroyed and popped off the call stack
1. myNewFunction is invoked in the global execution context
1. Create a new local execution context and push myNewFunction on to the call stack
1. Resolve any parameters...
1. Increment counter by 1.
   1. First it looks in local memory but it doesn't find it
   1. Next it looks in the closure and finds counter
1. The local execution context gets destroyed and popped off the call stack
