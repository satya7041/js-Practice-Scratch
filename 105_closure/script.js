// function main() {
//   const name = "Hello";

//   function sayMyName() {
//     console.log(name);
//   }

//   return sayMyName; // ← bas return kiya, run nahi kiya
// }

// let fn = main();   // fn == sayMyName
// fn();              // sayMyName() call => prints "Hello"

// function main(name) {

//   function sayMyName() {
//     console.log(name);
//   }

//   return sayMyName; // ← bas return kiya, run nahi kiya
// }

// let consoleName = main("Satyam Srivastava"); //we are creating function through function
// consoleName();
// consoleName();


function adder(num) {

  function add(b) {
    console.log(num + b);
  }

  return add; // ← bas return kiya, run nahi kiya
}

let addTo5 = adder(5); //we are creating function through function
addTo5(2); //7
addTo5(10);//15
