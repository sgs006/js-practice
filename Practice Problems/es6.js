// let and const

// //ES5
// var name5 = "Jane Smith";
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// //ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);//Throws error, can't change const

//var are function scoped
//let and const are block scoped

//ES5
function driversLicense6(passedTest) {
    if (passedTest) {
        var firstName = "John";
        var yearOfBirth = 1990;

        console.log(firstName + ', born in ' + yearOfBirth +
            ', is now officially allowed to drive a car.');
    }
}

driversLicense6(true);

//ES6

//Example 1
function driversLicense6(passedTest) {
    if (passedTest) {
        let firstName = "John";
        const yearOfBirth = 1990;
    }
    //putting console.log here won't work because let and const are block scoped not function scoped
    //the console.log is outside of the 'if' block above and can't access the variables any longer. 
    //This same code would have worked in ES5.
    console.log(firstName + ', born in ' + yearOfBirth +
        ', is now officially allowed to drive a car.');
}

driversLicense6(true);

//Example 2
function driversLicense6(passedTest) {
    //let can be manipulated inside the 'if' block but const can't.
    //The const has to be declared so the whole function can use it. 

    let firstName
    const yearOfBirth = 1990;
    //can only use a variable after it is declared and defined.
    if (passedTest) {
        firstName = "John";
    }

    console.log(firstName + ', born in ' + yearOfBirth +
        ', is now officially allowed to drive a car.');
}

driversLicense6(true);









let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

//output 0,1,2,3,4, 23
//the i outside the for loop is a completely different variable than the one inside the for loop
//that is why the outputs are different. 
//in ES5 teh output is 0,1,2,3,4,5

//let for variables that can change over time
//const for variables that remain constant


//////////////////////////////////////////////
// Lecture : Blocks and IIFEs

//ES6 example of IIFE
{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(a + b) //throws error because they are block scope
//this is how you write and IFFE in ES6.
console.log(c); //works beause var is function scopped 
//ES5 example of IFFE
(function () {
    var c = 3;
})();

//////////////////////////////////////////////
// Lecture: Strings 

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born  in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
//Backticks make this easier!
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


//useful methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));

////////////////////////////////////////
//Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);

////////////////////////////////////////////////
// Lecture : Arrow Functions 2

//arrow functions do not have a this keyword, they use the this keyword of the function they are written in. This is called a lexical this variable. 

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        //The this keyword in this function would point to the box5 object. It works because this function is a method
        var self = this; //This variable is a hack that allows us to have access to the this keyword in future functions within this method whose this keywords would point to the window object and not box5 object
        document.querySelector('.green').addEventListener('click', function () {
            var str = ' This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
            //The this keyword in this function points to the window object and not the box5 object. That is why we have to use the self hack above. 
        });
    }
}
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = ' This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
            //Arrow functions use the surrounding this keyword. 

            //Always use arrow functions when you need to preserve the value of the this keyword. 

        });
    }
}
box6.clickMe();

//Be careful with arrow functions so you don't lose track of what the this keyword points to. 
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         //By making the method an arrow function I'm pointing the this keyword to the global scope. Now I won't get my desired results.
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = ' This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box66.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
// Person.prototype.myFriends5 =
//     function (friends) {
//         var arr = friends.map(function (el) {

//             return this.name + ' is friends with ' + el;
//             //Again the this keyword in here points to global object and not the Person object since it is not a method. 
//         }.bind(this));
//         console.log(arr);
//     }

// //var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 =
    function (friends) {
        var arr = friends.map(el =>
            `${this.name} is friends with ${el}`);
        console.log(arr);
    }


let friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);

//////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Destructuring

//ES5
var john = ['John', 26];
var name1 = john[0];
var age1 = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

let obj = {
    firstName: 'John',
    lastName: 'Smith'
};

let { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

let { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);


//another example
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

//////////////////////////////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


//ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//.from method makes nodelist to an array

//ES5 to change text in boxes
/*for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}   
*/
//ES6
//for of loop
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

/////////////////////////////////////////////////////////
//Lecture: Spread Operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

///////////////////////////////////////////////////////
// Lecture: Rest Parameters

//Rest parameter takes single values and transforms them into arrays. 

//ES5 
/*function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965);

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1995, 1955);
*/

//spread operator is used in function call and rest operator is used in the function decleration to accept an arbitrary number of parameters. 


//ES5 
function isFullAge5(limit) {
    //The 1 is telling this to start cutting the array at position 1 ignoring index 0 which will be the limit argument
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    })
}

//isFullAge5(1990, 1999, 1965);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}
isFullAge6(16, 1990, 1999, 1965);
isFullAge6(16, 1990, 1999, 1965, 2016, 1995, 1955);


////////////////////////////////////////////////////////
// Lecture: Default Parameters


//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    //adding default parameters
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
//overriding defaults
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/

//ES6

//Can specify defaults in parameters without if statements for ternary operators. 
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let john = new SmithPerson('John', 1990);
//overriding defaults
let emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

/////////////////////////////////////////////////////////////// Lecture: Maps

//create hash maps

//why maps better than objects
//1. Can use anything as keys
//2. Maps are itterable
//3. Can get size of maps easily
//4. Easily add/remove data from a map
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);

if (question.has(4)) {
    // question.delete(4
    //console.log('Answer 4 is here');
}

//question.clear();

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

