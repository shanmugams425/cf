// boolean to string?
var a = true;
console.log(typeof a); // boolean
var s = String(a);
console.log(typeof s);
console.log(s);

// boolean to number?
var b1 = true;
console.log(typeof b1); // boolean
var num = Number(b1);
console.log(typeof num);
console.log(num);

// boolean to float?
var b1 = true;
console.log(typeof b1); // boolean
var num = parseFloat(b1);
console.log(typeof num);
console.log(num);

console.log(typeof undefined);
console.log(typeof null);
console.log(null === undefined);
console.log(null == undefined);

console.log(1 === true);
console.log(0 === false);
console.log(1 == true);
console.log(0 == false);

//how to create a object in js

const person = {
  shan: true,
  printIntro: function () {
    console.log(`hello
        world`);
  },
};

const me = Object.create(person);
person = console.log(me);

//  console.error

let element = null;
if (element == null) {
  console.error("There is an error. Element doesn't exist.");
} else {
  console.log("this will never be output");
}

//console.error
//To log out your own error message you can check if the element exists or not. Use console.error and pass an error message if the element doesn't exist.

let a = [1, 2, 3, 4, 5];
a.map((b) => {
  if (b.length < 3) {
    console.log(b);
  } else console.error(b);
});
