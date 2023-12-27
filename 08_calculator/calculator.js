const add = function (n1, n2) {
	return n1 + n2;
};

const subtract = function (n1, n2) {
	return n1 - n2;
};

const sum = function (numbers) {
	var result = 0;
	for (let index = 0; index < numbers.length; index++) {
		var element = numbers[index];
		result += element;
	}
	return result;
};

const multiply = function (nums) {
	var result = 1;
	for (let index = 0; index < nums.length; index++) {
		var element = nums[index];
		result *= element;
	}
	return result;
};

const power = function (n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function (num) {
	var start = 1;
	for (let index = 2; index <= num; index++) {
		start *= index;
	}
	return start;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
