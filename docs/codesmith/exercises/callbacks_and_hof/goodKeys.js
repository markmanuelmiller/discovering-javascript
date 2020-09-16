/*
Create a function goodKeys that accepts an object and a callback. 
The callback will return either true or false. goodKeys will iterate 
through the object and perform the callback on each value. goodKeys will 
then return an array consisting only the keys whose associated values 
yielded a true return value from the callback.
*/

// ADD CODE HERE
function goodKeys(obj, callback) {
  const keys = Object.keys(obj).reduce((acc, el) => {
    const val = callback(obj[el]);
    if (val) {
      acc.push(el);
    }
    return acc;
  }, []);
  return keys;
}

// Uncomment these to check your work!
const sunny = {
  mac: "priest",
  dennis: "calculator",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === "bird";
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
