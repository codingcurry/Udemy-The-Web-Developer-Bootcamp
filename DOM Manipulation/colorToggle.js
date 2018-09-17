var button = document.querySelector("button");

//Method 1
// button.addEventListener("click", function() {
// 	if(document.body.style.background==="purple") document.body.style.background="white";
//   	else document.body.style.background = "purple";
// });


//Method 2
button.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});