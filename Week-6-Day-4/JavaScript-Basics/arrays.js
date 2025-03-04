// Arrays
console.log("************ARRAYS************");

const myArrEx = [0, 1, 2, 3, 4, 5, true, "Mujeeb"]
// Different data type elements are also allowed in arrays in JS

const myArr = [0, 1, 2, 3, 4, 5]
// Arrays in JS are Resizable
const myHeros = ["Ironman", "Hawkeye"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);


// ARRAY METHODS

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9) //adds 9 in the beginning of array, but not optimized
console.log(myArr);

myArr.shift() //removes element from the zeroth index
console.log(myArr);

console.log(myArr.includes(0));

console.log(myArr.indexOf(9));

const newArr = myArr.join()// converts to srting separated by the argument given
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);

// slice() -> extracts elements specified but does not delete them from original array  

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//only include 1 and 2 index elements

console.log(myn1);
console.log("B ", myArr);

//splice() -> extracts elements specified but also deletes them from original array
console.log("A ", myArr);

const myn2 = myArr.splice(1, 3)//only include 1, 2 and 3 index elements

console.log(myn2);
console.log("B ", myArr);



