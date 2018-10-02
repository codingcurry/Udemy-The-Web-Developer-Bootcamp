let mode = 6; //determines easy(3) or hard(6) mode
let colors = generateRandomColors(mode);	
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let rgbDisplay = document.querySelector("#rgbCode");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

resetButton.addEventListener("click", function() {
	colors=generateRandomColors(mode);
	pickedColor=pickColor();
	rgbDisplay.textContent=pickedColor;
	for(let i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="#2b2b2b";
	message.textContent="Play";
});

hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	mode=6;
	colors = generateRandomColors(mode);
	pickedColor = pickColor();
	rgbDisplay.textContent=pickedColor;
	for(let i=0; i<squares.length; i++) {
		if(i>2) {
			squares[i].style.display="block";
		}
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="#2b2b2b";
	message.textContent="Play";
});

easy.addEventListener("click", function() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	mode=3;
	colors = generateRandomColors(mode);
	pickedColor = pickColor();
	rgbDisplay.textContent=pickedColor;
	for(let i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor=colors[i];
		}
		else {
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="#2b2b2b";
	message.textContent="Play";
});

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