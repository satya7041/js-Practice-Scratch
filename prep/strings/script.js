// Check the two strings are anagram or not

// function runFunction(){
//   console.log("Hello");

//   const str1 = document.getElementById("str1").value;
//   const str2 = document.getElementById("str2").value;

//   console.log("str1 and str2 are:", str1, str2);

//   // Normalize and sort the strings
//   const sort1 = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
//   const sort2 = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

//   console.log("Sorted str1:", sort1);
//   console.log("Sorted str2:", sort2);

//   if (sort1 === sort2 && str1 !== str2) {
//     document.getElementById("message").textContent = "The strings are anagrams (but not identical).";
//   } else if (sort1 === sort2) {
//     document.getElementById("message").textContent = "The strings are anagrams (including identical).";
//   } else {
//     document.getElementById("message").textContent = "The strings are NOT anagrams.";
//   }
// }


//Compress the string

// function runFunction(){
//   console.log("Hello String");
//   const str1 = document.getElementById("str1").value;
//   console.log("String is: ", str1);
//   const inChar = str1.split('');
//   const compress ={}
//   console.log("total are: ", inChar)
//   for (let item in inChar){
//     compress(item) = (compress(item) || 0 ) + 1
//   }
// console.log("total are: ", compress)
// }

// find longest substring
// function Find(){
//  console.log("Hello")
      
// }

//make first letter capital in string
function Convert() {
    console.log("Hello");

    const data = document.getElementById("str1").value;
    console.log("incoming data: ", data);

    const changing = data.split(' ');  // Split sentence into words
    console.log("split words: ", changing);

    const capitalizedWords = changing.map(word => {
        if (word.length === 0) return "";  // handle empty strings (e.g. multiple spaces)
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    const finalResult = capitalizedWords.join(' ');
    console.log("Final result: ", finalResult);

    // Optionally display result in HTML
    document.getElementById("message").innerText = finalResult;
}
