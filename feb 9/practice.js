// bind in functions
const module = {
    x: 42,
    getX: function () {
        return this.x

    }
}

const unboundGetX = module.getX.bind(module);
console.log(unboundGetX())


//p2:


let user = {
    firstName: "john"
}

function bind1() {
    return this.firstName
}

let funcUser1 = bind1.bind(user)
console.log(funcUser())
// VM1570: 10 john


//===========================================================
//===========================================================


//p3: 
let user1 = {
    firstName: "John"
};

function func(phrase) {
    alert(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user1);

funcUser("hello");


//p4: 
// bound to old user object even using setimeout
let user3 = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

let sayHi = user3.sayHi.bind(user3); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
    sayHi() { alert("Another user in setTimeout!"); }
};


