//  array.Concat

{
let arr1 = [1,2,3]
let arr2 = [4,5,6]
   const combine = arr2.concat(arr1)
   console.log("concat", combine);
}  

//  every()

{
 let arr1 = [1, 2, 3]
 let arr2 = [4, 6, 8]
    function isEven(num) {
        return num % 2 === 0 
    }
    console.log(arr1.every("every",isEven));
    console.log(arr2.every("every",isEven))
}

// fill 

{
    const arr = ["a", "a", "a", "a", "a", "a", "a"];

    // fill the whole array with "b"
    console.log(arr.fill("b"));

    // fill the array from index 2 to last with "c"
    console.log(arr.fill("c", 2));

    console.log(arr.fill("d", 4, 6));  
    //only 4 and 5 will change not 6
}

//filter

{
    const arr = [10, 12, 5, 15, 2, 32, 20, -5, 23];

    // create a new array with all the elements greater than 10
    console.log(arr.filter((element) => element > 10));

    // array with only even numbers
    console.log(arr.filter((element) => element % 2 === 0));
}

//find
{
    const arr = [1, 10, 2, 25, 5, 15];

    // method return the first element which is greater than 10
    console.log(arr.find((element) => element > 10));
}

//findIndex
{
    
}