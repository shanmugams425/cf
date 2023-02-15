

function makeAdder(x) {
   console.log(x)
    return function (y) {
        console.log(x)    
        console.log(y)    
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

//

var closure_F = (function () {
    var info = "info-string";
    var f1 = function () {
        console.log(info);
    };

    return f1;
}());

closure_F();
console.dir(closure_F);