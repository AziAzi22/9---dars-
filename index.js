// 1 - masala

// function func(arr, R) {
//   let min = Math.abs(arr[0] + arr[1] - R);
//   let result = [arr[0], arr[1]];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (Math.abs(arr[i] + arr[i + 1] - R) < min) {
//       result = [];
//       result.push(arr[i], arr[i + 1]);
//       min = Math.abs(arr[i] + arr[i + 1] - R);
//     }
//   }
//   return result;
// }
// console.log(func([23, 43, 11, 45, 4, 32, 54], 35));

// 2 - masala

// function evenn(arr) {
//   let em = null;
//   for (const element of arr) {
//       if (element % 2 === 0) {
//         em = element;
//         break;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr[i] += em;
//     }
//   }
//   return arr;
// }
// console.log(evenn([1, 4, 5, 2, 33, 1, 8, 22]));

// 3 - masala

// function func(arr) {
//   let x = null;
//   for (const element of arr.reverse()) {
//     if (element % 2 === 1) {
//         x = element;
//         break;
//     }
//   }
//   if (x === null) {
//     return arr.reverse();
//   }
//   let result = []
//   for (const element of arr) {
//     if (element % 2 === 1) {
//         result.push(element + x);
//     }
//   }
//   return result.reverse();
// }
// console.log(func([2, 55, 2, 21, 44, 3]));
// console.log(func([2, 4, 6, 10]));

// 4 - masala

// function func(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (const element of arr) {
//     if (element < min) min = element;
//     if (element > max) max = element;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === min) {
//       arr[i] = max;
//     } else if (arr[i] === max) {
//       arr[i] = min;
//     }
//   }
//   return arr;
// }
// console.log(func([23, 43, 12, 56, 64]));

// 5 - masala

// function func(arr) {
//   if (arr === null || arr.length < 2) {
//     return `Error`;
//   }
//   let min = arr[0];
//   let max = arr[0];
//   let minIndex = 0;
//   let maxIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//       maxIndex = i;
//     }
//   }
//   if (maxIndex < minIndex) {
//     let temp = maxIndex;
//     maxIndex = minIndex;
//     minIndex = temp;
//   }
//   for (let i = minIndex + 1; i < maxIndex; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }
// console.log(func([2, 54, 4, 11, 1, 34, 11]));

// 6 - masala

// function func(arr) {
//   if (arr === null || arr.length < 2) {
//     return `Error`;
//   }
//   let min = arr[0];
//   let max = arr[0];
//   let minIndex = 0;
//   let maxIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//       maxIndex = i;
//     }
//   }
//   if (maxIndex < minIndex) {
//     let temp = maxIndex;
//     maxIndex = minIndex;
//     minIndex = temp;
//   }
//   let start = minIndex + 1;
//   let end = maxIndex - 1;
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
//   return arr;
// }
// console.log(func([2, 54, 4, 5, 7, 11, 1, 34, 11]));

// 7 - masala

// function removeNumber(arr, k) {
// let result = []
// for (let i = 0; i < arr.length; i++) {
//     if (i !== k) {
//         result.push(arr[i])
//     }
// }
// return result
// }
// console.log(removeNumber([54, 23, 66, 12], 1));
// console.log(removeNumber([54, 23, 66, 12], 2));

// 8 - masala

// function removeDublicate(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1] || i === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDublicate([12, 43, 23, 54, 12]));
// console.log(removeDublicate([12, 43, 43, 23, 23, 54, 12, 12]));

// 9 - masala

// function threeElements(arr) {
//   let object = {};
//   for (const element of arr) {
//     object[element] ? object[element]++ : (object[element] = 1);
//   }
//   let result = [];
//   for (const key in object) {
//     if (object[key] >= 3) {
//       result.push(+key);
//     }
//   }
//   return result;
// }
// console.log(threeElements([12, 12, 44, 54, 44, 44, 2, 22, 2, 2]));

// 10 - masala

// function indexSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(indexSum([2, 43, 53, 23, 22, 53, 88, 10]));
