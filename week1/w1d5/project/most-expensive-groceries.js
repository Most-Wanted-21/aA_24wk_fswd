// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5
//understand
//take in an array of groceries and return total cost of all grocery items
//make a plan
//sum up cost
//loop through the array to pull out individual item
//conditional logic based on item to return cost
//return that cost
function costOfGroceries(groceries) {
  // Your code here
let total = 0;
for (let i = 0; i < groceries.length; i++) {
  let items = groceries[i];
  if (items === 'butter') {
    total += 1;
  }
  else if (items === 'eggs') {
    total += 2;
  }
  else if (items === 'milk'){
    total += 3;
  }
  else if (items === 'bread') {
    total += 4;
  }
  else if (items === 'cheese') {
    total += 5;
  }
}
return total;
}
//understand
//create function that takes in array with subarrays that uses the helper function to give each sub array a numerical value
//then find the most expensive list of groceries.
//make a plan
//create a variable for index of hightest cost
//use a loop to go over list of groceries
//create variables to grab and caculate cost of items
//conditional statement to determine if list of groceries is more or less expensive than another.
function mostExpensiveGroceries(groceriesList) {
  // Your code here
let index = 0;
let expensive = null;
for (let i = 0; i < groceriesList.length; i++) {
  let subArr = groceriesList[i];
  if (costOfGroceries(subArr) > expensive){
    expensive = costOfGroceries(subArr);
    index = i;
  }
}
return index;
}




// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
