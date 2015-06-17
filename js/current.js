// The API url and the city we want to check...
var weather = "http://api.openweathermap.org/data/2.5/weather?callback=?";
var units = "metric";

// When someones does a search
$('button[name="go"]').on('click', function(e) {

	// Get the city name from the search bar
	var city = $('input[name="city"]').val();

	// Pre request, setup a loading work or image
	$('.city').text('loading...');

	// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
	$.getJSON(weather, {'q':city, 'units':units}, function(data)
	{
		// Dump the data
		console.log(data);

		// Change up the interface using the data we got
		$('.city').text(data.name);
		$('.temp').html(data.main.temp + "&deg;C");

		// If the temp is above 0 go red, else go blue
		if (data.main.temp > 0) {
			$('body').css('background-color', '#EF665A');
		}
		else {
			$('body').css('background-color', '#87D7EF');
		}

	});

});

