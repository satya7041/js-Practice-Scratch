
let number; 
function find(){
    number = document.getElementById("number").value;
    console.log("number is",number)
    if (number < 2) {
        document.getElementById("message").textContent = `${number} is not a prime number (must be greater than 1).`;
        return;
    }
    for (let i = 2; i<= Math.sqrt(number); i++) {
        console.log(`sqare root of ${number} is: ${Math.sqrt(number)}`)
        if (number % i===0) {
            console.log(`${number} is not Prime number`)
         document.getElementById("message").textContent=`${number} is not Prime number`;
         document.getElementById("message").style.color="red"
         return;
        } 
        
        
    }
    document.getElementById("message").textContent=`${number} is Prime number`;
    document.getElementById("message").style.color="green"
}