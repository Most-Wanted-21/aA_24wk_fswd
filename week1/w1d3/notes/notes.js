/*
Instructions:
Take the array defined below and
  1. Remove the first dog
  2. Add "Biff" and "Buster" to the end
  3. Add "Luna" to the beginning
  4. Remove Buster
Then print the array


//Code Below this line

const dogs = ['Rosie', 'Copper']

dogs.shift();
dogs.push('Biff', "Buster");
dogs.unshift('Luna');
dogs.pop();

console.log(dogs)
*/

/* var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log (myStr)
 */

/* var myStr = "This is the start. ";
myStr += "I come Second.";
console.log(myStr); */

/* var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);
 */

/* var firstName = "Klyde";
var lastName = "Toamsian";

var secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(secondToLastLetterOfLastName);
 */


//WORD BLANKS
/* function wordBlanks(myNoun, myAdjective, myVerb, MyAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + MyAdverb;
  return result;
 }

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
 */


//FACTORS OF:
/* let factorsOf = function(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
  	if (num % i === 0) {
  		arr.push(i)
    }
  }
  return arr;
}
 */


//FIZZ BUZZ ARRAY:
/* let fizzBuzz = function (max){
  let array = [];
 for (let i = 3; i < max; i++) {
   if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
     array.push(i);
 }
}
 return array;
} */
