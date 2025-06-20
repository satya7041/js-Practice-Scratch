// Convert Temperatures to Celsius
// function arrayMap() {
//     let fahrenheitTemp = [32,68,100,212,147,238];
//     let ConToCelcius = fahrenheitTemp.map(function(num) {
//       return(num - 32) * 5/9 ;
//   });

//   console.log("Original array:", fahrenheitTemp);
//   console.log("Multiple of each array with 3:", ConToCelcius);
//   }
  

//  Find the Length of Each String (for map function)
// let words = ["apple", "banana", "cherry", "date"];
// function arrayMap() {
//     let lengthCal = words.map(function(data) {
//       return data.length;
//   });

//   console.log("Original array:", words);
//   console.log("Length of each string are: ", lengthCal);
//   }

// for filter function

// const numbers = [2,3,5,6,8,12,16];
// function arrayMap(){

//   const even = numbers.filter(  
//     function(num){
//       return num%2 ==0;
//     }
//   )
//   console.log(even);
// }

// function arrayMap(){
//   const array = [2,5,4,56,5,9,1];
//  array.sort((a,b)=> {
//   return b-a; 
//  });
//   console.log(array);
// }
  
//this is for promise
// function arrayMap(){
//  const oderFood = new Promise(function(resolve, reject){
//     let foodIsAvailable = true;
//     if (foodIsAvailable) {
//       resolve("Food is Available, you can take or eat")
//     } else {
//       reject("Sorry!, Food is not available")
//     }

//  })

//  oderFood.then(function(message){
//   console.log("Success", message)
//  })
//  .catch(function(error){
//   console.log("Error: ", error);
//  })
// }
  

// Find the second largest element in an array.

// function arrayMap(){
//     const array = [33,21,1,3,3,21,65,55];
//     if (array.length < 2) {
//       console.log("Array must have at least two elements");
//       return;
//     }
//     const unique = [...new Set(array)];
//     console.log("unique is:", unique)
//     console.log("unique is:", typeof unique)
//     console.log("another wau to check ",Array.isArray(unique)); // true
//     console.log("unique is:", unique[2])

//    unique.sort((a,b)=> {
//     return b-a; 
//    });
//     console.log(unique);
//     console.log("the second largest element in array is: ",unique[1]);
//   }

//learn about shallow copy
  // function arrayMap(){
  //   const original = [1, 2, { a: 10 }];
  //   const copy = [...original]; // shallow copy
    
  //   copy[2].a = 21;
  //   copy[0] = 9;
    
  //   console.log(original); // [1, 2, { a: 999 }] ❗️ changed
  //   console.log(copy);     // [1, 2, { a: 999 }]
    
  // }

  // Rotate an array to the right by k steps.
  
  //using build in methoda
  
  // function arrayMap(){
  //    let org_arr = [1, 2, 3, 4];  // Start with the original array
  //   let k = parseInt(document.getElementById("num").value);  // Get number of rotations from input
    
  //   console.log("Original array:", org_arr);
  //   console.log("Number of rotations:", k);

  //   for (let i = 0; i < k; i++) {  // Repeat rotation k times
  //       let last = org_arr.pop();     // Remove last element
  //       org_arr.unshift(last);        // Add it to the front
  //     }
  //     let last = org_arr[org_arr.length-1];
  //   org_arr[0] = last;
  //   console.log("Rotated array:", org_arr);  // Show result
  // }
  


  // Rotate an array to the right by k steps.
  //without using build in methods
  // function arrayMap(){
  //    let org_arr = [1, 2, 3, 4];  // Start with the original array
  //   let k = parseInt(document.getElementById("num").value);  // Get number of rotations from input

  //   for (let rotation = 0; rotation < k; rotation++) {
  //     let last = org_arr[org_arr.length - 1] ;
  //     console.log("last is",last)
  //     for (let index = org_arr.length-1; index > 0; index--) {
  //        org_arr[index] = org_arr[index-1];
        
  //     }
  //     org_arr[0] = last;
      
  //   }
  //   console.log("Rotated by: ",k, " times in right sides: ", org_arr)
   
  // }



  // Merge two sorted arrays into one sorted array
    function arrayMap(){
      const arrOne = [4, 1, 5, 6]; 
      arrOne.sort((a,b)=>a-b)
      console.log("arrayOne sorted: ", arrOne)
      const arrTwo = [31, 0, 21, 43];  
      arrTwo.sort((a,b)=>a-b)
      console.log("arrayTwo sorted: ", arrTwo)
      let merge = arrOne.concat(arrTwo)
      merge.sort((a,b)=> a-b);
      console.log("Merged two sorted arrays are:", merge)

    }
