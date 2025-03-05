const square = number => number * number;
console.log(square(5));

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
]

// const activeJobs = jobs.filter(function (job) { return job.isActive; });

const activeJobs = jobs.filter(job => job.isActive);
// filter loops through this array and pass to the predicate
// the predicate determines if that job object should be returned from the filter method
console.log(activeJobs);


// Arrow Functions does not rebind this
const person = {
    talk() {
        setTimeout(function () {
            console.log("this", this)
        }, 1000);
    }
    // talk() {
    //     setTimeout(() => { console.log("this", this) }, 1000);
    // }
}

person.talk();