    //Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3 // not consider as float or double,both consider as number

const isloggedIn=false
const outsideTemp=null //null means empty not zero(0), when check typeof, result as object
let userEmail; //it is undefined ,because value not declare

const id=Symbol("123")
const anotherId=Symbol("123")
// console.log(id===anotherId) //not same symbol both different

const BigInt=32646464648451513434n


//Note-> Js is dynamic type, because the datatype of the variable are determined by the value 

//Refernce type ( Non-primitive)
//Every non-primitive datatype is function datatyep but if check by typeof it shows as object or say objectFunction.

// Array, Objects, Functions

const heros=["shaktiman","Nagraaj","tatya bichu"]; // it is Arrays

//Which comes under curly braces( {} ) are consider as object

let myObj ={
    name:"Hitesh",
    age: 22,
}// this is object

const myFunction=function(){
    // console.log("Hello World")
}
// console.log(typeof scoreValue)
// console.log(typeof isloggedIn)
// console.log(typeof outsideTemp)
// console.log(typeof id)
// console.log(typeof anotherId)
// console.log(typeof BigInt)
// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)

// ****************************************************** //
//  Stack(all primitive DT uses stack as memory), Heap(all non-primitive DT uses Heap as memory) 
// in Stack= we get copy of variable which we declare//
//   in Heap=>if a object or anything are placed in 
// Heap then it give reference of original value means any changes we made the original value is changed

let myYoutubename="hiteshChoudhary" //primitve DT so use stack

let anothername=myYoutubename  //referencing to myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne={   //goes to heap 
    email: "user@google.com",
    upi: "user@ybi"
}
let userTwo=userOne //reference to userOne in heap

userTwo.email= "hitesh@googel.com" //due to reference the value of boh is same
console.log(userOne) // Output=> email: 'hitesh@googel.com', upi: 'user@ybi'
console.log(userTwo) // Output=> email: 'hitesh@googel.com', upi: 'user@ybi'