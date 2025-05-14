// 15 % 4	15 ÷ 4 = 3 , remainder=	3, so 15%4=3
//but if 4%15 then not possible so 4%15= 4
let text;
function reverseString(){
     text = document.getElementById("string").value;
    console.log("String is:",text)
    let reverseString = '';
  for (let index = text.length-1; index >= 0; index--) {
     reverseString += text[index];
     
    }

    console.log("rev is: ", reverseString)
    const isPalindrome = text === reverseString
    console.log("Is Palindrome: ",   text === reverseString)

  document.getElementById("message").textContent = `This reverse string is: "${reverseString}" `+
  (isPalindrome?  "and it is Palindrome": " and it's not Palindrome")

}