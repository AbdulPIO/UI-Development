// handling null, empty string (""), and undefined

const handling = function (username) {
    if (!username) {
        console.log("Condition met.");
    } else {
        console.log("Condition not met.");
    }
}

console.log("Handling undefined:");
handling(undefined);

console.log("Handling null:");
handling(null);

console.log("Handling empty String");
handling("");

console.log("Handling Valid Values:");
handling("Mujeeb");