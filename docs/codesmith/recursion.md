# Recursion

3 things must exist in any repeating operation (while loop)

1. Initial value(s) - to work with
1. Breaking condition - to stop our program
1. Update expression - gets us from point a to point b

Without these, odd, unpredictable behavior will occur and our program will not work as we expect

Opening our execution context pushes it onto the call stack.
(By pushing something onto the call stack we will have an execution context)

Imperative code versus declarative code

- while loop is imperative
- recursion is declarative

Linear recursion - line to the bathrooms example

## How do recursive functions work?

We also need 3 things

1. Base case - a simple problem that can be answered directly
1. Recursive case - can be described in smaller occurences of the same problem
1. Initial value - some input

Always ask yourself "how is this task self-similar"

execution context === stack frame

Active context
Callsite: which stack frame was I in when I invoked this function

\*\* Pair our parameters with our arguments

Resolve callsite

1. push someNats onto the call stack
1. which gives us our new stack frame

Tail call invocation

Linear recursion versus tail call recursion versus tree recursion

-

Homework
what is an auxiliary object

- create an aux for fibonacci

Recursion is an laternative to looping when solving self-repeating tasks by invoking itself

When a function calls iteself:

- A nested function-level execution context is created, adding a new stack frame to the call stack
- The thread of execution enters the nested execution context and all outer execution is paused
- When we reach a base case (the smallest instance of the problem), we pass the returned value to where the function was called all the way down to the initial call site that started the recursive process
