import { Person } from "./person.js";

export function promote() { } // named exports

export default class Teacher extends Person { // main thing or default thing that is being exported
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
};