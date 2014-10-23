// We need the HMTL to be fully loaded before  
// making any changes to the content.

$(document).ready(function() {
	var thermostat = new Thermostat;
	$('.temperature h1').text(thermostat.temperature);

	$('.increase_temperature').on('click', function() {
		$('.temperature h1').text(thermostat.increaseTemperatureByOne());
	});

	$('.decrease_temperature').on('click', function() {
		$('.temperature h1').text(thermostat.decreaseTemperatureByOne());
	});

	$('.reset_temperature').on('click', function() {
		$('.temperature h1').text(thermostat.resetTemperature());
	});

}); 


