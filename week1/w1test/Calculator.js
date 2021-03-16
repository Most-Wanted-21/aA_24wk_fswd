// Build a calculator function that takes in three arguments: num1, operator, and num2.
// Each number will be an integer and the operator will be +, -, * or /.Your function
//   will perform the calculations between the two numbers and return the answer.
//    < br > If the operator is invalid, return the string "Invalid Operator".

// // CALCULATOR
// function calculator(num1, operator, num2) {
//   if (operator === "+") {
//       return num1 + num2;
//   } else if (operator === "-") {
//       return num1 - num2;
//   } else if (operator === "*") {
//       return num1 * num2;
//   } else if (operator === "/") {
//       return num1 / num2;
//   } else {
//       return "Invalid Operator";
//   }
// }
// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE
// let score = 0;
// if (calculator(123, "+", 456) === 579) score++;
// if (calculator(987, "-", 654) === 333) score++;
// if (calculator( 99, "*",   3) === 297) score++;
// if (calculator(111, "/",   3) ===  37) score++;
// if (calculator( 42, "?", 42) === "Invalid Operator") score++;
// console.log("You have scored " + score + "/5 points.");

// // CALCULATOR (MY SUBMISSION)
// function calculator(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     let num = array[i];
//     sum += num;
//   }
//   return sum;
// }
// function sumArrayWhile(array) {
//   let sum = 0;
//   let i = 0;
//   while (i < array.length) {
//     let num = array[i];
//     sum += num;
//     i += 1;
//   }
//   return sum;
// }
// let score = 0;
// if (calculator([123, "+", 456]) === 579); score++;
// if (calculator([987, "-", 654]) === 333); score++;
// if (calculator([ 99, "*",   3]) === 297); score++;
// if (calculator([111, "/",   3]) ===  37); score++;
// if (calculator([ 42, "?", 42]) === "Invalid Operator"); score++;
// console.log("You have scored " + score + "/5 points.");
