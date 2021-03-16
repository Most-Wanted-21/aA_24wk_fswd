// QUESTION
// First, create a function called getAverage(nums) which takes a single array
// of numbers and returns the average. < br > Then, write a function highestAverage(numsList)
// that takes in a 2 - dimensional array of numbers and returns the index of the
// sub - array with the highest average value.Hint: You may use the getAverage function
//   as a helper function in the highestAverage function to solve the problem.

// // HIGHEST AVERAGE
// function getAverage(nums) {
//   let total = 0;
//   for (let i = 0 ; i < nums.length ; i++) {
//       total += nums[i];
//   }
//   return total / nums.length;
// }
// function highestAverage(numsList) {
//   let highestIndex = 0;
//   let currentHighestAverage = getAverage(numsList[0]);

//   for (let i = 1; i < numsList.length; i++) {
//       let average = getAverage(numsList[i]);
//       if (average > currentHighestAverage) {
//           highestIndex = i;
//           currentHighestAverage = average;
//       }
//   }
//   return highestIndex;
// }
// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE
// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];
// let score = 0;
// if (getAverage(arrayA) === 3) score++;
// if (getAverage(arrayB) === 1) score++;
// if (getAverage(arrayC) === 44) score++;
// if (getAverage(arrayD) === 8) score++;
// if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
// if (highestAverage([arrayA, arrayB]) === 0) score++;
// if (highestAverage([arrayA, arrayD]) === 1) score++;
// console.log("You have scored " + score + "/7 points.");

// // HIGHEST AVERAGE (MY SOLUTION)
// function getAverage(nums) {
//   if (nums.length === 0) {
//     return null;
//   }
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let e1 = nums[i];
//       sum += e1;
//   }
//   return sum / nums.length;
// };
//   let highestAverage = function(arr) {
//   let com = 1;

//   for (let i = 0; i < arr.length; i++) {
//       let subArr = arr[i];
//       for (let j = 0; j < subArr.length; j++) {
//           let num = subArr[j];
//           com <= num;
//       }
//   }
//   return com;
// }
// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];
// let score = 0;
// if (getAverage(arrayA) === 3) score++;
// if (getAverage(arrayB) === 1) score++;
// if (getAverage(arrayC) === 44) score++;
// if (getAverage(arrayD) === 8) score++;
// if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
// if (highestAverage([arrayA, arrayB]) === 0) score++;
// if (highestAverage([arrayA, arrayD]) === 1) score++;
// console.log("You have scored " + score + "/7 points.");
