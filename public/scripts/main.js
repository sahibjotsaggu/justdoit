$(document).ready(function() {
	$('.delete_card').on('click', function() {
		$(this).closest('#intro-card').remove();
	});
});