let names = ['Abdul', 'Mujeeb', 'Khan', 'Abdul', 'Abdul'];

// altering each element of array using .map()
names.map((name) => {
    console.log(name);
    return name + "1";
});

// removing elements using filter
const filteredNames = names.filter((name) => {
    return name != "Abdul";
})
console.log(filteredNames);
