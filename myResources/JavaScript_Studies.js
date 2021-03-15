//  HOW TO SOLVE ANY PROBLEM
// Understand the problem
// Make a plan
// Carry out the plan
// Look back and improve your solution

//  BASIC TYPES IN JS
// strings, numbers, booleans, arrays, undefined, null, functions

//  VARIABLES
// variables "let" keyword
// is something that can be stored in memory
// lets you put a value and reference that point in memory

//  NUMBER OPERATORS
// >, <, >=, <=

//   COMPARISON
// ===, !==

//  INCREMENTING SYMBOLS
// ++, --, +=, =+, -=, =-, *=, % (modulo), so on

//  FUNCTION BASIC STRUCTURE
// function
// for loop
// while loop
// if statement
// ALL of these REQUIRE
// parenthesis first, then curly brackets.
// function name(){}
// for(){}
// while(){}
// if(){}

// if(number > 10){
//     console.log('yo waddup')
// } else {
//     console.log('yo goodbye')
// }
// params go in parenthesis
//     hello,  5

//   EXAMPLE
// function name(word, times){
//   a for loop takes three pieces
//   a start point;
//   a end question, or a boolean (same thing);
//   how to increment the start point;
//   for(let i = 0; i < times; i++){
//       console.log(word);
//   }
// }
//   name('hello', 5);

//   EXAMPLE
// let eggs = 7;
// let name = 'Mike';
// let Boolean = true;
// let array = [1 , 5 , 8, 12, 25];

// for(let i = 0; i < array.length; i++ or i=i+1 or i+=1) {
// 	console.log('hello world ' + i);
// }

//  ARRAYS
// var myArray = [18, 64, 99];
// myArray = 45;
// console.log(myArray)

//  PUSH() add to end of array
// var ourArray = [['John', 23], ['cat', 2]];
// ourArray.push(["dog", 3]);

//  POP() remove last array
// var ourArray = [['John', 23], ['cat', 2]];
// var removedFromOurArray = ourArray.pop();
// console.log(ourArray)
// console.log(ourArray);

//  SHIFT() removes first array
// var ourArray = [['John', 23], ['cat', 2]];
// var removedFromOurArray = ourArray.shift();
// console.log(ourArray)

//  UNSHIFT() insert another array after removing the first array with shift.
// var myArray = [['John', 23], ['cat', 2]];
// myArray.shift();
// myArray.unshift(['Paul', 35]);
// console.log(myArray)

//  SHOPPING LIST arrays within arrays to create a list
// var myList = [['cereal', 3],['milk', 2], ['bananas', 3], ['juice', 2]];

//  FUNCITONS
// function reusableFunction() {
//   console.log('Hi World');
// }

// reusableFunction();

//  FUNCTIONS WITH ARGUMENTS
// function functionWithArgs(a, b) {
//   console.log(a + b);
// }
// functionWithArgs(10, 5)

//  GLOBAL SCOPE
// variables set outside of a function can be used globaly but if within a function.
// and no var added, it will remain global.

//  LOCALSCOPE
// variables declared inside a function can only be visible within that function.

//  LOCAL TAKES PRESEDENCE OVER GLOBAL

//  RETURN
// function minusSeven(num) {
//   return num - 7;
// }
// console.log(minusSeven(10));

// function timesFive(num) {
//   return num * 5;
// }
// console.log(timesFive(5));

//  EX: various methods to calling a function with return
// function timesFive (num) {
//   return num * 5;
// }
// var answer = timesFive(5)
// timesFive(5);
// console.log(timesFive(5))

//  UNDEFINED VALUE RETURN FROM A FUNCTION
// var sum = 0;
// function addThree() {
//   sum = sum + 3;
// }
// function addFive() {
//   sum += 5;
// }

//   ASSIGNMENT WITH A RETURNED VALUE
// var changed = 0;
// function change(num) {
//    return (num + 5) / 3
// }
// changed = change(10);
// var processed = 0;
// function processArg(num) {
//   return (num + 3) / 5
// }
// processed = processArg(7)
// console.log (processed)

//  STAND IN LINE
// function nextInLine(arr, item) {
//   arr.push(item);
//   return arr.shift();
// }
// var testArr = [1, 2, 3, 4, 5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

//  IF STATEMENTS
// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return "Yes, that was ture";
//   }
//   return "No, that was false";
// }
// console.log(trueOrFalse(true));

//  EQUALITY OPERATOR ex: 10 == '10' will return true
// function testEqual(val) {
//   if (val == 12) {
//     return "Equal";
//   }
//   return "Not Equal";
// }
// console.log(testEqual(10));

