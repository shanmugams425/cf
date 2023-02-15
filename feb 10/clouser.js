const increaseNum = () => {
    let num = 0;
    let addOne = () => {
        num++;
        return num;
    }
    return addOne;
}
const numCounter = increaseNum();
let one = numCounter();    // one now has a value of 1
let two = numCounter();    // two now has a value of 2
let three = numCounter();   //three now has a value of 3


const nameChanger = function () {
    let name = 'Joe Schmoe';
    return {
        getName: () => console.log(name),
        setName: newName => name = newName
    }
}
let name = nameChanger();