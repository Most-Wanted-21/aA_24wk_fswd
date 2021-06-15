
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
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(sayHello);
//   }
// }
// let dogs = [
//   ['belka', 'strelka', "peter"], // 1
//   ['laika', 'dezik', "kevin"] //2
//  ]
// for(let i = 0; i < dogs.length; i++) {
// let row = dogs[i]
// for(let j = i + 0; j < row.length; j++) {
// let dog = row[j]
// console.log(dog)
// }
// }

//  NESTED ARRAYS UNIQUE PAIRS IN ARRAYS
// let dogs = ['belka', 'strelka', 'laika', 'dezik']
// for(let i = 0; i < dogs.length; i++) {
//   let dog1 = dogs[i];
//   for(let j = i + 1; j < dogs.length; j++) {
//     let dog2 = dogs[j]
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
//
// 	let results = [];
// 	let split = str.split(' ');
//
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


// ***************** FRIDAY / W1D5 ******************

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



// ********************** THURSDAY W2D4 *********************


//  CLOSURES
// Elephant parade example
// function elephantCollector() {
//   const elephants = [ 'dumbo' ];
//   return function(name) {
//
//       elephants.push(name);
//       return elephants;
//   }
// }
// const elephantParade = elephantCollector(); // ?
// const elephantParade1 = elephantCollector();
// //millions of lines of code here
//
// console.log(elephantParade("Obi"))
// console.log(elephantParade("Giraffe"))
// console.log(elephantParade("Gerald"))


// // SCOPES
// function letsJam() {  // Global scope Layer 0
//   // function scope
//   let rand = 10;

//   if (true) {
//     const rand = 2;
//   console.log(rand)
//   } // Block scope Layer 2

//   if (true) {
//     let rand = 1;
//     console.log(rand)
//   } // Block scope Layer 2 (another layer 2)
//     console.log(rand)
//   if (true) {
//     const rand = "let's jam!";
//   } // Block scope Layer 2 (another layer 2)

//   return rand;
// } // End of function scope Layer 1

// console.log(letsJam()); // Global scope Layer 0
