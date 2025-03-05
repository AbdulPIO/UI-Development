class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

const person = new Person("Mujeeb");

// Inheritance
class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("Ms. Ann", "MSc");
teacher.name;
teacher.degree;
teacher.walk;