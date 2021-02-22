/*
  BASIC TYPES IN JS
strings, numbers, booleans, arrays, undefined, null, functions

  VARIABLES
variables "let" keyword
is something that can be stored in memory
lets you put a value and reference that point in memory

  NUMVER OPERATORS
>, <, >=, <=
  COMPARISON
===, !==

  INCREMENTING SYMBOLS
  ++, --, +=, =+, -=, =-, *=, % (modulo), so on

  FUNCTION BASIC STRUCTURE
function
for loop
while loop
if statement
ALL of these REQUIRE
parenthesis first, then curly brackets.
function name(){}
for(){}
while(){}
if(){}

// if(number > 10){
//     console.log('yo waddup')
// } else {
//     console.log('yo goodbye')
// }
//params go in parenthesis
    //hello,  5

  EXAMPLE
function name(word, times){
  // a for loop takes three pieces
  // a start point;
  // a end question, or a boolean (same thing);
  // how to increment the start point;
  for(let i = 0; i < times; i++){
      console.log(word);
  }
}
  name('hello', 5);

  EXAMPLE
let eggs = 7;
let name = 'Mike';
let Boolean = true;
let array = [1 , 5 , 8, 12, 25];

for(let i = 0; i < array.length; i++ or i=i+1 or i+=1) {
	console.log('hello world ' + i);
}

  ARRAYS
var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray)

  PUSH() add to end of array
var ourArray = [['John', 23], ['cat', 2]];
ourArray.push(["dog", 3]);

  POP() remove last array
var ourArray = [['John', 23], ['cat', 2]];
var removedFromOurArray = ourArray.pop();
console.log(ourArray)
console.log(ourArray);

  SHIFT() removes first array
var ourArray = [['John', 23], ['cat', 2]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray)

  UNSHIFT() insert another array after removing the first array with shift.
var myArray = [['John', 23], ['cat', 2]];
myArray.shift();
myArray.unshift(['Paul', 35]);
console.log(myArray)

  SHOPPING LIST arrays within arrays to create a list
var myList = [['cereal', 3],['milk', 2], ['bananas', 3], ['juice', 2]];

  FUNCITONS
function reusableFunction() {
  console.log('Hi World');
}

reusableFunction();

  FUNCTIONS WITH ARGUMENTS
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(10, 5)

  GLOBAL SCOPE variables set outside of a function can be used globaly but if within a function.
  and no var added, it will remain global.

  LOCALSCOPE variables declared inside a function can only be visible within that function.

  LOCAL TAKES PRESEDENCE OVER GLOBAL

  RETURN
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));

  UNDEFINED VALUE RETURN FROM A FUNCTION
var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

  ASSIGNMENT WITH A RETURNED VALUE*/
var changed = 0;

function change(num) {
  return (num + 5) / 3
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5
}
