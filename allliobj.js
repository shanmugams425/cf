// var listarr1 = [
//     { id: 1, name: "dino",  mobile: 8976765641 },
//     { id: 1, name: "dino",  mobile: 8976765642 },
//     { id: 1, name: "dino",  mobile: 8976765642 },
//     { id: 4, name: "ben",   mobile: 8976765645 },
// ]


// listarr1.filter((e) => {
//     console.log(e)

//      if(e.id ){}
// } 
//     ) 
// // console.log(obj)
    // if(e.id && e.name == ))

    function solve(arr, times){
        for(let i = 0; i < times; i++ ){
            let element = arr.pop()
            arr.unshift(element)
        }
        return arr
    }

    let res45 = solve([1,2,3,4], 5);
    console.log(res45);

