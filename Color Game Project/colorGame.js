let mode = 6; //determines easy(3) or hard(6) mode
let colors = generateRandomColors(mode);	
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let rgbDisplay = document.querySelector("#rgbCode");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
// let easy = document.querySelector("#easy");
// let hard = document.querySelector("#hard");
let modeButtons = document.querySelectorAll(".mode")

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	colors=generateRandomColors(mode);
	pickedColor=pickColor();
	rgbDisplay.textContent=pickedColor;
	for(let i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
		else {
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	resetButton.textContent="New Colors";
}

for(let i=0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		//hard coded
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		this.classList.add("selected");
		if(modeButtons[i].textContent==="Easy") mode=3;
		else mode=6;
		reset();
	});
}

hard.classList.add("selected");
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
			h1.style.backgroundColor=pickedColor;
			resetButton.textContent="Play Again?";
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


//populate array with random colors depending on amount specified
function generateRandomColors(num) {
	let tmpArray = [];
	for(let i=0; i<num; i++) {
		tmpArray.push(randomColor());
	}
	return tmpArray;
}

//generates a string containing a random rgb code for a color
function randomColor() {
	const f = 0;
	let red = Math.floor(Math.random()*256);
	let green = Math.floor(Math.random()*256);
	let blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}