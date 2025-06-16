// Inheritance learning using Es6+(Modern way)

// class Animal{
//   constructor(name){
//     this.name = name;
//   }
//   speak(){
//     console.log(`${this.name} make a noise..`);
//   }
  
// }
// class Dog extends Animal{
//   speak(){
//     console.log(`${this.name} barks..`);
//   }
// }

// const animal = new Animal("Taffi");
// const dog = new Dog("Betu");
// animal.speak();
// dog.speak();

// using super keyword
// if used constructor in child class then should use super()
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // ✅ must be first
    this.breed = 'Labrador';
  }
}

const animal = new Animal("Taffi");
const dog = new Dog("Betu");
console.log(animal.name)
console.log(dog.name)

