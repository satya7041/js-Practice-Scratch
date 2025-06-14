//Objects


//Before ES6 


// Objects literals
//for creating mutli objects u need to specify each while using literals

// const person = { //{}object literals declare
//   fname : "Satyam",
//   lname : "Srivastava",
//   contact : "2938293020"
// }
// console.log(person);
// console.log(person.lname);

// for multiple object creation using, we used constructor function, which work as base blueprint
//for signal that this is constructor func we use PascalCasing


// function PersonBluePrint(fname, lname, contact, city){
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;
//   this.city = city;

//   this.details =  function(){
//     console.log("Person is: ", this.fname, this.lname)
//   }
// }

// const person1 = new PersonBluePrint("Shiva","Mahadev", "100201020","Kailash Mansarovar");
// const person2 = new PersonBluePrint("Shivam","Srivastava", "8745242522","London");
// const person3 = new PersonBluePrint("Satyam","Srivastava", "6598525452","NewYork");
// console.log("Person 1 data are: ", person1);
// console.log("Person 1 data are: ");
// person1.details()
// console.log("assume as child",typeof person1)
// console.log("blue base print",typeof PersonBluePrint)

// After ES6- preferred/or advised to use class keyword

class PersonBluePrint {
  constructor(fname, lname, contact, city) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.city = city;
  }
    getDetails(){
      console.log(`${this.fname} live in ${this.city} city`);
  }
}

const person1 = new PersonBluePrint("Shivam","Srivastava", "8745242522","London");
const person2 =new PersonBluePrint("Satyam", "Srivastava", "7472989130", "NewYork");
const person3 = new PersonBluePrint("Jon","Dev", "6598525452","Canada");
console.log("details pof person1 are: ", person1);
person1.getDetails();
console.log("details pof person2 are: ", person2);
person2.getDetails()
console.log("details pof person3 are: ", person3);
person3.getDetails()