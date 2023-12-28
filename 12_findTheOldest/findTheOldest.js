const findTheOldest = function (array) {
	var max = array[0];
	var maxAge = 0;
	var currYear = 2023;
	for (let index = 0; index < array.length; index++) {
		const curr = array[index];
		if (curr.yearOfDeath !== undefined) {
			currAge = curr.yearOfDeath - curr.yearOfBirth;
		} else {
			currAge = currYear - curr.yearOfBirth;
		}
		if (currAge >= maxAge) {
			maxAge = currAge;
			max = curr;
		}
	}
	return max;
};

// Do not edit below this line
module.exports = findTheOldest;
