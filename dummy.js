// var x;
// if (undefined === undefined){
//     console.log("dd");
// }

let data = [
    {
        id: 1,
        name: 'ajay',
        mobile: 1,
    },
    {
        id: 1,
        name: 'ajay',
        mobile: 2,
    },
    {
        id: 1,
        name: 'ajay',
        mobile: 3,
    },
    {
        id: 1,
        name: 'ajay',
        mobile: 3,
    },
    {
        id: 1,
        name: 'ajay',
        mobile: 4,
    },
];

//id:1,name:'ajay',mobile:[1,2,3]
let arr = [];
let newArr = [];
for (let i = 0; i < data.length; i++) {
    if (data[i].id === 1 && data[i].name === 'ajay') {
        arr.push(data[i].mobile);
    }
}

let flag = true;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            delete arr[i];
        }
    }
}
let ans = arr.filter(v => v !== 'empty');
 console.log(`id:1,name:"ajay",mobile:[${ans}]`);

 