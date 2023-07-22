/**
 * Task file to solve problems on Anonymous Functions.
 */
// 1. Print odd numbers in an array.

/**
 * @param inputArr - Array of positive numbers.
 */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const oddNumbers = function (inputArr) {
//   let i = 0;
//   while (i < inputArr.length) {
//     if (inputArr[i] % 2 !== 0) {
//       console.log(inputArr[i]);
//     }
//     i++;
//   }
// };

// oddNumbers(numbers);

// Outputs
// 1
// 3
// 5
// 7
// 9
// 11

// 2. Convert all the strings to title caps in a string array

/**
 * @param inputArr - Array of strings.
 */
// const courseNames = ["telecommunications", "industry", "development", "stack"];
// const titleCaps = function (inputArr) {
//   let i = 0;
//   while (i < inputArr.length) {
//     inputArr[i] = inputArr[i][0].toUpperCase() + inputArr[i].slice(1);
//     i++;
//   }
//   console.log(inputArr);
// };
// titleCaps(courseNames);
// Outputs
// [ 'Telecommunications', 'Industry', 'Development', 'Stack' ]

// 3. Sum of all numbers in an array

/**
 *  @param numbers - Array of positive numbers
 */

// const numbers = [100, 200, 300, 400, 500];
// const sum = function (inputArr) {
//   let i = 0;
//   let sumofArr = 0;
//   while (i < inputArr.length) {
//     sumofArr = sumofArr + inputArr[i];
//     i++;
//   }
//   console.log(sumofArr);
//   return sumofArr;
// };

// sum(numbers);

// Outputs
// 1500

// 4. Return all the prime numbers in an array

/**
 *  @param inputArr - Array of positive numbers
 *  @param number - Each array element of inputArr
 */

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const isPrime = function (number) {
//   if (number >= 1) {
//     if (number <= 2) {
//       return true;
//     } else {
//       for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }
// };
// const primeNumber = function (inputArr) {
//   let i = 0;
//   const primeArr = [];
//   while (i < inputArr.length) {
//     if (isPrime(inputArr[i])) {
//       primeArr.push(inputArr[i]);
//     }
//     i++;
//   }
//   console.log(primeArr);
// };
// primeNumber(numbers);

// Outputs

// [
//     1,  2,  3,  5, 7,
//     11, 13, 17, 19
//   ]

// 5. Return all the palindromes in an array

// const numbers = [2, 121, 3, 55, 313, 567, 909, 111];
/**
 *  @param {number} number
 *  Each array element of inputArr
 *
 * @returns {boolean}
 */
// const isPalindrome = function (number) {
//   let i = 0;
//   let j = number;
//   while (j > 0) {
//     let lastdigit = j % 10;
//     i = i * 10 + lastdigit;
//     j = Math.floor(j / 10);
//   }
//   if (number == i) {
//     return true;
//   }
//   return false;
// };
/**
 *  @param {Array} inputArr
 *  Array of intergers
 *
 * @returns {Array} palindArr - Palindrome numbers alone.
 */
// const palindrome = function (inputArr) {
//   let i = 0;
//   const palindArr = [];
//   while (i < inputArr.length) {
//     if (isPalindrome(inputArr[i])) {
//       palindArr.push(inputArr[i]);
//     }
//     i++;
//   }
//   console.log(palindArr);
// };
// palindrome(numbers);

// Outputs

// [
//     2, 121,   3, 55,
//   313, 909, 111
// ]

// 6. Return median of two sorted arrays of the same size.

/**
 *  @param {Array} arrayOne
 *  Array of numbers.
 *  @param {Array} arrayTwo
 *  Array of numbers.
 * @returns {number} median
 */

// const arrayOne = [23, 14, 5, 61];
// const arrayTwo = [8, 10, 6, 9, 7];

// const getMedian = function (inputArr, compareArr) {
// // Entire logic will work only 2 array has same size.
// // If need to check for 2 different size array then comment the IF CASE
// // and keep only ELSE.
//   if (inputArr.length !== compareArr.length) {
//     console.log(inputArr);
//     console.log(compareArr);
//     console.log("false");
//     return false;
//   } else {
//     let median = 0;
//     const inputArr2 = [...inputArr, ...compareArr];
//     inputArr2.sort(function (a, b) {
//       return a - b;
//     });
//       // Since the Sorting of 6,7,8,9,10 return 10 as first, considering 1 is lowest value.
//     let n = Math.floor(inputArr2.length / 2);

//     if (inputArr2.length % 2 === 0) {
//       median = (inputArr2[n - 1] + inputArr2[n]) / 2;
//     } else {
//       median = inputArr2[n];
//     }
//     console.log('Median',median);
//  }
// };
// getMedian(arrayOne, arrayTwo);

// Outputs
// [ 23, 14, 5, 61, 82 ]
// [ 8, 10, 6, 9, 7 ]
// Median 9.5

// [ 23, 14, 5, 61 ]
// [ 8, 10, 6, 9, 7 ]
// Median 9

// 7. Remove duplicates from an array

/**
 *  @param {Array} inputArray
 *  Array of numbers.
 *
 * @returns {Array} Array without duplicates.
 */

// const numbers = [3, 45, 65, 23, 65, 3, 23, 900, 121, 678];

// const removeDuplicates = function (inputArr) {
//   let i = 0;
//   let tempArr = [];
//   while (i < inputArr.length) {
//     if (tempArr.indexOf(inputArr[i]) === -1) {
//       tempArr.push(inputArr[i]);
//     }
//     i++;
//   }
//   console.log(tempArr);
//   return tempArr;
// };

// removeDuplicates(numbers);

// Output

// [
//     3,  45,  65, 23,
//   900, 121, 678
// ]

// 8. Rotate an array by k times

/**
 *  @param {Array} inputArray
 *  Array of numbers.
 * @param {number} k
 *  Number to rotate the array.
 *
 * @returns {Array} Rotated array.
 */
// const numbers = [1, 2, 3, 4, 5];
// const rotateArray = function (inputArray, k) {
//   for (let i = 0; i < k; i++) {
//     inputArray.unshift(inputArray.pop());
//   }
//   console.log(inputArray);
//   return inputArray;
// };

//rotateArray(numbers, 3);
//rotateArray(numbers, 2);
//rotateArray(numbers, 1);
//rotateArray(numbers, 4);

// Output
// [ 3, 4, 5, 1, 2 ]
// [ 4, 5, 1, 2, 3 ]
// [ 5, 1, 2, 3, 4 ]
// [ 2, 3, 4, 5, 1 ]
