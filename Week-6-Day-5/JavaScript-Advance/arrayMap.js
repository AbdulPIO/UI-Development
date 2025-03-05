const colors = ['red', 'green', 'blue'];
const items = colors.map(function (color) {
    return '<li>' + color + '</li>';
});

// const items = colors.map(color => `<li>${color}</li>`);
console.log(items);