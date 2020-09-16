function hello() {
  console.log("hello");
}

function hello2() {
  console.log("hello2");
}

function hello3() {
  console.log("hello3");
}

function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function () {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) {
      result = args[i].call(this, result);
      return result;
    }
  };
}

var com = compose(hello, hello2, hello3);
console.log(com);
