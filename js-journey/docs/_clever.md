# Clever or Interesting Snippets

Spread alphabet string to an array

```js
[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
```

---

Using `.fromCharCode` instead of explicitly writing letters of alphabet out (used in abacaba problem).

```js
function abacabaPattern(n) {
  if (n === 1) {
    return "A";
  } else {
    let prevPattern = abacabaPattern(n - 1);
    return prevPattern + String.fromCharCode(n + 64) + prevPattern;
  }
}
```

---
