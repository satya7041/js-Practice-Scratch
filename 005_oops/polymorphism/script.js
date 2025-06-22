// Polymorphism=> poly->Many, morphism-> forms
// Definition- Single function or method can work in different ways 
// Polymorphism=> two category-> 1- Function Overriding(Runtime Polymorphism), 2- Function Overloading(Simulated at Runtime)
// Simulated at runtime means-> like others languages, js does not truly support function overloading, but we can imitate(mimic) that
//  behavior by writing smart code

// Function Overriding(Runtime Polymorphism) code

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() { //function Overriding
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {  //function Overriding
        console.log("Cat meows");
    }
}
//  print using loop

// let animals = [new Dog(), new Cat(), new Animal()];

// animals.forEach(animal => animal.speak());

//or print manually

// const dog = new Dog();
// const cat = new Cat();
// const animal = new Animal();
// dog.speak()
// cat.speak()
// animal.speak()

// Function Overloading(Simulate at runtime)=> Function overloading (simulated at runtime) in JavaScript is when a 
// single function is written in a way that it can accept different numbers or types of arguments,
//  and behaves differently based on the arguments passed during the function call.

// function greet(name, age) {
//     if (age === undefined) {
//         console.log(`Hello, ${name}`);
//     } else {
//         console.log(`Hello, ${name}. You are ${age} years old.`);
//     }
// }

// greet("Alice");            // Hello, Alice
// // console.log(greet(name));
// greet("Bob", 30);          // Hello, Bob. You are 30 years old.
