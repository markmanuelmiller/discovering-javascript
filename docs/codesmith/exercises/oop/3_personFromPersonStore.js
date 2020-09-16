/*
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
*/

const personStore = {
  greet: function () {
    console.log("hello");
  },
};

function personFromPersonStore(name, age) {
  // Create a new object using Object.create, passing in personStore as the proto
  const newPerson = Object.create(personStore);
  // Resolve parameters to arguments on newPerson properties
  // add name property to person
  newPerson.name = name;
  // add age property to person
  newPerson.age = age;
  // return person object
  return newPerson;
}

const sandra = personFromPersonStore("Sandra", 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
