var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(clickedColor) {
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = clickedColor;
		}	
}

function pickColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// rgb(r, g, b)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}