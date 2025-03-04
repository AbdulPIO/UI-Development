// For Loop
let a = 1;
for (let i = 0; i < 5; i++) {
    console.log(a + i);
}

let x = 0;
for (; ;) {
    if (x > 3) break;
    console.log(x);
    x++;
}

// For in Loop
let obj = {
    name: 'Abdul',
    role: 'UI Intern',
    company: 'Programmers.io'
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, ':', element);
}

// For of Loop
for (const iterator of "Abdul") {
    console.log(iterator);
}

// While Loop
let i = 5;
while (i < 6) {
    console.log(i);
    i++;
}

// Do-While Loop
i = 10;
do {
    console.log(i);
    i++;
} while (i < 6);

// For each Loop
const names = ["Dereck", "Jeremy", "John", "Jane", "Mary"];
names.forEach((s) => (console.log(s)));