// Using for of for iterating through objects

// for of cannot be used directly with plain javascript objects as objects are not iterable
// To make objects iterable we extract the keys, values, or entries

let employee = {
    name: "Mujeeb",
    age: 23,
    designation: "UI Intern"
}

for (const [key, value] of Object.entries(employee)) {
    console.log(key, ":", value);
}

console.log('******************');

// Using for in for strings
let str = "Abdul";

for (let i in str) {
    console.log(i, ":", str[i]);
}

// Using for in for arrays
let fruits = ['apple', 'banana', 'mango'];

for (let i in fruits) {
    console.log(i, ":", fruits[i]);

}
