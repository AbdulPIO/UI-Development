const person = {
    name: 'Abdul', // property
    walk: function () { }, // declaring method inside an object using function keyword
    talk() { }  // declaring method without function keyword
};

person.talk(); // accessing using the dot operator

const targetMember = 'name';

// accessing using square brackets
console.log(person[targetMember]);
