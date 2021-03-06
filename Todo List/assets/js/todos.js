//cross out items with a click
$('ul').on("click", "li", function() {
	$(this).toggleClass("crossed-out");
});

//delete items by clicking the 'X'
$('ul').on("click", "span", function(event) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//add new items in text input
$('input[type="text"]').keypress(function(event) {
	if(event.which===13) {
		$('ul').append("<li><span><i class='fas fa-trash'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

//toggle new item input
$('.fa-plus-circle').on("click", function() {
	$('input[type="text"]').fadeToggle();
})