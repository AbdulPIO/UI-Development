// "use strict";

const person = {
    name: "Abdul",
    walk() {
        console.log(this); // returns the reference to the person object
    }
};

person.walk();

const walk = person.walk; // method is not called but only a reference is passed
console.log(walk);
walk(); // if used as standalone variable returns global object which is window in case of browsers
// if strict mode is enabled it will return undefined


// Binding this
const walkNew = person.walk.bind(person); // binding a function to an object
walkNew();