# Type Coercion

Type coercion is the process of converting value from one type to another (such as a string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion.

## Data Types

Primitive Types

1. undefined: `typeof instance === "undefined"`
1. Boolean: `typeof instance === "boolean"`
1. Number: `typeof instance === "number"`
1. String: `typeof instance === "string"`
1. BigInt: `typeof instance === "bigint"`
1. Symbol: `typeof instance === "symbol"`
1. null: `typeof instance === "object"`
   - Special **primitive** type having additional usage for its value

Structural Types

1. Object: `typeof instance === "object"`
   - Object, Array, Map, Set, WeakMap, WeakSet, Date
1. Function: `typeof instance === "function"`
   - Every Function constructor is derived from Object constructor

## Implicit vs. Explicit Coercion

When you express the intention to convert between types by writing the appropriate code, like Number(value), it's called explicit type coercion (or type casting).

Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion. It usually happens when you apply operators to values of different types, like `1 == null`, `2 / "5"`, `null + new Date()`, or it can be triggered by the surrounding context, like with `if (value) {...}` where value is coered to boolean.

### Strict equality (`===`) does not trigger implicit type coercion.

### Loose equality (`==`) on the other hand does **both comparison and type coercion** if needed.

Implicit type coercion is a double edge sword: it's a great source of frustration and defects, but also a useful mechanism that allows us to write less code without losing the readability.

## Three Types of Conversion

### Rule #1

There are only three types of conversion in JavaScript:

1. to string
1. to boolean
1. to number

### Rule #2

Conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those three ways above.

## String Conversion

To explicitly convert values to a string apply the `String()` function.

**Implicit coercion is triggered by the binary `+` operator, when any operand is a string**:

```js
String(123); // explicit
123 + ""; // implicit
```

All primitive values are converted to strings naturally as you might expect:

```js
String(123); // '123'
String(-12.3); // '-12.3'
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'
```

## Boolean Conversion

To explicitly convert values to a boolean apply the `Boolean()` function.

**Implicit conversion happens in logical context, or is triggered by logical operators (`||`, `&&`, `!`)**

```js
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator
```

**Note: Logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, even if they are not boolean.**

```js
// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = "hello" && 123; // x === 123
```

Falsy values:

```js
Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false
```

Any value that is not in the list is converted to `true`, including object, function, array, date, user defined types and so on. Symbols are truthy values. Empty object and arrays are truthy values as well.

Truthy values:

```js
Boolean({}); // true
Boolean([]); // true
Boolean(Symbol()); // true
!!Symbol(); // true
Boolean(function () {}); // true
```

## Numeric Conversion

For explicit conversion, apply the `Number()` function, like `Boolean()` and `String()`.

Implicit conversion is tricky, because it's triggered in more cases:

1. Comparison operators (`>`, `<`, `<=`, `>=`)
1. Bitwise operators (`|`, `&`, `^`, `~`)
1. Arithmetic operators (`+`, `-`, `*`, `/`, `%`)
   - **NOTE**: binary `+` does not trigger numeric conversion when any operand is a string.
1. Unary `+` operator
1. Loose equality operator (`==`, `!=`)
   - **NOTE**: `==` does not trigger numeric conversion when both operands are strings.

```js
Number("123"); // explicit
+"123"; // implicit
123 != "456"; // implicit
4 > "5"; // implicit
5 / null; // implicit
true | 0; // implicit
```

How primitive values are converted to numbers:

```js
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(" 12 "); // 12
Number("-12.34"); // -12.34
Number("\n"); // 0
Number(" 12s "); // NaN
Number(123); // 123
```

When converting a string to a number, the engine first trims leading and trailing whitespace, `\n`, `\t` characters, returning `NaN` if the trimmed string does not represent a valid number. If a string is empty, it returns `0`.

`null` and `undefined` are handled differently: `null` becomes `0`, whereas `undefined` becomes `NaN`.

Symbols cannot be converted to a number neither explicitly nor implicitly.

### There are 2 special rules to remember

1. When applying `==` to `null` or `undefined`, numeric conversion does not happen. `null` equals only to `null` or `undefined`, and does not equal to anything else.

```js
null == 0; // false, null is not converted to 0
null == null; // true
undefined == undefined; // true
null == undefined; // true
```

1. `NaN` does not equal to anything, even itself

```js
if (value !== value) {
  console.log("we're dealing with NaN here");
}
```

## Type Coercion for Objects

When the engine encounters an object (`[1] + [2,3]`), first it needs to convert an object ot a primitive value, which is then converted to the final type (numeric, string, boolean).

### Boolean conversion

Any non-primitive value is always coered to true, no matter if an object or an array is empty or not.

### Numeric and String conversion

Objects are converted to primitives via the internal `[[ToPrimitive]]` method, which is responsible for both numeric and string conversion.

#### Psudeocode for `[[ToPrimitive]]`

`[[ToPrimitive]]` is passed with an input value and preferred type of conversion (number, string). perferredType is optional.

Both numeric and string conversion make use of the two mehtods of the input object: `valueOf` and `toString`. Both of these are delcared on the `Object.prototype`, thus avaiable to any object.

In general the algorithm is as follows:

1. If input is already a primitive, do nothing and return it
1. Call `input.toString()`, if the result is primitive, return it
1. Call `input.valueOf()`, if the result is primitive, return it
1. If neighter `input.toString()` nor `input.valueOf()` yields primitive, throw `TypeError`

Numeric conversion first calls `valueOf()`, then falls back to `toString()`
String conversion does the opposite: `toString()` with fallback to `valueOf`.

## Examples

```js
true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
['x'] == 'x'
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0
```

.
.
.
.
.
.
.
.
.

## Examples with Answers

```js
true + false             // 1
12 / "6"                 // 2
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false
false == 'false'         // false
null == ''               // false
!!"false" == !!"true"    // true
['x'] == 'x'             // true
[] + null + 1            // 'null1'
[1,2,3] == [1,2,3]       // false
{}+[]+{}+[1]             // '0[object Object]1'
!+[]+[]+![]              // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
```
