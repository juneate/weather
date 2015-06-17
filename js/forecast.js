// The API url and the city we want to check...
var url = "http://api.openweathermap.org/data/2.5/forecast/daily?callback=?";
var city = "Toronto";
var units = "metric";
var count = 7;

// Go call the URL and pass 3 parameters (q=city, units=metric/imperial, cnt=number of days to forecast)
$.getJSON(url, {'q':city, 'units':'metric', 'cnt':count}, function(data)
{
	// Dump all the data into the console
	console.log(data);


});