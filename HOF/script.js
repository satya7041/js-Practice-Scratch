// HOF(Higher Order Function)=>
//     A Higher-Order Function is any function that does at least one of the following:

// Takes another function as an argument
//  OR 
// Returns a function as its result

// 1. Takes another function as an argument- below

// function add(a ,b, ab){  //here ab is callback function
//     let result = a + b;
//     ab(result)
// }

// add( 2,4, function(value){
//     console.log("sum is: ", value);
// });


// 2. Returns a function as its result
function add(a ,b, ab){  //here ab is callback function
    let result = a + b;
    ab(result);
    return ()=> console.log("result is:",result);
}

let resultFunction = add( 2,4, ()=> {});

resultFunction();