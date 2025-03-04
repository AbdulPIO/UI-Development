const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

marvelHeroes.push(dcHeroes)

console.log(marvelHeroes);
console.log(marvelHeroes[3]);
console.log(marvelHeroes[3][1]);
console.log(dcHeroes);

// .concat() -> better than push as no change in original array and returns new array without any indexing within indexes

const marvelHeroes1 = ["Thor", "Ironman", "Spiderman"]
const dcHeroes1 = ["Superman", "Flash", "Batman"]

const allHeroes = marvelHeroes1.concat(dcHeroes1)
console.log(allHeroes);


//Spread -> best use to combine 2 or more arrays
const allNewHeroes = [...marvelHeroes1, ...dcHeroes1]
console.log(allNewHeroes);

//********************************

const anotherArray = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]] //array within array within array
const realAnotherArray = anotherArray.flat(Infinity) //removes depth witin an array
console.log(realAnotherArray);

console.log(Array.isArray("Mujeeb")) //checks if its an array
console.log(Array.from("Mujeeb")); //converts object, string, etc.to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //returns a set of elements as an array