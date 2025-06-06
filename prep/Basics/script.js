// x = 5;
// console.log(`Value of X is: ${x}`);
// let x = 20;
// console.log(`Value of X2 is: ${x}`);

//function declaration 
function add(...numbers){ //spread operator
    let sum = 0
   for (let index = 0; index < numbers.length; index++) {
     sum +=numbers[index];
    }
    console.log("sumare s: ",sum)
    return sum;
    
}
let result = add(20,33,54,4, 4,2,3,1,23,2,2,333,3);
console.log("total ",result);
