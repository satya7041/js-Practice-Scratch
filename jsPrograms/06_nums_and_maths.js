const score=400
// console.log(score);

const balance=new Number(100)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(2)) //add decimal and 00

const otherNumber=123.599
// console.log(otherNumber.toPrecision(3)) //like=>123.444=123, 123.544=>124  it precise the value that how many numbers are there before decimal and 
// gives precise value on the basis of decimals number

const hundreds=1000000
// console.log(hundreds.toLocaleString()) // =>1,000,000 it's default method
// console.log(hundreds.toLocaleString('en-IN')) //Indian format =>10,00,000

//++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-44)); //Convert -ve to +ve value only. it means not also convert +ve to -ve

// console.log(Math.round(4.5)); //give round of value like 4.3 is=>5

// console.log(Math.ceil(4.1)); //gives greater value like 4.1 gives=>5

// console.log(Math.floor(4.1)); //gives only lesser value like 4.1 give=>4, 4.9=>4

// console.log(Math.min(4,3,8,7,9));//min value from array =>3

// console.log(Math.max(4,3,8,7,9));//max value from array =>9

// console.log(Math.random()); //gives random value between 0 to 1 include decimal also

// console.log(Math.random()+1); //gives atleast 1 not zero

// console.log(Math.random()*10+1); 

const min=10
const max=20

console.log(Math.floor (Math.random() * ( max - min + 1 ))+ min); //give >=10 and <=20 random values


