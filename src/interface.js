// We need the HMTL to be fully loaded before  
// making any changes to the content.

$(document).ready(function() {
	var thermostat = new Thermostat;
	$('.temperature h1').text(thermostat.temperature);

	$.get('/weather', function(data) {
		$('.outsideTemp').text(data['weather']['curren_weather'][0]['temp'])
	});;


	$('.increase_temperature').on('click', function() {
		$('.temperature h1').text(thermostat.increaseTemperatureByOne());
	});

	$('.decrease_temperature').on('click', function() {
		$('.temperature h1').text(thermostat.decreaseTemperatureByOne());
	});

	$('.reset_temperature').on('click', function() {
		$('.temperature h1').text(thermostat.resetTemperature());
	});

	if ($ (thermostat.isPowerSavingModeOn === true)) {
		$('.temperature h2').text("Power Saving Mode is On")
	}
	else $('.temperature h2').text("Power Saving Mode is Off")
	

	$('.turn_power_saving_on').on('click', function() {
		$('.temperature h2').text(thermostat.turnOnPowerSavingMode());
		$('.temperature h1').text(thermostat.temperature);
	});

	$('.turn_power_saving_off').on('click', function() {
		$('.temperature h2').text(thermostat.turnOffPowerSavingMode());
	});

}); 


