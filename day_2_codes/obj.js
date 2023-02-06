//  objects

var obj=new Object()
console.log(obj)

var obj1={}
console.log(obj1)

var obj3={
    name:'ajay',
    age:23
}
console.log(typeof(obj3))
console.log(`name is ${obj3.name} and his age is ${obj3.age}`)
console.log(obj3)
console.log(Object.keys(obj3));
var allKeys=Object.keys(obj3);
for(var t of allKeys)
    console.log(t)//value printed
for(var t in allKeys)
    console.log(t)//index printed

var vals=Object.values(obj3);    
for(let v of vals)
    console.log(v)

for(let v in vals)
    console.log(v)

obj3.city='chn'
console.log(obj3)
console.log(obj1)  

var object1={age:34};
Object.defineProperty(object1, 'age', {value: 42,writable:false});
console.log(object1)
Object.defineProperty(object1, 'status', {value: true,writable:false});
console.log(object1)
Object.defineProperty(object1,'city',{writable:false})
//object1.age=90
//console.log(object1)
//object1.city='hyd'