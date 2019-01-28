//cross out items with a click
$('li').click(function() {
	$(this).toggleClass("crossed-out");
});