// 15 % 4	15 ÷ 4 = 3 , remainder=	3, so 15%4=3
//but if 4%15 then not possible so 4%15= 4
let numberOne, numberTwo;
function GcdFind(){
  numberOne = parseInt(document.getElementById("numOne").value);
  numberTwo = parseInt(document.getElementById("numTwo").value);
  console.log("numbers are: ", numberOne,numberTwo);
  const gcd = GcdCal(numberOne);
  console.log("gcd is: ",gcd);
  document.getElementById("message").textContent = `GCD of given two numbers is: ${gcd};`

}

function GcdCal(numberOne){
  while (numberTwo !==0) {
    let temp = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = temp;
  }

  return numberOne;

}