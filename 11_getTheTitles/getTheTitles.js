const getTheTitles = function (books) {
	var titles = [];
	x = 0;
	books.forEach((element) => {
		titles[x] = element.title;
		x++;
	});
	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
