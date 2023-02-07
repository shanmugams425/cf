//  `In JavaScript, objects have a special hidden property [[Prototype]], 
//  that is either null or references another object. That object is called “a prototype”:`

//  //The property[[Prototype]] is internal and hidden, but there are many ways to set it.

// //One of them is to use the special name __proto__, like this:

// // let animal = {
//     eats: true
// //};
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// //Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// // we can find both properties in rabbit now:
// alert(rabbit.eats); // true (**)
// alert(rabbit.jumps); // true

// //Then, when alert tries to read property rabbit.eats (**), it’s not in rabbit, 
// //so JavaScript follows the [[Prototype]] reference and finds it in animal (look from the bottom up):

// let animal1 = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// // walk is taken from the prototype
// rabbit.walk(); // Animal walk



// let animal11 = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal11
// };

// // walk is taken from the prototype
// rabbit.walk(); // Animal walk


//---------------------------------------------------------------


//Object.defineProperty()


const obj ={};

Object.defineProperty(obj, "Name",{
    value: "Vivek",
    writable: true
})

obj.Name = "tamil"

console.log(obj.Name);

