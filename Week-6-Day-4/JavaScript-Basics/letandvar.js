// variables declared with var are function-scoped.
// variables declared with let are block-scoped.

function example() {
    if (true) {
        var x = 5;
        let y = 10;
    }
    console.log(x); // 5
    // console.log(y); // ReferenceError: y is not defined
}
example();

// Redeclaration
var a = 10;
var a = 9;

let b = 1;
// let b = 2;

// Hoisting - both are hoisted at top of their scope but,
console.log(c); // initialized with undefined
var c = 3;

// console.log(d); // ReferenceError
let d = 2;