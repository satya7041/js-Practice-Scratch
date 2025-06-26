// IIFE

// (function add(a,b){  //this is IIFE
//   console.log(a+b);
// }) (2,3);

// ( function say(){  //this also IIFE
//   let surname = "srivastava"
//   console.log("Hi.. Satyam", surname);
// })();


// //using ES6 function
// (()=>console.log("I am es6"))(); //this is also IIFE

// const value = (()=>100)();  //if return in IIFE then use like this
// console.log(value)


//async IIFE
// const data = (async()=> await fetch()); //this also IIFE

// private and public variables and methods without using IIFE
// const atm = function(initialBalance){
//   let balance = initialBalance; //private variable
//   function withdraw(amt){
//     if (amt> balance) {
//       return"Are you sure?"
//     } else {
//       balance -= amt;
//       return balance;
//     }
//   }
//   return {withdraw};
// }

// const piyush = atm(1000);
// console.log(piyush.withdraw(300));
// console.log(piyush.withdraw(50));

// private and public variables and methods using IIFE
const atm = (function(initialBalance){
  let balance = initialBalance; //private variable
  function withdraw(amt){
    if (amt> balance) {
     return"Are you sure?"
    } else {
      balance -= amt;
      return balance;
    }
  }
  return {withdraw};
})(1000)


console.log(atm.withdraw(50));