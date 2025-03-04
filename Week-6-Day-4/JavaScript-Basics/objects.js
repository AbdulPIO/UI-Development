console.log("*************** OBJECTS ***************");

const mySym = Symbol("Key")

const JsUser = {
    name: "Mujeeb",
    "full name": "Mujeeb Khan",
    age: 22,
    [mySym]: "myKey1", // using symbol as key-value pair
    location: "Jaipur",
    email: "mujeeb@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


// freezing object to prevent from manipulation
JsUser.email = "mujeeb@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mujeeb@microsoft.com"
console.log(JsUser);

// adding function in objects in JS
JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());