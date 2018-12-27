let currentNumber = 7;

let createLi = setInterval(() => {
	let para = document.createElement("li");
	let node = document.createTextNode(currentNumber);
	para.appendChild(node);

	document.getElementsByTagName("ul")[1].appendChild(para);
	currentNumber += 7;
	if(currentNumber > 70) {
		clearInterval(createLi);
	}
}, 5000);
