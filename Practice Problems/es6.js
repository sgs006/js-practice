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