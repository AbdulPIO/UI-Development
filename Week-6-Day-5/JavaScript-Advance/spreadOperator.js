// Spread Operator in Arrays
const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];

const combinedArr = [...firstArr, 'A', ...secondArr, 'B'];
console.log(combinedArr);


const cloneArr = [...firstArr];
console.log(cloneArr);


// Spread Operator in Objects
const firstObj = { name: 'Abdul' };
const secondObj = { job: 'UI Intern' };

const combineObj = { ...firstObj, ...secondObj, location: 'Jaipur' };
console.log(combineObj);
