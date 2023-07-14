/**
 * Task file to solve problems on Arrow Functions.
 */
// 1. Print odd numbers in an array.

/**
 * @param inputArr - Array of positive numbers.
 */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const oddNumbers = (inputArr) => {
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
// const titleCaps = (inputArr) => {
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
// const sum = (inputArr) => {
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

// const isPrime = (number) => {
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
// const primeNumber = (inputArr) => {
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
// const isPalindrome = (number) => {
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
// const palindrome = (inputArr) => {
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
