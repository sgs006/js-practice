//Function constructor
/*
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

//Prototype inheritence can work for properties as well.
// However, this is used less commonly. This is just an example to
// show it in acction.

Person.prototype.lastName = "Smith";

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

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//My own practice constructor function

var StarWars = function(ship, type, shipConDate) {
  this.ship = ship;
  this.type = type;
  this.shipConDate = shipConDate;
};

StarWars.prototype.calculateAge = function() {
  console.log(55 - this.shipConDate);
};

var xwing = new StarWars("x-wing", "snub fighter", 20);

console.log(xwing.type);
xwing.calculateAge();
*/

//Object.create
//Allows us to specify directly which object should be a prototype that others
//inherit from.
var personProto = {
  calculageAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
