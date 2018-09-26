let colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
];
let squares = document.querySelectorAll(".square");
let pickedColor = colors[Math.floor(Math.random()*6)];
let rgbDisplay = document.querySelector("#rgbCode");

rgbDisplay.textContent = pickedColor;
for(let i=0; i<squares.length; i++) {

	//set colors of all squares
	squares[i].style.backgroundColor=colors[i];

	//click listeners to all squares
	squares[i].addEventListener("click",function() {
		//if clicked color is the pickedColor
		if(this.style.backgroundColor===pickedColor) {
			alert("CORRECT");
		}
		else {
			alert("WRONG");
		}
	});
}