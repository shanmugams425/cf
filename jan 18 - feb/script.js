// boolean to string?
var a = true;
console.log(typeof a); // boolean
var s = String(a);
console.log(typeof s); // string
console.log(s); //true

// boolean to number?
var b1 = true;
console.log(typeof b1); // boolean
var num = Number(b1);
console.log(typeof num); // number
console.log(num); // 1

// boolean to float?
var b1 = true; //
console.log(typeof b1); // boolean
var num = parseFloat(b1);
console.log(typeof num); // number
console.log(num); // NaN

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(1 === true); // false 
console.log(0 === false); // false
console.log(1 == true); // true
console.log(0 == false); // true

//how to create a object in js

const person = {
  shan: true,
  printIntro: function () {
    console.log(`hello
        world`);
  },
};

const me = Object.create(person);
console.log(person);

//  console.error

// let element = null;
// if (element == null) {
//   console.error("There is an error. Element doesn't exist.");
// } else {
//   console.log("this will never be output");
// }

// //console.error
// //To log out your own error message you can check if the element exists or not. Use console.error and pass an error message if the element doesn't exist.

// let a1 = [1, 2, 3, 4, 5];
// a1.map((b) => {
//   if (b.length < 3) {
//     console.log(b);
//   } else console.error(b);
// });
