// Comment
console.log("Hello World!");

// declaring variables
let firstName = 'Abdul';
// String Interpolation
console.log(`The name is ${firstName}`);

// Constant
const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);

// Primitive Data Types
let name = 'Abdul'; // String
console.log(typeof (name));
// dynamically typed language
name = false;
console.log(typeof (name));

let age = 23; // Number
console.log(typeof (age));

let isApproved = true; // Boolean
console.log(typeof (isApproved));

let lastName = undefined; // Undefined is a type as well as a value
console.log(typeof (lastName));

let selectedColor = null; // Null
console.log(typeof (selectedColor));


// Objects
let person = {
    name: 'Abdul Mujeeb',
    age: 23
};

console.log(person);
// Dot Notation to access the Object's Property
person.name = 'Jane';
console.log(person.name);

// Bracket Notation to access the Object's Property
person[age] = 20;
console.log(person[age]);

// dynamically accessing using bracket notation
let selection = 'name';
person[selection] = 'Mary'
console.log(person.name);


// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 45;
console.log(selectedColors);
console.log(selectedColors[0]);
// Array is an Object in JS
console.log(typeof (selectedColors));


// Functions
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet();
console.log(greet);

function square(num) {
    return num * num;
}
let num = square(2);
console.log(num);
console.log(square(5));