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