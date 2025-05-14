
let number; 
function find(){
    number = document.getElementById("number").value;
    console.log("number is",number)
    let factorial=1;
    for (let i = number; i>= 1; i--) {
        factorial *=i
        
    }
    document.getElementById("message").textContent=`Factorial of ${number} is: ${factorial}`;
    document.getElementById("message").style.color="green"
}