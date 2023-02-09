// function.prototype.call

const person = {
fullName: function(action,place){
return this.name1 +" "+this.name2 + action + place;
    }
  }

const p2 = { name1: "vivek", name2: "kumar"}
const p3 = { name1: "Kumar", name2: "sangakara"}

let b = person.fullName.call(p2, " went", " chikmaglur")

console.log(b)

// VM3794:11 vivek kumar went chikmaglur

// method chaining == programming strategy that simplifies the code
// it is a mechanism of calling a method on another method of the same object

//Example: In this example, each method in Land.prototype returns this,
// which refers to the entire instance of that Land object.
// And this would help in calling a method on another method of the same object.