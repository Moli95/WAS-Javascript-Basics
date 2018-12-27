document.getElementById('checkAverage').addEventListener('click', (event) => {
	document.getElementById('average').innerHTML = '';
	let marks = document.getElementsByClassName('subject');
	let marksSum = 0;
	let average;
	for (let i = 0; i < marks.length; i++) {
		// check fi all inputs has value
		if (marks[i].value == '') {
			document.getElementById('average').innerHTML = 'Fill all the gaps';
			break;
		}
		//parsing strings to Intiger and suming them
		marksSum += parseInt(marks[i].value);

		// if this is the last run show me result
		if(i == marks.length-1) {
			average = marksSum / marks.length;
			document.getElementById('average').innerHTML = average;
		}
	}
});
