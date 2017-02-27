$(document).ready(function() {
	$('.delete_button').on('click', function() {
		$(this).closest('.mdl-card').fadeOut();
	});
});
