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
/*
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
*/

//Primitives vs objects

//Primatives
//each variable holds a copy of the data. They don't reference anything.
//b is being set to the value of a. It is not referencing a, but copying its value.
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
  name: "John",
  age: 26
};

//when we set obj2 = obj1 we are creating a reference ot obj1, not a new obj.
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};

//We see here that the function will not change the value of age but will change
//the vaule of city in obj. This points out the difference between primitives and objects.
function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);
