const removeFromArray = function (array, ...options) {
	filteredArray = array.filter((x) => !options.includes(x));
	return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
