// function objectFunc(){
//   console.log("js working")
//   const objOne = {}; //literal object syntax for creation
//   const person = new Object(); // Constructor syntax for object creation
//   // both used but Sometimes new Object() used when you want to create an object
//   //  with a specific constructor or prototype—but that's rare. but recomment  to
//   // Use object literals ({}) unless you have a specific reason to use the constructor form.
//   person.firstName = "Satyam";
//   person.lastName = "srivastava";
//   // console.log("Personobject: ", person)
//   objOne.Job = "Software Engineer";
//   objOne.details = { location: 'India' };
//   // console.log("objOne is : ", objOne)
//   objOne.message ="Hello";
//   // console.log("objOne : ", objOne.Job,)
//   let shallowCloneOne = {...objOne}; //shallow clone
//   console.log("shallow clone is: ", shallowCloneOne)
//   objOne.details.location = "USA";
//   let deepClone = JSON.parse(JSON.stringify(objOne));
//   console.log("deep clone is: ", deepClone)
//   objOne.details.location = "URussiSA";
//   console.log("2nd deep clone is: ", deepClone)
//   console.log("2nd shallow clone is: ", shallowCloneOne)
//   console.log("original object is ", objOne)
// }

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    console.log("this is not object nor array")
    return obj; // return primitive types as-is
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    console.log("this is array")
    return obj.map(item => deepClone(item));
  }
  
  // Handle objects
  const clone = {};
  for (let key in obj) {
    console.log("this is object")
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]); // recursively clone each property
    }
  }

  return clone;
} 
function objectFunc(){
//    const original = {
//   name: "Alice",
//   info: {
//     age: 25,
//     hobbies: ["reading", "games"]
//   }
// };
   const original = [1,2,3,45]

const copied = deepClone(original);

console.log("deep clone object are: ",copied);                // Same content as original
console.log("original object are: ",original);                // Same content as original
console.log(copied === original);   // false (different object)
console.log(copied.info === original.info); // false (deep copied)
}