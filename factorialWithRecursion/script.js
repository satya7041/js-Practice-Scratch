
let number; 
function findFactorial(){
    number =parseInt(document.getElementById("number").value);
    console.log("number is",number)
    let factorial = FactorialCalculate(number);
    document.getElementById("message").textContent=`Factorial of ${number} is: ${factorial}`;
    document.getElementById("message").style.color="green";
}

function FactorialCalculate(number){
    console.log("fact number:",number);
    // let factorial=1;
    if (number==0 || number == 1) {
        return 1;
    }
    console.log(number);
    return number* FactorialCalculate(number-1);
    
}