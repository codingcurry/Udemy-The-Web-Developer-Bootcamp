let li = document.querySelectorAll("li");

for(let i=0; i<li.length; i++) {
	li[i].addEventListener("mouseover", function() {
		this.classList.add("hover");
	});

	li[i].addEventListener("mouseout", function() {
		this.classList.remove("hover");
	});

	li[i].addEventListener("click", function() {
		this.classList.toggle("complete");
	});
}