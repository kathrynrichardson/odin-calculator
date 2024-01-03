let firstInputted = false;
let secondInputted = false;

let operator = "";

let firstInput = 0;
let secondInput = 0;
let value = 0;

function clearFunction(e) {
	firstInputted = secondInputted = false;
	const display = document.getElementById("displayItem");
	display.textContent = "";
	setTimeout(function () {
		display.textContent = "0.";
	}, 100);
}

function deleteFunction(e) {
	if (!secondInputted) {
		const display = document.getElementById("displayItem");
		let content = display.textContent;
		display.textContent = "";
		setTimeout(function () {
			if (content.length === 2) {
				display.textContent = "0.";
				if (!secondInputted) {
					firstInputted = false;
				} else {
					secondInputted = false;
				}
			} else if (content.length > 2) {
				display.textContent = content.slice(0, -2) + ".";
			}
		}, 100);
	}
}

function inputFunction(e) {
	/*console.log("firstInputted", firstInputted);
	console.log("secondInputted", secondInputted);*/
	if (!secondInputted) {
		const display = document.getElementById("displayItem");
		if (display.textContent.length !== 8) {
			let content = display.textContent;
			display.textContent = "";
			setTimeout(function () {
				if (content === "0." || firstInputted) {
					content = "";
				}
				display.textContent = content.slice(0, -1) + e.target.id + ".";
				/*if (!firstInputted) {
					firstInputted = true;
					firstInput = parseFloat(display.textContent);
				} else {
					secondInputted = true;
					secondInput = parseFloat(display.textContent);
				}*/
			}, 100);
		}
	}
	console.log("firstInput", firstInput);
	console.log("secondInput", secondInput);
	console.log("operator", operator);
	console.log("value", value);
}

function operatorFunction(e) {
	if (!secondInputted) {
		firstInputted = true;
		operator = e.target.id;
		const display = document.getElementById("displayItem");
		firstInput = parseFloat(display.textContent);
		let content = display.textContent;
		display.textContent = "";
		setTimeout(function () {
			display.textContent = content;
		}, 100);
	}
	console.log("firstInput", firstInput);
	console.log("secondInput", secondInput);
	console.log("operator", operator);
	console.log("value", value);
}

function equalsFunction(e) {
	if (!secondInputted) {
		if (firstInputted) {
			secondInputted = true;
			const display = document.getElementById("displayItem");
			secondInput = parseFloat(display.textContent);
			switch (operator) {
				case "+":
					value = firstInput + secondInput;
					break;
				case "-":
					value = firstInput - secondInput;
					break;
				case "*":
					value = firstInput * secondInput;
					break;
				case "/":
					value = firstInput / secondInput;
					break;
				default:
					break;
			}
			display.textContent = "";
			setTimeout(function () {
				display.textContent = value + ".";
			}, 100);
		}
	}
	console.log("firstInput", firstInput);
	console.log("secondInput", secondInput);
	console.log("operator", operator);
	console.log("value", value);
}

document.addEventListener('DOMContentLoaded', function() {
	const gridElements = document.querySelectorAll('.grid-item');

	gridElements.forEach(function (item) {
		switch (item.id) {
			case "displayItem":
				item.textContent = "0.";
				break;
			case "clearItem":
				item.textContent = "CLEAR";
				item.addEventListener('click', clearFunction);
				break;
			case "deleteItem":
				item.textContent = "DELETE";
				item.addEventListener('click', deleteFunction);
				break;
			case "+":
			case "-":
			case "*":
			case "/":
				item.textContent = item.id;
				item.addEventListener('click', operatorFunction);
				break;
			case "=":
				item.textContent = item.id;
				item.addEventListener('click', equalsFunction);
				break;
			default:
				item.textContent = item.id;
				item.addEventListener('click', inputFunction);
				break;
		}
	});
});

/*const gridContainer = document.getElementById("gridContainer");

function createGrid() {
	let gridElementIds = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];
	for (let i = 0; i < 19; i++) {
		const gridElement = document.createElement("div");
		gridElement.classList.add("grid-item");
		if (i === 0) {
			gridElement.id = "displayItem";
			gridElement.classList.add("display-item");
			gridElement.textContent = "0.";
		} else if (i === 1) {
			gridElement.id = "dlearItem";
			gridElement.classList.add("clear-item");
			gridElement.textContent = "CLEAR";
		} else if (i === 2) {
			gridElement.id = "deleteItem";
			gridElement.classList.add("delete-item");
			gridElement.textContent = "DELETE";
		} else {
			gridElement.id = gridElementIds[i-3];
			gridElement.textContent = gridElement.id;
		}
		gridContainer.appendChild(gridElement);
	}
}*/
