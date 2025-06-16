// if number(or num) is divided by 3(num%3==0),then Fizz, if num%5 then buzz 
// if num%3==0 && num%5 ==0 then FizzBuzz else print num
let text;
function reverseString(){
     text = document.getElementById("string").value;
    console.log("String is:",text)
    let reverseString = '';
  for (let index = text.length-1; index >= 0; index--) {
     reverseString += text[index];
     
    }
    console.log("rev is: ", reverseString)
  document.getElementById("message").textContent = `Reverse of given string is: "${reverseString}"`
}