$(document).ready(function() {
	$('.done_card, .delete_card').on('click', function() {
		var $card = $(this).closest('.mdl-card');
		$card.fadeOut(195);
	});
});