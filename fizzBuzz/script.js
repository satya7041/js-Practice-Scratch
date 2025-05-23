// if number(or num) is divided by 3(num%3==0),then Fizz, if num%5 then buzz 
// if num%3==0 && num%5 ==0 then FizzBuzz else print num
let number;
function calculate(){
     number = document.getElementById("num").value;
    console.log("number is:",number)
    if (number % 5 ==0 && number % 3 == 0) {
        document.getElementById("message").textContent = "FizzBuzz"
        document.getElementById("message").style.color = "green"
    } else if (number % 5 == 0) {
        document.getElementById("message").textContent = "Buzz"
        document.getElementById("message").style.color = "blue"
        
    } else if(number %3 ==0 ){
        document.getElementById("message").textContent = "Fizz"
        document.getElementById("message").style.color = "cyan"
        
    } else {
        document.getElementById("message").textContent = `Number is ${number}`;
        document.getElementById("message").style.color = "grey"

    }
}