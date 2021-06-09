// ************************* JS Notes *************************

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
//       return "cat";
//       break;
//     default:
//       return "stuff";
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

// // REPLACING IF ELSE CHAINS WITH SWTICH
// function chainToSwitch(val) {
//   var answer = "";
//   switch(val) {
//     case 'bob':
//     answer = 'Marley';
//     break;
//     case 42:
//     answer = 'The Answer';
//     break;
//     case 1:
//     answer = 'There is no #1';
//     break;
//     case 99:
//     answer = 'Missed me by this much!';
//     break;
//     case 7:
//     answer = 'Ate Nine';
//     break;
//   }
//   return answer;
// }
// chainToSwitch(7);

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

//  BUILD JAVASCRIPT OBJECTS (ourDog is an object; properties are before :;
// values after:)
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

// //  RECORD COLLECTION
// var collection = {
//   "2548": {
//     "album": "Slippery When Wet",
//     "artist": "Bon Jovi",
//     "tracks": [
//       "Let It Rock",
//       "You Give Love a Bad Name"
//     ]
//   },
//   "2468": {
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
// updateRecords(2468, "tracks", "test");
// console.log(updateRecords(5439, "artist", "ABBA"));

// // ITERATE WITH WHILE LOOPS
// var myArray = [];
// var i = 0;
// while (i < 5) {
//   myArray.push(i);
//   i++;
// }
// console.log(myArray)
// // OR
// var myArray = [];
// var i = 5;
// while (i > -1) {
//     myArray.push(i);
//     i--;
// }
// console.log(myArray);

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

// ITERATE ODD #S W FOR LOOP

// // ITERATE THROUGH AN ARR WITH FOR LOOP
// var myArr = [ 2, 3, 4, 5, 6];
// var total = 0;
// for (let i = 0; i < myArr.length; i++) {
//    total += myArr[i];
// }
// console.log(total)

// // NESTING FOR LOOPS
// function multiplyAll(arr) {
//   var product = 1;
// for (let i = 0; i < arr.length; i++)
//   for (let j = 0; j < arr[i].length; j++)
//     product *= arr[i][j]
//   return product;
// }
// console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

// // ITERATE WITH JAVASCRIPT DO...WHILE LOOPS
// var myArray = [];
// var i = 10;
// do {
//   myArray.push(i);
//   i++;
// }
// while (i < 5);
// console.log(i)

// // REPLACE LOOPS USING RECURSION
// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }
// console.log(sum([1], 0))
// console.log(sum([2, 3, 4], 1))
// console.log(sum([2, 3, 4, 5], 3))

// // PROFILE LOOKUP
// var contacts = [
//   {
//       "firstName": "Akira",
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];
// function lookUpProfile(name, prop){
//   for (var i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       return contacts[i][prop] || "No such property";
//     }
//   }
//   return "No such contact";
// }
// var data = lookUpProfile("Akira", "likes");
// console.log(data);

// // GENERATE RANDOM FRACTIONS
// function randomFraction() {
//   return Math.random();
// }

// // GENERATE RANDOM WHOLE NUMBERS
// function randomWholeNum() {
//   return Math.floor(Math.random() * 10);
// }

// // GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE
// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
// }
// console.log(randomRange(5, 10))

// // PARSINT FUNCTION
// function convertToInteger(str) {
//   return parseInt(str)
// }
// console.log(convertToInteger("56"));

// // PARSEINT FUNCTION WITH RADIX
// function convertToInteger(str) {
//   return parseInt(str, 2)
// }
// console.log(convertToInteger("10011"));

// CONDITIONAL TERNARY OPERATOR
// instead of using the following if/else statement
// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// // Use the ternary operator as such
// function findGreater(a, b) {
//   return a > b ? "a is greater" : "b is greater";
// }
// // OR
// function checkEqual(a, b) {
//   return a == b ? "Equal" : "Not Equal"
// }
// checkEqual(1, 2);

// // MULTIPLE CONDITIONAL TERNARY OPERATORS
// function findGreaterOrEqual(a, b) {
//   if (a === b) {
//     return "a and b are equal";
//   }
//   else if (a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal"
//     : (a > b) ? "a is greater"
//     : "b is greater";
// }
// function checkSign(num) {
//   return (num > 0) ? "positive"
//     : (num < 0) ? "negative"
//     : "zero";
// }
// checkSign(10);

// RECURSION TO CREATE COUNTDOWN
// function countdown(n) {
//   if (n < 1) return [];
//   if (n === 1) return [1];
//   const output = [n];
//   return output.concat(countdown(n - 1));
//   }
// console.log(countdown(10));
// // Solutions
// // Solution 1
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.unshift(n);
//     return arr;
//   }
// }
// // Solution 2
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.splice(0, 0, n);
//     return arr;
//   }
// }
// // Solution 3
// function countdown(n){
//    return n < 1 ? [] : [n].concat(countdown(n - 1));
// }
// // Solution 4
// function countdown(n){
//    return n < 1 ? [] : [n, ...countdown(n - 1)];
// }

// RECURSION TO CREATE A RANGE OF NUMBERS
// Solutions
// Solution 1
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }
// console.log(rangeOfNumbers(5, 7))
// // Solution 2
// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// }
// // Solution 3
// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
// }

// ********************** ES6 *************************
// When you declare a variable with the VAR keyword, it is declared
// globally, or locally if declared inside a function.

// The LET keyword behaves similarly, but with some extra features.
// When you declare a variable with the let keyword inside a block,
// statement, or expression, its scope is limited to that block,
// statement, or expression.

