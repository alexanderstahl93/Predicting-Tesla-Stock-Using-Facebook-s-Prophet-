$(document).ready(function() {
	$('#pitch-form').on('submit', function(event) {
		event.preventDefault();
		var persona = $('#persona').val();
		var action = $('#action').val();
		var description = $('#description').val();
		$.ajax({
			method: 'POST',
			url: '/generate-pitches',
			data: { persona: persona, action: action, description: description },
			success: function(data) {
				$('#pitch-container').html('');
				$.each(data.pitches, function(index, pitch) {
					var pitchElement = $('<div>').addClass('pitch');
					var pitchText = $('<p>').text(pitch);
					var tagline = $('<p>').addClass('tagline').text('"' + persona + '", "' + action + '", "' + description + '"');
					pitchElement.append(pitchText).append(tagline);
					$('#pitch-container').append(pitchElement);
				});
			},
			error: function(xhr, status, error) {
				console.error(error);
			}
		});
	});
});
