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

//