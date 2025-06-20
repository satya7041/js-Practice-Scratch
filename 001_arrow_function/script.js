// Learning Arrow Function

//first writing normal function

// function sayHello1(){
//     console.log("Hello! Satyam here..")
// }
// sayHello1()

// //now converting in arrow func
// const sayHello2 = () =>{
//     console.log("hello there.. Satyam here")
// }
// sayHello2();

//to add two numbers
// const add = (a,b) => {
//     return a + b;
// }
// console.log(`Sum of two numbers is: ${add(3,4)}`)

//we can write in one liner, and we don't need to write return keyword until we use parenthesis {}

// Note- like In normal function, we can't use arguments keyword for holding all dynamic values in arrays inside Arrow function,
// so, instead of arguments keyword, use ...(spread operator) for arrow function 

// console.log(`Sum of two numbers is: ${add(2,4)}`) 
// add();  
//  function add(){

//      console.log( 2+3);
//  } 

//about this keyword

// In arrow function-
// The arrow function inherits this from the scope where it was defined.

// That scope is the global scope (because it’s outside any other function).

// In the browser, the global this = window.
// so it gives output like in browser console- Window {window: Window, document: ..., etc.}

// const obj = {
//     value: 20,
//     myFunction:  hello = ()=>{
//         console.log("Hello", this)
//     }
// }
//  obj.myFunction()

//for regular function-

// When a regular function is called as a method of an object, this refers to that object.

// so, this inside helloMsg() points to obj.

// Therefore, you’ll see this in the console:

// Hello { value: 20, myFunction: [Function: helloMsg] }

const obj = {
    value: 20,
    myFunction:  function helloMsg (){
        console.log("Hello", this)
    }
}
 obj.myFunction()