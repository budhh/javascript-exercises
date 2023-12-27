const removeFromArray = function (array, ...options) {
	filteredArray = array;
	for (let index = 0; index < filteredArray.length; index++) {
		const x = filteredArray[index];
		if (options.includes(x)) {
			filteredArray.splice(index, 1);
			index--;
		}
	}
	return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
