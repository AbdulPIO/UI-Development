let username = "John";
console.log(!!username);

username = "";
console.log(!!username);

let age = 0;
console.log(!!age);

let value = null;
console.log(!!value);

username = "Mujeeb";

// Used in Boolean Conversion
// let isValid = Boolean(username);
let isValid = !!username;

// Conditional checks
if (!!username) {
    console.log("Username Exists.");
}

// Preventing Errors in Logical Operations
const user = {
    name: ""
}

console.log(!!user && user.name); // Not printed as username does not exist
