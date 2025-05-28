// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters


// Primitives
let age: number = 24;

age = 12;

let userName: string;

userName = 'Abdul';

let isOnline: boolean;

isOnline = true;

let books: null;


// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];


// object type definition
let person: { name: string, age: number };

person = {
    name: 'Abdul',
    age: 23
}


// array of object type
let people: {
    name: string,
    age: number
}[];


// Type Inference

let place = 'Jaipur';
// when using the above syntax no need to declare type as its redundant

// place = 12343; // error as TS use Type Inference feature even if we did not declare any type to places


// Union Types - For variables that allow multiple types using the pipe symbol

let information: string | number | boolean;
information = 'Hello';
information = 124343;


// Type Aliases - when assigning same type or type strucutre to multiple variables

type Person = {
    name: string,
    age: number
}

let human: Person;
let humans: Person[];


// Functions and Types

function addition(a: number, b: number) {
    // function addition(a: number, b: number): number | string {
    return a + b; // type inference as it returns only number as parameters can be number only
}

function printing(value: any) {
    console.log(value);
    // this has a return type of void 
}


// Generics

function insertAtBeginning(array: any[], value: any) {
    // function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3] - without generics updatedArray is of any type
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');


// Class - blueprint for objects
// In javascript properties are only defined in constructor and in TS we can also specify the properties to be public or private

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses
    }

    // short hand method to achieve above result
    // constructor(public firstName: string, public lastName: string, public age: number, private courses: string[]) {
    // }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Abdul', 'Mujeeb', 23, ['Angular']);
student.enrol('Java');
// student.courses; // error as private property
student.listCourses();


// Interfaces - object type definitions
// One extra feature that interface give u that type does not is that 
// interfaces can be implemented by classes and they force classes to 
// have that structure defined by the interface
interface Human {
    firstName: string;
    age: number;

    // no code goes in method, just type of that method
    greet: () => void;
}

let max: Human;
max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    }
}

// when using implements it forces us to implement the structure defined by the interface
class Intructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!');
    }
}