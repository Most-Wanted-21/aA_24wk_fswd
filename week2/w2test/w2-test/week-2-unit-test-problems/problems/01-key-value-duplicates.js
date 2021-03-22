/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:

obj1 = {"orange": "juice", "apple": "sauce", "sauce": "pan"}
keyValueDuplicates(obj1) // ["sauce"]

obj2 = {"big": "foot", "foot": "ball", "ball": "boy", "boy": "scout"}
keyValueDuplicates(obj2) // ["foot", "ball", "boy"]

obj3 = {"pizza": "pie", "apple": "pie", "pumpkin": "pie"}
keyValueDuplicates(obj3) // []


***********************************************************************/

function keyValueDuplicates(obj) {
	const result = [];

	Object.values(obj).forEach(val => {
		if (Object.values(obj).includes(val)) {
			result.push(val);
		}
	});

	Object.keys(obj).forEach(val => {
		if (Object.keys(obj).includes(val)) {
			result.push(val);
		}
	});


	return result;

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyValueDuplicates;
