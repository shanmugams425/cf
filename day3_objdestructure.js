// reverse a string
// objects

// function reverse(n) {
//     var temp = 0;
//     while (n) {
//         temp *= 10;
//         temp += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return temp;
// }

// console.log(reverse(548))


//nested object

let user = {
    name: 'aaa',
    city: 'Banglore',
	courses: ['c', 'java'],
    contacts: {home: 12345, Office: 987654},
    address:
    {
        state: 'karnataka',
        pin: 50004
    },
    personal_info: {
        address2: {
            street: "123 Main St",
            city: "New York",
            state: "NY"
        },
}
}

//Destructuring nested obj
let { name, city, address: { state, pin }, personal_info: {address2: { street }} } = user

//without destructure
console.log(user.address.state)
console.log(pin, street)

//3. Here is another example that extracts the props, but assigns it to a different name.

{
    const user = {
        id: 339,
        name: 'Fred',
        age: 42
    };
    const { name: callSign } = user;
    console.log(callSign); //prints: Fred
}

//4.But what happens when the nested object is missing?


{
    const user = {
        id: 339,
        name: 'Fred',
        age: 42
    };
    const { education: { degree } } = user;  // TypeError: Cannot match against 'undefined' or 'null'.
}

//4.1 We can solve this by adding a default value.

{
    const user = {
        id: 339,
        name: 'Fred',
        age: 42
    };
    const { education: { degree } = {} } = user;
    console.log(degree); //prints: undefined
}

//4.2 But what happens when you nest even more?

{
    const user = {
        id: 339,
        name: 'Fred',
        age: 42
    };
    const { education: { school: { name } } = {} } = user;  // TypeError: Cannot match against 'undefined' or 'null'.
}


//We can continue to add more default values to solve this problem. But what is interesting is there is more than one solution.
//4.3.1 The first solution is to add a default value for school.

{
    const user = {
        id: 339,
        name: 'Fred',
        age: 42
    };
    const { education: { school: { name } = {} } = {} } = user;
    console.log(name); //prints: undefined
}

//4.3.2  The other solution is to expand the education default value.

{

    const user = {
        id: 339,
        name: 'Fred',
        age: 42
    };
    const { education: { school: { name } } = { school: {} } } = user;
    console.log(name); //prints: undefined
}


//refer 
//In the first solution we have.

// {
//     const user = {
//         id: 339,
//         name: 'Fred',
//         age: 42
//     };
//     const { education: { school: { name = 'Dunno' } = {} } = {} } = user;
//     console.log(name); //prints: Dunno
//     And in the second solution it will be.

//     const user = {
//         id: 339,
//         name: 'Fred',
//         age: 42
//     };
//     const { education: { school: { name } } = { school: { name: 'Dunno' } } } = user;
//     console.log(name); //prints: Dunno
// }