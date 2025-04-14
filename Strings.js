// Reverse a string: "hello" → "olleh"
// let string = "hello";
// let reverse = "";
// for (let index =string.length-1; index >= 0; index--) {
//      reverse += string[index];
// }
// console.log(reverse);

// Check if a string is a palindrome.
// let string = "121";
// let reverse = "";

// for (let index = string.length-1; index>=0; index--) {
//   reverse += string[index];
    
// }
// console.log("reverse string are: ",reverse);

// if (string.toLowerCase() === reverse.toLowerCase()) {
//     console.log("it is palindrome",string)
// } else {
//     console.log("it is not palindrome",reverse)

// }

// Count vowels in a string
//using if statement
// let string = "Ajay";
// let count = 0;
// const lowerCase = string.toLowerCase();
// for (let index = 0; index < lowerCase.length; index++) {
//    if (lowerCase[index]==='a' || lowerCase[index]==='e' || lowerCase[index]==='i' ||
//     lowerCase[index]==='o' || lowerCase[index]==='u'
//    ) {
//     count++;
//    }
    
// }
// console.log("vowels are:", count)


//using vowels in array
let string = "Poonam";
let count = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
const lowerCase = string.toLowerCase();

for (let i = 0; i < lowerCase.length; i++) {
    if (vowels.includes(lowerCase[i])) {
        count++;
    }
}

console.log("vowels are:", count);

