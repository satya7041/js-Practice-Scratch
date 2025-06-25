// Composition 
//without using composition
// function multiply(a,b){
//   return a + b;
// }

// function square(val){
//   return val * val;
// }

// function multiplyTwoAndSquare(a,b){
//   return square(multiply(a,b));
// }

// console.log(multiplyTwoAndSquare(2,3));

// //with composition function for two function--------------
// function multiply(a,b){
//   return a * b;
// }

// function square(val){
//   return val * val;
// }
//  //below is composition function using before Es6 way js
//  // function composeTwoFunction(fn1, fn2){
//   //   return function(a,b){
//     //     return fn2(fn1(a,b));
//     //   }
//     // }
//     // const task = composeTwoFunction(multiply,square);
//     //   console.log(task(3,3));
    
//     //below is composition function using Es6 modern js way
//     const c2f = (fn1, fn2)=> (a,b) => fn2(fn1(a,b))
//     const task = c2f(multiply,square);
//       console.log(task(2,2));


//with composition function for unlimited function--------------
function multiply(args){
  return args[0] * args[1];
}

function square(val){
  return val * val;
}
 //below is composition function using before Es6 way js-----

//  function compose(...fns){
//     return function(...value){
//         return fns.reduce((a,b)=> b(a), value);
//       }
//     }
//     const task = compose(multiply,square);
//       console.log(task(3,2));
    
    //below is composition function using Es6 modern js way
    const composeAll = (...fns) => (...val)=> fns.reduce((a,b)=> b(a),val)
    // const task = composeAll(multiply,square);
    const task = composeAll(multiply,square, function(result){return result+1}); //here we also add one more function
      console.log(task(2,4));