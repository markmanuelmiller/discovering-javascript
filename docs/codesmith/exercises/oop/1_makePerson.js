/*
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the name argument passed into the function
Add an age property to the newly created object with its value being the "age" argument passed into the function
Return the object
*/

function makePerson(name, age) {
  // Create an empty object
  const newObject = {};
  newObject.name = name;
  newObject.age = age;
  return newObject;
}

const vicky = makePerson("Vicky", 24);

// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
