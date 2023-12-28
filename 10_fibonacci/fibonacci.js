const fibonacci = function (num, memo) {
	var n = parseInt(num);
	// n = num;

	memo = memo || {};

	if (memo[n]) return memo[n];

	if (n < 0) {
		return 'OOPS';
	}

	if (n == 0) {
		return 0;
	}

	if (n == 1) {
		return 1;
	}
	return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
};

// Do not edit below this line
module.exports = fibonacci;
