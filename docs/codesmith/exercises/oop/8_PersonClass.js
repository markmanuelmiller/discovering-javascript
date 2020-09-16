/*
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string "hello".
*/

class PersonClass {
  constructor(name) {
    // Create a new property, name, and assign it the parameter value
    this.name = name;
  }

  // add code here
  greet() {
    console.log("hello");
  }
}

const george = new PersonClass("George");

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'
