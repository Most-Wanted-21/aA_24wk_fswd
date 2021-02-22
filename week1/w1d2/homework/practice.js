
function sumArray(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
		sum = sum + array[index];
  }
  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30


