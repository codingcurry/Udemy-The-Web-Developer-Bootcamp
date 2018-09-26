let colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
];
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let rgbDisplay = document.querySelector("#rgbCode");
let message = document.querySelector("#message");

rgbDisplay.textContent = pickedColor;
for(let i=0; i<squares.length; i++) {

	//set colors of all squares
	squares[i].style.backgroundColor=colors[i];

	//click listeners to all squares
	squares[i].addEventListener("click",function() {
		//if clicked color is the pickedColor
		if(this.style.backgroundColor===pickedColor) {
			message.textContent="CORRECT";
			changeColor(pickedColor);
		}
		else {
			this.style.backgroundColor="#2b2b2b"
			message.textContent="Try Again";
		}
	});
}

//change all squares to passed in color
function changeColor(color) {
	for(let i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}

//random color depending on number of colors available
function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}