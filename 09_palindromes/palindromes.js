const palindromes = function (string) {
	filteredString = string.replace(/[^\w\']|_/g, '');
	filteredString = filteredString.toLowerCase();
	arr = filteredString.split('');
	arrlen = Math.floor(arr.length / 2);
	acc = arr.length - 1;
	for (let index = 0; index < arrlen; index++) {
		if (arr[index] !== arr[acc]) {
			return false;
		}
		acc -= 1;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
