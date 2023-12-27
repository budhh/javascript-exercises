const repeatString = function (str, int) {
	let string = str;
	if (int < 0) {
		return 'ERROR';
	}
	return string.repeat(int);
};

// Do not edit below this line
module.exports = repeatString;
