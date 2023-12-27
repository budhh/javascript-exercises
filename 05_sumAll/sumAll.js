const sumAll = function (start, end) {
	if (
		start < 0 ||
		end < 0 ||
		start instanceof String ||
		end instanceof String ||
		typeof start === 'string' ||
		typeof end === 'string' ||
		isNaN(start) ||
		isNaN(end)
	) {
		return 'ERROR';
	}
	smallNum = start;
	bigNum = end;
	if (start > end) {
		smallNum = end;
		bigNum = start;
	}
	sum = 0;
	for (let index = smallNum; index <= bigNum; index++) {
		sum += index;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
