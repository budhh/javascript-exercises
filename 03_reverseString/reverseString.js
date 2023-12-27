const reverseString = function (string) {
	const splitString = string.split('');
	const reverseString = splitString.reverse();
	const joinString = reverseString.join('');
	return joinString;
};

// Do not edit below this line
module.exports = reverseString;
