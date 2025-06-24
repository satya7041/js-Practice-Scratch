// Currying
// example-1
 //using before ES6 way
// function add(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return a+b+c+d;
//       }
//     }
//   }
// }


// console.log(add(2)(3)(4)(5))

//using ES6 modern js way
// const add = (a)=> (b)=> (c) => (d)=> a+b+c;
// console.log(add(2)(3)(4)(5))

// ex-2
 //using before ES6 way
// function sendAutoMail(to){
//   return function(subject){
//     return function (body){
//       console.log(`Sending Email to ${To} with subject ${subject}: ${body}`)
//     }
//   }
// }

// let step1 = sendAutoMail("Satyamdev12@gmail.com");
// let step2 = step1('New Order Confirmation: ');
// step2('Hey Satyam, Here is something for you');

//using ES6 js modern way
const sendAutoMail = (to) => (subject) => (body) =>
 
  //if writing console.log then don't write in last below step2 

//  console.log( `Sending Email to ${to} with subject ${subject}: ${body}`);

// but if you don't write here then write console.log in last
 `Sending Email to ${to} with subject ${subject}: ${body}`

let step1 = sendAutoMail("Satyamdev12@gmail.com");
let step2 = step1('New Order Confirmation: ');
// step2('Hey Satyam, Here is something for you'); //we write console.log inside arrow so don't need here
console.log(step2('Hey Satyam, Here is something for you'));  //because we don't write console.log in arrow function, that's
//  why need to write here
