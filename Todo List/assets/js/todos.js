//cross out items with a click
$('li').click(function() {
	$(this).toggleClass("crossed-out");
});

//delete items by clicking the 'X'
$('span').click(function(event) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
})