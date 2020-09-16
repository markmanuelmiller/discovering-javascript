// ADD CODE HERE
function censor() {
  const pairs = [];
  return function (...args) {
    if (args.length > 1) {
      pairs.push(args);
    } else if (args.length === 1) {
      // manipulate string
      let string = args[0];
      pairs.forEach((pair) => {
        const regex = new RegExp(pair[0], "gi");
        string = string.replace(regex, pair[1]);
      });
      return string;
    }
  };
}
// Uncomment these to check your work!
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'

// Attempt 2

// create a function censor
// input:
// output: function
function censor() {
  // declare a pair variable
  const pair = {};
  return function (...args) {
    // if two arguments are provided, will hold on to strings as a pair
    if (args.length === 2) {
      pair[args[0]] = args[1];
    } else if (args.length === 1) {
      // if one argument is provided, will return same string
      // replacing all occurances of first pair with second pair
      let string = args[0];
      for (let key in pair) {
        const regex = new RegExp(key, "g");
        string = string.replace(regex, pair[key]);
      }
      return string;
    }
  };
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'
