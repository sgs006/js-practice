//Function constructor

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

//constructor function
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//Instead of adding the function to the constructor function
// we add it to the prototype for the Person object and now all future
// instances have access to the function without repeating the function for each
// instance and taking up space.

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

//instantiation, instance of contructor function
var john = new Person("John", 1990, "teacher");

// ^ The new keyword before person creates a new empty object
//the new variable ensures that the 'this' from the constructor
//function points to the newly created empty object that is about
//to be populated with your arguments, and not to the global scope.
//

var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();