// JSON
let jsonString = '{"name": "Abdul Mujeeb", "age": 23, "designation": "UI Intern", "company": "programmers.io"}';

// Converting json into a javascript object
let user = JSON.parse(jsonString);
console.log(user.name);

// Looping through JSON using for loop
// convert JSON object keys into an array
let keys = Object.keys(user);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i]; // get key name
    let value = user[key]; // get value

    console.log(key, ":", value);
}

// Converting JavaScript Object into JSON
let anotherUser = {
    name: "Alex",
    age: 22,
}

let anotherJsonString = JSON.stringify(anotherUser);
console.log(anotherJsonString);