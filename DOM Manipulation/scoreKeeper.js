let p1Button = document.querySelector("#p1Button");
let p2Button = document.querySelector("#p2Button");
let rButton = document.querySelector("#rButton");
let limitInput = document.querySelector("input");
let p1Score = 0;
let p2Score = 0;
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let limitDisplay = document.querySelector("#limitDisplay");
let limit = 5;
let gameOver = false;

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Display.textContent=++p1Score;
		if(p1Score===limit) {
			gameOver=true;
			p1Display.style.color="green";
		}
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Display.textContent=++p2Score;
		if(p2Score===limit) {
			gameOver=true;
			p2Display.style.color="green";
		}
	}
});

rButton.addEventListener("click", function() {
	reset();
});

limitInput.addEventListener("change", function() {
	limitDisplay.textContent=limitInput.value;
	limit=Number(limitInput.value);
	reset();
});

function reset() {
	gameOver=false;
	p1Score=p2Score=p1Display.textContent=p2Display.textContent=0;
	p1Display.style.color=p2Display.style.color="black";	
}