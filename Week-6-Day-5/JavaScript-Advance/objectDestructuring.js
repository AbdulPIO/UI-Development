const address = {
    street: 'Main Street',
    city: 'Main City',
    country: 'Country'
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

// Object destructuring
const { city, country } = address;

// using alias
const { street: st } = address;

const address2 = { ...address, street: 'New Street' };
console.log(address2);