//  STRICT EQUALITY OPERATOR ex: 10 === '10' will NOT return true
// function testStrict(val) {
//   if(val === 7) {
//     return "Equal";
//   }
//   return "Not Equal";
// }
// console.log (testStrict(10));

//  INEQUALITY OPERATOR
// function testNotEqual(val) {
//   if (val != 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// }
// console.log(testNotEqual(10))

//  STRICT INEQUALITY OPERATOR (opposite of ===) check types
// function testNotEqual(val) {
//   if (val !== 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// }
// console.log(testNotEqual(10))

//  GREATER THAN OPERATOR (same applies to < > <= >=)
// function testGreaterThan(val) {
//   if (val > 100) {
//     return "Over 100";
//   }
//   if (val > 10) {
//     return "Over 10";
//   }
//   return "10 or Under";
// }
// console.log(testGreaterThan(11))

//  AND OPERATOR
// function testLogicalAnd(val) {
//   if (val <= 50 && val >= 25) {
//     return "Yes";
//   }
//   return "No";
// }
// console.log(testLogicalAnd(10))

//  OR OPERATOR
// function testLogicalOr(val) {
//   if (val < 10 || val > 20) {
//     return "Outside";
//   }
//   return "Inside";
// }
// console.log(testLogicalOr(15))

//  ELSE
// function testElse(val) {
//   var result = "";
//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or Smaller";
//   }
//   return result;
// }
// console.log(testElse(10))

//  ELSE IF (order of operation matters, so first code will log then remainder)
// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";
//   }
// }
// console.log(testElseIf(7))

//  SWITCH STATEMENT
// function caseInSwitch(val) {
//   var answer = "";
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }
//   return answer;
// }
// console.log(caseInSwitch(4));

//  DEFAULT IN SWITCH STATEMENT
// function switchOfStuff(val) {
//   var answer = "";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//       break;
//   }
//   return answer;
// }
// console.log(switchOfStuff(2))

//  IDENTICAL IN SWITCH STATEMENT
// function sequentialSizes(val) {
//   var answer = "";
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//   }
//   return answer;
// }
// console.log(sequentialSizes(7))

//  RETURN BOOLEAN FROM FUNCTION
// function isLess(a, b) {
//   return a < b;
// }
// console.log(isLess(10, 15))

//  RETURN EARLY PATTERN FROM FUNCTION
// function abTest(a, b) {
//   if (a < 0 || b < 0) {
//     return undefined;
//   }
//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// console.log(abTest(-5, 5))

//  COUNTING CARDS
// var count = 0;
// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case "10":
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   var holdBet = "Hold"
//   if (count > 0) {
//     holdBet = "Bet"
//   }
//   return count + " " + holdBet;
// }
// cc(2); cc(3); cc("K"); cc("A");; cc(5)
//  console.log(cc(7))

//  BUILD JAVASCRIPT OBJECTS (ourDog is an object; properties are before :; values after :)
// var ouDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

//  DOT NOTATION IN OBJECTS
// var testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };
// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;

//  BRACKET NOTATION IN OBJECTS (properties with space require bracket notations)
// var testObj = {
//   "am entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };
// var entreeValue = testObj["am entree"];
// var drinkValue = testObj['the drink'];

//  VARIABLES IN OBJECTS
// var testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };
// var playerNumber = 16;
// var player = testObj[playerNumber];
// console.log(playerNumber)

//  UPDATING OBJECT PROPERTIES
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// ourDog.name = "Happy Camper";
// console.log(ourDog.name)

//  ADDING NEW PROPERTIES TO OBJECTS
// (new brackets or dot notations can be added at the end of statement)
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// ourDog.skin = 'black and brown';
// console.log(ourDog.skin)

//  DELETE PROPERTIES IN OBJECTS
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// delete ourDog.tails;
// console.log(ourDog.tails)

//  LOOKUP IN OBJECTS (easier than switch statement)
// function phonetickLookup(val) {
//   var result = "";
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "frank"
//   };
//   result = lookup[val];
//   return result;
// }
// console.log(phonetickLookup("charlie"));

//  TEST OBJECT PROPERTIES
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };
// function checkObj(checkProp) {
//   if (myObj.hasOwnProperty(checkProp)) {
//     return myObj[checkProp];
//   } else {
//     return "Not Found"
//   }
// }
// console.log(checkObj("hello"));

