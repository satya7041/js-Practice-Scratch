const name="hitesh"
const repoCount=50
// console.log(name+ repoCount+ "VAlue") //outdated method
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Modern method and this method is called String interpolation

const gameName=new String('Hiteshhc') //declaration of string
// console.log(gameName)
// console.log(gameName[0]); //for key value
// console.log(gameName.__proto__); //to get object

// console.log(gameName.toLowerCase()); //change made in copy var
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(2)); //char at index 2
// console.log(gameName.indexOf('t')); //to find the position of char

const newString=gameName.substring(1,4); //4 index not included
console.log(newString);

const anotherString=gameName.slice(-8,4) // we can take -ve values also
console.log(anotherString);

const newStringOne="  hitesh "
console.log(newStringOne);
console.log(newStringOne.trim()) // remove spaces

const url="https://hitesh.com/hitesh%20choudhary" //%20 is automatic set by browser when we run code, where you put space
// to remove %20 we use =>

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh')) // output=>true -->to check that the string value is available in url or not
console.log(url.includes('Chai')) //output=>false

const stringname="Satyam-Srivastava-javascript"
console.log(stringname.split('-')); //split string on the basis of -