// CONST has all the awesome features that let has, with the added
// bonus that variables declared using const are read-only.They are
// a constant value, which means that once a variable is assigned
// with const, it cannot be reassigned.
// A common practice when naming constants is to use all uppercase letters,
// with words separated by an underscore. ex: const FAV_PET = "Cats"
// However, it is important to understand that objects(including arrays and
// functions) assigned to a variable using const are still mutable.Using the
// const declaration only prevents reassignment of the variable identifier.

// MUTATE AN ARRAY DECLARED WITH CONST
// const s = [5, 7, 2];
// function editInPlace() {
//   "use strict";
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;
// }
// editInPlace();

// // PREVENT OBJECT MUTATION OBJECT FREEZE
// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
// Object.freeze(MATH_CONSTANTS); //added the .freeze here
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch(ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
// console.log(freezeObj())

// // ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCIONS
// // from this
// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }
// // to this
// const myFunc = () => "value";

// // ARROW FUNCTIONS WITH PARAMETERS
// // If an arrow function has a single parameter, the parentheses
// // enclosing the parameter may be omitted.
// const doubler = item => item * 2;
// console.log(doubler(10))
// // or
// const multiplier = (item, multi) => item * multi;
// console.log(multiplier(4, 2))
// // or
// const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));

// // SET DEFAULT PARAMETERS FOR FUNCTIONS
// const greeting = (name = "Anonymous") => "Hello " + name;
// console.log(greeting("John"));
// console.log(greeting());
// // or
// const increment = (number, value = 1) => number + value;

// // REST PARAMETER WITH FUNCTION PARAMETERS
// // The rest parameter eliminates the need to check the args array
// // and allows us to apply map(), filter() and reduce() on the
// // parameters array.
// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], {}));
// or
// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4));

// // SPREAD PARAMETER TO EVALUATE ARRAYS IN-PLACE
// // ...arr returns an unpacked array.In other words, it spreads the array.
// //   However, the spread operator only works in -place, like in an argument
// // to a function or in an array literal.
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// arr2 = [...arr1];
// console.log(arr2);

// // USE DESTRUCTURING ASSIGNMENT TO EXTRACT VALUES FROM OBJECTS
// // Consider the following ES5 code:
// // const user = { name: 'John Doe', age: 34 };
// // const name = user.name;
// // const age = user.age;
// // name would have a value of the string John Doe, and age would have the number 34.
// // Here's an equivalent assignment statement using the ES6 destructuring syntax:
// // const { name, age } = user;
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const { today, tomorrow } = HIGH_TEMPERATURES;
// console.log(today)

// // USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FORM OBJECTS
// // Destructuring allows you to assign a new variable name when extracting values.
// // You can do this by putting the new name after a colon when assigning the value.
// // Using the same object from the last example:
// // const user = { name: 'John Doe', age: 34 };
// // Here's how you can give new variable names in the assignment:
// // const { name: userName, age: userAge } = user;
// // You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// console.log(highToday)

// // // USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM NESTED OBJECTS
// // const user = {
// //   johnDoe: {
// //     age: 34,
// //     email: 'johnDoe@freeCodeCamp.com'
// //   }
// // };
// // // Here's how to extract the values of object properties and assign them to variables with the same name:
// // const { johnDoe: { age, email } } = user;
// // // And here's how you can assign an object properties' values to variables with different names:
// // const { johnDoe: { age: userAge, email: userEmail }} = user;
// // console.log(userEmail)
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
// const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST
// console.log(lowToday, highToday)

// // // USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS
// // // One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma - separated list.Consequently, you cannot pick or choose which elements you want to assign to variables.
// // // Destructuring an array lets us do exactly that:
// // const [a, b] = [1, 2, 3, 4, 5, 6];
// // console.log(a, b);
// // // The console will display the values of a and b as 1, 2.
// // // The variable a is assigned the first value of the array, and b is assigned the second value of the array.We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
// // const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// // console.log(a, b, c);
// let a = 8, b = 6;
// [a, b] = [b, a]
// console.log(a, b)

// // USE DESTRUCTURING ASSIGNMENT WITH THE REST PARAMETER TO REASSIGN ARRAY ELEMENTS
// // Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   const [a, b, ...arr] = list;
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(source, arr)

// // // USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS
// // const profileUpdate = (profileData) => {
// //   const { name, age, nationality, location } = profileData;
// // }
// // // This effectively destructures the object sent into the function. This can also be done in-place:
// // const profileUpdate = ({ name, age, nationality, location }) => {
// // }
// // // When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = ({max, min}) => (max + min) / 2.0;

// // // CREATE STRINGS USING TEMPLATE LITERALS
// // // Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
// // // Consider the code below:
// // const person = {
// //   name: "Zodiac Hasbro",
// //   age: 56
// // };
// // const greeting = `Hello, my name is ${person.name}!
// // I am ${person.age} years old.`;
// // console.log(greeting);
// // // The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..
// // // A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.
// // CHALLENGE PROBLEM
// // Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
// // Use an iterator method (any kind of loop) to get the desired output (shown below).
// // [
// //   '<li class="text-warning">no-var</li>',
// //   '<li class="text-warning">var-on-top</li>',
// //   '<li class="text-warning">linebreak</li>'
// // ]
// // SOLUTION 1:
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   return failureItems;
// }
// const failuresList = makeList(result.failure);
// console.log(failuresList)
// // SOLUTION 2:
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";
//   const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
//   return failureItems;
// }
// const failuresList = makeList(result.failure);
// console.log(failuresList)

// // WRITE CONCISE OBJECT LITERAL DECLARATIONS USING OBJECT PROPERTY SHORTHAND
// // const getMousePosition = (x, y) => ({
// //   x: x,
// //   y: y
// // });
// // getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
// // const getMousePosition = (x, y) => ({ x, y });
// const createPerson = (name, age, gender) => {
//   return {name, age, gender};
// };