//  MANIPULATING COMPLEX OBJECTS
// var myMusic = [{
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   },

//   {
//     "artist": "Beau Carnes",
//     "title": "Cereal Man",
//     "release_year": 2003,
//     "fomats": [
//       "YouTube video"
//     ]
//   }
// ]

//  ACCESSING NESTED OBJECTS
// var myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//     },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };
// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents)

//  ACCESSING NESTED ARRAYS
// var myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];
// var secondTree = myPlants[1].list[1];
// console.log(secondTree)

//  RECORD COLLECTION
// var collection = {
//   "2548": {
//     "album": "Slippery When Wet",
//     "artist": "Bon Jovi",
//     "tracks": [
//       "Let It Rock",
//       "You Give Love a Bad Name"
//     ]
//   },
//   "2408": {
//     "album": "1999",
//     "Artist": "Prince",
//     "tracks": [
//       "1999",
//       "Little Red Corvette"
//     ]
//   },
//   "1245": {
//     "artist": "Robert Palmer",
//     "tracks": []
//   },
//   "5439": {
//     "album": "Abba Gold"
//   }
// };
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateRecords(id, prop, value) {
//   if (value === "") {
//     delete collection[id][prop];
//   } else if (prop === "tracks") {
//     collection[id][prop] = collection[id][prop] || [];
//     collection[id][prop].push(value);
//   } else {
//     collection[id][prop] = value;
//   }
//   return collection;
// }
// updateRecords(2408, "tracks", "test");
// console.log(updateRecords(5439, "artist", "ABBA"));

//  ITERATE WITH WHILE LOOPS
// var myArray = [];
// var i = 0;
// while (i < 5) {
//   myArray.push(i);
//   i++;
// }
// console.log(myArray)

//  ITERATE WITH FOR LOOPS
// var ourArray = [];
// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// var myArray = [];
// for (var i = 1; i < 6; i++) {
//   myArray.push(i);
// }
// console.log(myArray)

//  FUNCTION DECLARATION VS FUNCTION EXPRESSION
// Function declaration
// function sayHello(){
//   console.log("hello");
//   console.log("bye");
// }
// sayHello()
// // Function expression
// let sayHello2 = function() {
//   console.log("Hello");
//   console.log("bye");
// }
// sayHello2()

//  FUNCTION EXPRESSION FIRST CLASS OBJECTS
// let name = 'Alvin'
// let age = 1000;
// let getAvg = function(num1, num2) {
//     return (num1 + num2)/2
// };
// console.log(name, age, getAvg(4, 2)) // "Alvin", 1000, 3
// const arr = [getAvg, name, age];
// console.log(arr[0](6,4)); // 5

//  MUTABILITY
// Immutable Types
// Cannot be mutated (changed)
// Examples
// Number, e.g. 122
// NaN
// undefined
// null
// String, e.g. abc
// re-assignable != mutable
// Mutable Types
// Can be mutated (changed)
// Examples
// Arrays, e.g. ['a', 'b', 'c']
// Objects (we will see this later)
// let str = "abc"
// str[1] = 'x';
// console.log(str) // 'abc';
// let str = 'abc';
// str += 'd'; // str = str + 'd';
// console.log(str) // 'abcd'
// let arr = ["a", "b", "c"];
// arr[1] = "x";
// console.log(arr) // ["a", "x", "c"];































// ************************ aA Studies **************************

//  DIFFERENCE FROM WHILE TO FOR LOOPS
// let i = 2;
// while ( i <= 6 ){
// console.log(i)
// i++
// }
// for (let i = 2; i <= 6; i++){
// 	console.log(i);
// }

//  CONCAT ARRAYS
// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]
// let array3 = [7]
// console.log(array1.concat(array2, array3))

//  LOWERCASE .toLowerCase()
// function whisper(str) {
// 	let whispered = ("..." + str.toLowerCase() + '...')
//     return whispered;
// }
// console.log(whisper("Hey Buddy")); // => "...hey buddy..."
// console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."

//  UPPERCASE .toUpperCase()
// function yell(str) {
//   return str.toUpperCase()
// }
// console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
// console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"

//  ECHO
// function echo(string) {
//   console.log(string.toUpperCase(), '...', string, '...', string.toLowerCase())
//   return string
// }
// echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
// echo("hey"); // => prints "HEY ... hey ... hey"
// echo("JUMp"); // => prints "JUMP ... JUMp ... jump"

//  LOG BETWEEN
// function logBetween(lowNum, highNum) {
//   for (let i = lowNum; i <= highNum; i += 1) {
//     console.log(i);
//   }
// }
//
// function logBetweenWhile(lowNum, highNum) {
//   let i = lowNum;
//   while (i <= highNum) {
//     console.log(i);
//     i++;
//   }
// }
// logBetween(0, 12)
// logBetweenWhile(5,20)

//  PRINT FIVES 4 methods
// function printFives1For(max) {
//   for (let i = 0; i < max; i += 1) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }
// function printFives1(max) {
//   let i = 0;
//   while (i < max) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }
// function printFives2(max) {
//   for (let i = 0; i < max; i += 5) {
//     console.log(i);
//   }
// }
// function printFives2While(max) {
//   let i = 0;
//   while (i < max) {
//     console.log(i);
//     i += 5;
//   }
// }

//  LOG BETWEEN STEPPER
// function logBetweenStepperFor(min, max, step) {
//   for (let i = min; i <= max; i += step) {
//     console.log(i);
//   }
// }
// function logBetweenStepper(min, max, step) {
//   let i = min;
//   while (i <= max) {
//     console.log(i);
//     i += step;
//   }
// }

//  THREE OR SEVEN
// function threeOrSeven(number) {
//   return (number % 7 === 0) || (number % 3 === 0);
// }
// function threeOrSevenConditional(number) {
//   if ((number % 7 === 0) || (number % 3 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(threeOrSeven(3));   // => true
// console.log(threeOrSeven(42));  // => true
// console.log(threeOrSeven(8));   // => false

//  SUM ARRAY
// function sumArray(array) {
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
// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30

//  ADD ARRAYS
// function combineArray(array1, array2) {
//   let newArray = array1.concat(array2);
//   return newArray;
// }
// console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
// console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]

//  DOUBLER
// function doubler(numbers) {
//   let doubledNums = [];
//   for (i = 0; i < numbers.length; i++) {
//     let oldNum = numbers[i];
//     let newNum = oldNum * 2;
//     // this step is important because concat does NOT change the original array
//     doubledNums = doubledNums.concat(newNum);
//   }
//   return doubledNums;
// }
// console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]

// 	VOWEL COUNTER
// function countVowels(word) {
// 0. set a counter vowel counter variable
// 1. iterate through incoming word
// 2. checking whether the current letter is a vowel
// 3. increment the vowelCounter vowel if the current letter is a vowel
// 	let vowelCounter = 0;
// 	let index = 0;
// 	while (index < word.length) {
// 		let letter = word[index];

// 		if (letter === 'a' ||
// 				letter === 'e' ||
// 				letter === 'i' ||
// 				letter === 'o' ||
// 				letter === 'u') {
// 			vowelCounter += 1;
// 		}
// 		index++;
// 	}
// 	return vowelCounter;
// }
// console.log(countVowels('bootcamp'));
// OR
// function countVowels(word) {
//   let vowels = 'aeiou';
//   let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//   	let char = word[i]
//     if (vowels.includes(char)) {
//     	counter++;
//     }
//   }
//   return counter;
// };
// console.log(countVowels("bootcamp")); // => 3

//  PAIRS MAKER
// your code here
// Understand
// Make unique pairs of each elements in the array.
// Accepts an array as the parameter
// Return 2-dimensional array of unique pairs
// Plan
// define a function (function declaration syntax)
// create a new array to store our result
// Make pairs
// iterate over the input array
// store the current element in a variable
// iterate over the rest of the input array
// store the 2nd current element
// push the 1st stored element and 2nd stored element into a new array
// push that new array into the resultArr
// return my resultArr
// Do
// Improve
// define a function (function declaration syntax)
// let pairsMaker = function (arr) {
//   // 	// create a new array to store our result
//   let resultArr = [];
//   // iterate over the input array
//   for (let i = 0; i < arr.length; i++) {
//     // store the 2nd current element
//     let el1 = arr[i];
//     // iterate over the rest of the input array
//     for (let j = i + 1; j < arr.length; j++) {
//       // store the 2nd current element
//       let el2 = arr[j];
//       // push the 1st stored element and 2nd stored element into a new array
//       // let pair = [];
//       // pair.push(el1);
//       // pair.push(el2);
//       // push that new array into the resultArr
//       // resultArr.push(pair);
//       resultArr.push([el1, el2])
//     }
//   }
//   return resultArr;
// };
// console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// // [ [ 'a', 'b' ],
// //   [ 'a', 'c' ],
// //   [ 'a', 'd' ],
// //   [ 'b', 'c' ],
// //   [ 'b', 'd' ],
// //   [ 'c', 'd' ] ]
// console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]

//  TWO DIMENSIONAL SUM
// let twoDimensionalSum = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let subArr = arr[i];
//       for (let j = 0; j < subArr.length; j++) {
//         let num = subArr[j];
//         sum += num;
//       }
//   }
//   return sum;
// };
// let arr1 = [
//   [1, 3],
//   [-4, 7, 10],
//   [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19
// let arr2 = [
//   [],
//   [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6

//  ITERATE ODD #S WITH A FOR LOOP
// var ourArray = [];
// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// console.log(ourArray);
// var myArray = [];
// for (var i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }
// console.log(myArray)

//  COUNT BACKWORDS WITH A FOR LOOP
// var ourArray = [];
// for (var i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }
// console.log(ourArray)
// var myArray = [];
// for (var i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }
// console.log(myArray)

//  ITERATE THROUGH AN ARRAY WITH A FOR LOOP
// var ourArr = [9, 10, 11, 12];
// var ourTotal = 1;
// for (var i = 0; i < ourArr.length; i++) {
//   ourTotal += ourArr[i];
// }
// console.log(ourTotal)
// var myArr = [2, 3, 4, 5, 6];

//  NESTED LOOPS PAIRS IN ARRAYS
// sayHello = "Hello"
// debugger
// for (let i = 0; i < 3; i++) {
//     debugger
//   for (let j = 0; j < 3; j++) {
//       debugger
//     console.log(sayHello);
//   }
// }
// let dogs = [
//   ['belka', 'strelka', "peter"], // 1
//   ['laika', 'dezik', "kevin"] //2
//  ]
// for(let i = 0; i < dogs.length; i++) {
// debugger
// let row = dogs[i]
// for(let j = i + 0; j < row.length; j++) {
// debugger
// let dog = row[j]
// console.log(dog)
// }
// }

//  NESTED ARRAYS UNIQUE PAIRS IN ARRAYS
// let dogs = ['belka', 'strelka', 'laika', 'dezik']
// for(let i = 0; i < dogs.length; i++) {
//   let dog1 = dogs[i];
//   debugger
//   for(let j = i + 1; j < dogs.length; j++) {
//     let dog2 = dogs[j]
//     debugger
//     console.log(dog1, dog2)
//   }
// }





// *******************THURSDAY / WK1D4*********************
// 	HELPER FUNCTION
// let isPrime = function (num) {
// 	if (num < 2) {
// 		return false;
// 	}
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
// let pickPrimes = function (nums) {
// 	let primes = [];

// 	for (let i = 0; i < nums.length; i++) {
// 		let num = nums[i];
// 		if (isPrime(num)) {
// 			primes.push(num);
// 		}
// 	}
// 	return primes;
// }
// console.log(pickPrimes([4, 7, 5, 12]));
// console.log(pickPrimes([31, 25, 9, 16]));

// 	ARRAY SUM
// function isLessThanFive (word) {
// 	let lengthOfWord = word.length
//     return lengthOfWord < 5
// }
// function removeSmallWords(str) {
// 	debugger
// 	let results = [];
// 	let split = str.split(' ');
// 	debugger
//   for(let i = 0; i < split.length; i++) {
//   	let word = split[i];
//     if (!isLessThanFive(word)) {
//     	results.push(word);
//     }
//   }
//   return results.join(' ');
// }
// console.log(removeSmallWords('the cat is awesome'));

// 	AVG VAL
// let avgVal = function(arr) {
// 	if (arr.length === 0) {
// 			return null;
// 	}
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 			let el = arr[i];
// 			sum += el;
// 	}
// 	return sum / arr.length;
// };
// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// 	MY INDEX OF RECALL
// let myIndexOf = function(arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 			let el = arr[i];
// 			if (target === el) {
// 					return i;
// 			}
// 	}
// 	return -1;
// };
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

// 	TRIPLER
// let tripler = function (arr) {
// 	let resultArr = [];
//   	for (let i = 0; i < arr.length; i++) {
//       let originNums = arr[i];
//       let newNums = originNums * 3;
//       resultArr = resultArr.concat(newNums);
//     }
//   return resultArr;
// }
// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

// 	LONG WORDS
// let longWords = function(words) {
// 	let filteredWords = [];
// 	for (let i = 0; i < words.length; i++) {
// 			let word = words[i];
// 			if (word.length > 5) {
// 					filteredWords.push(word);
// 			}
// 	}
// 	return filteredWords;
// };
// console.log(longWords(['bike', 'skateboard', 'scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

// 	REMOVE E WORDS
// let removeEWords = function(sentence) {
// 	let words = sentence.split(' ');
// 	let filtered = [];
// 	for (let i = 0; i < words.length; i++) {
// 			let word = words[i];
// 			if (!word.toLowerCase().includes('e')) {
// 					filtered.push(word);
// 			}
// 	}
// 	return filtered.join(' ');
// };
// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'

// 	MAX VALUE
// let maxValue = function(nums) {
// 	let max = null;
// 	for (let i = 0; i < nums.length; i++) {
// 			let num = nums[i];
// 			if (max === null || num > max) {
// 					max = num;
// 			}
// 	}
// 	return max;
// };
// console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxValue([-2, -3, -7, 3 ])); // 3
// console.log(maxValue([])); // null

// // TWO SUM RECALL
// let twoSum = function (arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 			let num1 = arr[i];
// 			for (let j = i + 1; j < arr.length; j++) {
// 					let num2 = arr[j];
// 					if (num1 + num2 === target) {
// 							return true;
// 					}
// 			}
// 	}
// 	return false;
// };
// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false

// 	REVERSE SENTENCE
// let reverseSentence = function(sentence) {
// 	let words = sentence.split(' ');
// 	let newWords = [];
// 	for (let i = words.length - 1; i >= 0; i--) {
// 			newWords.push(words[i]);
// 	}
// 	let newSentence = newWords.join(' ');
// 	return newSentence;
// };
// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

// 	INITALS
// let initials = function(name) {
// 	let parts = name.split(' ');
// 	let firstLetters = [];

// 	for (let i = 0; i < parts.length; i++) {
// 			let part = parts[i];
// 			firstLetters.push(part[0].toUpperCase());
// 	}
// 	return firstLetters.join('');
// };
// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

// 	TWO DIMENSIONAL PRODUCT
// let twoDimensionalProduct = function(arr) {
// 	let product = 1;
// 	for (let i = 0; i < arr.length; i++) {
// 			let subArr = arr[i];
// 			for (let j = 0; j < subArr.length; j++) {
// 					let num = subArr[j];
// 					product *= num;
// 			}
// 	}
// 	return product;
// };
// let arr1 = [
// 	[6, 4],
// 	[5],
// 	[3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360
// let arr2 = [
// 	[11, 4],
// 	[2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88

// 	POPPER
// let popper = function(array, num) {
// 	let removed = [];
// 	for (let i = 0; i < num; i++) {
// 			let el = array.pop();
// 			removed.push(el);
// 	}
// 	return removed;
// };
// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]
// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

// 	CHOOSE PRIMES
// let prime = function (val) {
// 	if (val < 2) {
// 		return false
// 	}
// 	for (let i = 2; i < val; i++) {
// 		if (val % i === 0) {
// 			return false
// 		}
// 	}
//  return true;
// }
// console.log(prime());
// let choosePrimes = function (nums) {
// let resultArr = [];
// for (let i = 0; i < nums.length; i++) {
// 	let originalNums = nums[i];
// 		 if (prime(originalNums) === true) {
// 			resultArr.push(originalNums)
// 		}
// }
// return resultArr;
// }
// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// 	CHOOSE PRIMES (OWN SOLVING WITH COLLEAGUE)
// let prime = function (val) {
// 	if (val < 2) {
// 		return false
// 	}
// 	for (let i = 2; i < val; i++) {
// 		if (val % i === 0) {
// 			return false
// 		}
// 	}
//  return true;
// }
// console.log(prime());
// let choosePrimes = function (nums) {
// let resultArr = [];
// for (let i = 0; i < nums.length; i++) {
// 	let originalNums = nums[i];
// 		 if (prime(originalNums)) {
// 			resultArr.push(originalNums)
// 		}
// }
// return resultArr;
// }
// let moreThan20 = function (arr) {
// let res = [];
// 	for (let i = 0; i < arr.length; i++) {
// 				let num = arr[i];
// 			if (num > 20) {
// 		res.push(num);
// 				}
// 		}
// return res;
// }
// console.log(moreThan20([36, 48, 9, 13, 19]));
// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// 	FIZZ BUZZ RECALL
// let fizzBuzz = function(max) {
// 	let nums = [];
// 	for (let i = 1; i < max; i++) {
// 			if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0 )) {
// 					nums.push(i);
// 			}
// 	}
// 	return nums;
// };
// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

// 	LONGEST WORD
// let longestWord = function(sentence) {
// 	let words = sentence.split(' ');
// 	let longestWord = '';

// 	for(let i = 0; i < words.length; i++) {
// 			let word = words[i];
// 			if(word.length > longestWord.length) {
// 					longestWord = word;
// 			}
// 	}

// 	return longestWord;
// };

//  ABBREVIATE
// let abbreviate = function(word) {
// 	let str = '';
//   for (let i = 0; i < word.length; i++) {
//           let vowels = 'aeiou';
//           let letter = word[i];
//   			if (!vowels.includes(letter.toLowerCase())) {
//             	str = str + letter; // str+=letter (same thing)
//             }
//         }
// 	return str
// }
// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

//  ABBREVIATE WITH COUNTER
// let abbreviate = function(word) {
// 	let str = '';
// 		let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//           let vowels = 'aAeEiIoOuU';
//           let letter = word[i];
//   			if (!vowels.includes(letter)) {
//             	// str = str + letter; // str+=letter (same thing)
//               counter ++;
//             }
//         }
// 	return counter
// }
// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

// 	PRODUCT ARRAY
// let productWithReduce = function(nums) {
// 	let product = 1;
// 	for (let i = 0; i < nums.length; i++) {
// 			let num = nums[i];
// 			product *= num;
// 	}
// 	return product
// }
// console.log(productWithReduce([10, 3, 5, 2])); // 300
// console.log(productWithReduce([4, 3])); // 12

// 	REMOVE LAST VOWEL RECALL
// let removeLastVowel = function(word) {
// 	let vowels = 'aeiou';
// 	for(let i = word.length - 1; i >= 0; i--) {
// 			let char = word[i];
// 			if (vowels.includes(char)) {
// 					return word.slice(0, i) + word.slice(i + 1);
// 			}
// 	}
// 	return word;
// };
// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

// 	ABBREVIATE WORDS
// let removeVowels = function(word) {
// 	let vowels = 'aeiou';
// 	let newWord = '';
// 	for (let i = 0; i < word.length; i++) {
// 			let char = word[i];
// 			if (!vowels.includes(char)) {
// 					newWord += char;
// 			}
// 	}
// 	return newWord;
// };
// let abbreviateWords = function(sentence) {
// 	let words = sentence.split(' ');
// 	let newWords = [];
// 	for (let i = 0; i < words.length; i++) {
// 			let word = words[i];
// 			if (word.length > 4) {
// 					newWords.push(removeVowels(word));
// 			} else {
// 					newWords.push(word);
// 			}
// 	}
// 	return newWords.join(' ');
// };
// console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
// console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

// 	CONTAINS WORD
// let containsWord = function(sentence, targetWord) {
// 	let words = sentence.split(' ');

// 	for (let i = 0; i < words.length; i++) {
// 			let word = words[i];

// 			if (word.toLowerCase() === targetWord.toLowerCase()) {
// 					return true;
// 			}
// 	}

// 	return false;
// };

// console.log(containsWord('sounds like a plan', 'like')); // true
// console.log(containsWord('They are great', 'they')); // true
// console.log(containsWord('caterpillars are great animals', 'cat')); // false
// console.log(containsWord('Cast the net', 'internet')); // false

// 	UNCOMPRESS
// let uncompress = function(str) {
// 	let newStr = '';
// 	for (let i = 0; i < str.length; i += 2) {
// 			let char = str[i];
// 			let num = Number(str[i + 1]);
// 			for (let times = 0; times < num; times += 1) {
// 					newStr += char;
// 			}
// 	}
// 	return newStr;
// };
// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

// // HIPSTERFY
// let removeLastVowel = function(word) {
// 	let vowels = 'aeiou';
// 	for(let i = word.length - 1; i >= 0; i--) {
// 			let char = word[i];
// 			if (vowels.includes(char)) {
// 					return word.slice(0, i) + word.slice(i + 1);
// 			}
// 	}
// 	return word;
// };
// let hipsterfy = function(sentence) {
// 	let newWords = [];
// 	let words = sentence.split(' ');
// 	for (let i = 0; i < words.length; i++) {
// 			let word = words[i];
// 			newWords.push(removeLastVowel(word));
// 	}
// 	return newWords.join(' ');
// };
// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// // LEAST COMMON MULTIPLE RECALL
// let leastCommonMultiple = function(num1, num2) {
// 	for (let i = 1; i <= (num1 * num2); i++) {
// 			if (i % num1 === 0 && i % num2 === 0) {
// 					return i;
// 			}
// 	}
// };
// console.log(leastCommonMultiple(4, 6)); // 12
// console.log(leastCommonMultiple(3, 5)); // 15
// console.log(leastCommonMultiple(2, 10)); // 10

// // ROATATE
// let rotate = function(array, num) {
// 	if (num > 0) {
// 			for (let i = 0; i < num; i++) {
// 					let el = array.pop();
// 					array.unshift(el);
// 			}
// 	} else {
// 			for (let i = 0; i < -(num); i++) {
// 					let el = array.shift();
// 					array.push(el);
// 			}
// 	}
// };
// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]
// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

// // ADDITION MUTATOR
// let additionMutator = function(numbers, n) {
// 	for (let i = 0; i < numbers.length; i++) {
// 			numbers[i] += n;
// 	}
// }
// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]
// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2);     // [ 10, 8, 3 ]

// // ALTERNATING WORDS
// let alternatingWords = function(words) {
// 	for (let i = 0; i < words.length; i++) {
// 			if (i % 2 === 0) {
// 					words[i] = words[i].toUpperCase();
// 			} else {
// 					words[i] = words[i].toLowerCase();
// 			}
// 	}
// };
// let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]
// let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

// // REPEATING TRANSLATE
// // Write a function `repeatingTranslate` that accepts a sentence as an argument.
// // The function should translate the sentence according to the following rules:
// //
// // - words that are shorter than 3 characters are unchanged
// // - words that are 3 characters or longer are translated according to the
// //   following rules:
// //   - if the word ends with a vowel, simply repeat the word twice (example:
// //     'like'->'likelike')
// //   - if the word ends with a non-vowel, repeat all letters that come after the
// //     word's last vowel, including the last vowel itself (example:
// //     'trash'->'trashash')
// //
// // Note that if words are capitalized in the original sentence, they should remain
// // capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
// //
// // Can you reduce the problem into helper functions?
// let repeatingTranslate = function(sentence) {
// 	let words = sentence.split(' ');
// 	let newWords = [];
// 	for (let i = 0; i < words.length; i++) {
// 			let word = words[i];
// 			if (word.length < 3) {
// 					newWords.push(word);
// 			} else {
// 					newWords.push(translateWord(word));
// 			}
// 	}
// 	return newWords.join(' ');
// };
// let translateWord = function(word) {
// 	let vowels = 'aeiou';
// 	let lastChar = word[word.length - 1];
// 	if (vowels.includes(lastChar)) {
// 			return word + word;
// 	}
// 	let i = word.length - 1;
// 	while (i >= 0) {
// 			if (vowels.includes(word[i])) {
// 					return word + word.slice(i);
// 			}
// 			i--;
// 	}
// };
// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

// // MAX IN MATRIX
// function maxInMatrix(matrix) {
//   let currentMax = -Infinity;
//   for (let row = 0 ; row < matrix.length ; row++) {
//     for (let col = 0 ; col < matrix[0].length ; col++) {
//       if (matrix[row][col] > currentMax) {
//         currentMax = matrix[row][col];
//       }
//     }
//   }
//   return currentMax;
// }
// matrix = [[11,  2,-99],
//           [20, 19, 10],
//           [47, 72, 56]]
// console.log(maxInMatrix(matrix)); // 72

// // MAX IN COLUMNS
// function maxColumn(matrix) {
//   const height = matrix.length;
//   const width = matrix[0].length;
//   const maxColumns = [];
//   for (let col = 0 ; col < width ; col++) {
//     let colMax = matrix[0][col];
//     for (let row = 1 ; row < height ; row++) {
//         if (matrix[row][col] > colMax) {
//             colMax = matrix[row][col];
//         }
//     }
//     maxColumns.push(colMax);
//   }
//   return maxColumns;
// }
// matrix = [[ 5,  9, 21],
//           [ 9, 19,  6],
//           [12, 14, 15]]
// console.log(maxColumn(matrix)); // [12, 19, 21]



















// ***************** FRIDAY W1D5 ******************




//  	HAS THREE VOWELS
// let hasThreeVowels = function (str) {
// 	let vowels = 'aeiouAEIOU';
//   	let holder = [];
//   	for (let i = 0; i < str.length; i++) {
// 		let char = str[i];
//   		if (vowels.includes(char) && !(holder.includes(char))) {
//         	holder.push(char);
//         }
//   		if (holder.length >= 3) {
//             return true;
//             }
//     	}
// 		return false;
// }
// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false
