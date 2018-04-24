var friends = [
	{
		"name": "Ahmed",
		//a perfectly cromulent soul, given to us by the class
		"photo": "https://et.wikipedia.org/wiki/Ahmet_I#/media/File:Sultan_I._Ahmet.jpg",
		"scores": [
			5,
			1,
			4,
			4,
			5,
			1,
			2,
			5,
			4,
			1
		]
	}

]
console.log(friends);
function reducer(total, num) {
	return total + num
};
console.log(friends[0].scores.reduce(reducer));




