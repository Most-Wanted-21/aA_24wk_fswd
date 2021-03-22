/***********************************************************************
Write a function `mostFrequentLetter(string)` that will takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

mostFrequentLetter("apple") // "p"
mostFrequentLetter("banana") // "a"
mostFrequentLetter("What about a longer string?") // " "
***********************************************************************/

function mostFrequentLetter(string) {
	//!!START
	let stringObject = {};
	for (let i = 0; i < string.length; i++) {
		let currentLetter = string[i];
		if (stringObject[currentLetter] === undefined) {
			stringObject[currentLetter] = 1;
		} else {
			stringObject[currentLetter] += 1;
		}
	}

	let maxCount = 0;
	let mostFrequent = null;
	for(letter in stringObject) {
		if (stringObject[letter] > maxCount) {
			maxCount = stringObject[letter];
			mostFrequent = letter;
		}
	}
	return mostFrequent;
	//!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentLetter;
