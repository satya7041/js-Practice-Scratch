// Remove duplicates from an array
// let arr = ['1', '2', '1','1', '3', '4', '1'];

// for (let index = 0; index < arr.length - 1; index++) {
//     for (let j = index + 1; j < arr.length; j++) {
//         if (arr[index] === arr[j]) {
//             console.log('duplicate found at index', j)
//             console.log("befire j--",j);
//             arr.splice(j,1);
//             console.log(arr)
//             console.log("befire j--",j);
//             j--
//             console.log("after j--",j);
//         } else {
//             console.log('duplicate not found')


//         }


//     }

// }
// console.log("after remove dup arrays are:",arr)
// let arr = [5, 2,1, 3, 4];
// let max = arr[0];
// let min = arr[0];

// for (let index = 1; index < arr.length; index++) {
//     if (arr[index]> max) {
//         max = arr[index];
//     }
//     if (arr[index] <min) {
//         min  = arr[index];
//     }
// }
// console.log("Max:", max);
// console.log("Min:", min);

// Flatten a nested array (e.g., [1, [2, [3]]] to [1,2,3])
//first let try to access sub array of the outer array
let arr = [1, [2, [3, 4]], 5]
const flat = arr.flat(2);
console.log(flat);
