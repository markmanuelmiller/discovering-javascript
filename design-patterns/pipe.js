function pipe(...callbacks) {
  return function (value) {
    return callbacks.reduce((accumulator, callback) => {
      return callback(accumulator);
    }, value);
  };
}

function hello() {
  return "hello";
}

function capitalize(str) {
  return str.toUpperCase();
}

function addWorld(str) {
  return str + " world!";
}

let a = pipe(capitalize, addWorld)(hello());
console.log(a);
