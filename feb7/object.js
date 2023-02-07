//  objects  vs code

var obj = new Object()
console.log(obj)

var obj1 = {}
console.log(obj1)

var obj3 = {
    name: 'ajay',
    age: 23
}
console.log(typeof (obj3))
console.log(`name is ${obj3.name} and his age is ${obj3.age}`)
console.log(obj3)
console.log(Object.keys(obj3));
var allKeys = Object.keys(obj3);
for (var t of allKeys)
    console.log(t)//value printed
for (var t in allKeys)
    console.log(t)//index printed

var vals = Object.values(obj3);
for (let v of vals)
    console.log(v)

for (let v in vals)
    console.log(v)

obj3.city = 'chn'
console.log(obj3)
console.log(obj1)

var object1 = { age: 34 };
Object.defineProperty(object1, 'age', { value: 42, writable: false });
console.log(object1)
Object.defineProperty(object1, 'status', { value: true, writable: false });
console.log(object1)
Object.defineProperty(object1, 'city', { writable: false })
//object1.age=90
//console.log(object1)
//object1.city='hyd'
var ob = {}
console.log(ob)
var ob1 = new Object();
console.log(ob1)

var car = {
    name: 'ford',
    price: 455677
}

var log = console.log;
log(car);

const object = {};

Object.defineProperties(object, {
    property1: {
        value: 42,
        writable: true
    },
    property2: { writable: true }
});

console.log(object.property1);
// Expected output: 42
console.log(object.property2);
object1.property2 = 'hi'
console.log(object.property2);

const object2 = {
    a: 'somestring',
    b: 42,
    c: false
};

//   for(let v of Object.keys(object2))
//     console.log(v)

// for(let v of Object.values(object2))
//    console.log(v)
//console.log(Object.entries(object2))

// var ar1=['age', 42]
// let [k,v]=ar1;
// console.log(k,v)

// for(let [k,v] of Object.entries(object2))
//     console.log(k,v)
const obj4 = {
    prop: 42,
    a: 56
};

Object.freeze(obj4);
//   obj4.prop = 33;
//obj4.city='someCity'//not possible
// delete obj4.prop
// console.log(obj4)
// Object.defineProperties(obj4,{prop:{writable:true,},a:{writable:true}})
// for(let [k,v] of Object.entries(obj4))
// console.log(k,v)

// const a={id:34}
// // a={}
// a.id=90;
// console.log(a)
// console.log(Object.isFrozen(obj4));

var emp = { id: 123 }

var copyEmp = Object.create(emp);
console.log(emp)
console.log(copyEmp)
copyEmp.name = 'aaa'
console.log(copyEmp)
console.log(copyEmp.id)







// notepad


// Object - cosmic parent


var ob = {} //or
var ob1 = new Object();


//var objName = {(k, v),(k1: v1)}

(k, v) - property1
    (k1, v1) - property2

// var car = {
// (name: 'ford'),
//     (price: 345677)
// }
//class name is still Object


// Object.keys() - access to all keys

// Object.entries() - has access to all k - v pairs

// Object.freeze() - to make an object immutable

//new properties cannot be added, existing properties cannot be removed



// difference between freeze() and const

const a1 = {}
const a1 = { id: 90 } possible

here id is not constant only  object a is constant

to make id or other properties to be const , we use freeze()

console.log(Object.isFrozen(a));

console.log(Object.isFrozen(obj4));


add methods into objects:
============================
case 1:
=========
var obj={
		id:234,
		changeId:function(){ id=9000; console.log('changed '+id)}
}
obj.changeId()
console.log(obj.id);

case 2:
=========

var obj={
		id:234,
		changeId:function(){ this.id=9000; console.log('changed '+this.id) delete this.id}
}
obj.changeId()
VM152:3 changed 9000
undefined
console.log(obj.id);
VM158:1 9000


object.Create():
var emp={}

var copyEmp=Object.create(emp);
console.log(emp)
console.log(copyEmp)