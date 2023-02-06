// // pb:1
var emp=[
{name: 'aa', age: 23, city: 'Mumbai'},
{name: "bb", age: 23, city: undefined},
{name: 'cc', age: 23, city: 'Hyderabad'},
{name: 'dd', age: 23, city: undefined}
]

var employee = emp.filter(find => {
    return find.name !== undefined && find.age !== undefined && find.city !== undefined
})
    console.log(employee)


// // problem2:
//     // const obj = new Object()

//     // obj.name = prompt('Enter name:')
//     // obj.age = prompt('Enter age:')
//     // obj.city = prompt('Enter city:')
//     // console.log(obj)

// // problem3:

// // <noscript>
// // The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
// // The <noscript> element can be used in both <head> and <body>. When used inside <head>, the <noscript> element could only contain <link>, <style>, and <meta> elements.

// // Syntax
// // <noscript></noscript>

// // <noscript>
// //   <!-- anchor linking to external file -->
// //   <a href="https://www.mozilla.org/">External Link</a>
// // </noscript>
// // <p>Rocks!</p>

// // script - Enabled
// //     Rocks!

// // script - Disabled
// //     External Link

// //     The <noscript> tag also supports the Global Attributes in HTML. The <noscript> tag has no attributes that are unique to it.

// // const arr = [1, 2, 5];
// // const double = arr.map(function (el) { return el % 2; });
// // console.log(double);


// //How to make an array empty ?
// // var arr = ['a', 'b', 'c']
// // // let a = arr = [];  // []
// // // let b = arr.length = 0
// // let c = arr.splice(0, arr.length)

// // console.log(c[1])

// // "use strict"; 
 
// // var s = 99; console.log(s);


// // for in loop
// // const person = { fname:'john', lname:'scena', age:'55' }
// // const personarr = [23,45,67]
// // let temp = ''
// // for (let x in personarr){
// //     console.log(x) 
// // }
//   var x = 0;
//  function hn() {
//      x++;
//  console.log(x);
//          return function hn() {
//  x+=10;
//         console.log(x);
//                   }
//      }
// hn(hn())(hn())

// {
//     var v = c =  function hoisted() { console.log('Hoisted') }
// }
// v()

