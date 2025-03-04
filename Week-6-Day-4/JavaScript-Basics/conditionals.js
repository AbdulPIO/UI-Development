// Arithmetic Operators
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 ** 2);
console.log(3 % 2);

// Assignment Operators
a = 1;  //1
a += 3; //4
a -= 2; //2
a *= 2; //4
a /= 2; //2
a **= 2; //4
console.log(a);

// Comparison Operators
x = 1;
y = "1";
console.log(x != y);
console.log(x == y);
console.log(x === y);

/* I am a
multiline 
comment
*/

let age = 17;
if (age >= 18) {
    console.log("You can drive");
}
else if (age >= 16 && age < 18) {
    console.log("You can drive under supervision");
}
else {
    console.log("You cannot Drive");
}

// Ternary Operator
let p = 3;
let q = 9;
r = p > q ? (p - q) : (q - p);
console.log(r);
