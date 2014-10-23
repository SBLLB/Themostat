function Thermostat() {
	this.temperature = 20;
	this.isPowerSavingModeOn = true;
	this.maximumTemperature = 25; 
	this.displayColour = "yellow";
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
	this.setDisplayColour();
	if (this.temperature >= this.maximumTemperature)  
		return this.temperature = this.maximumTemperature
	else return this.temperature
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
	this.setDisplayColour();
	if (this.temperature < 10)  
		return this.temperature = 10
	else return this.temperature
};

Thermostat.prototype.resetTemperature = function() {
	return this.temperature = 20;
};

Thermostat.prototype.increaseTemperatureByOne = function() {
	return this.increaseTemperatureBy(1)
};

Thermostat.prototype.decreaseTemperatureByOne = function() {
	return this.decreaseTemperatureBy(1)
};

Thermostat.prototype.turnOffPowerSavingMode = function() {
	this.isPowerSavingModeOn = false;
	this.maximumTemperature = 32;
	return "Power Saving Mode Off";
};

Thermostat.prototype.turnOnPowerSavingMode = function() {
	this.isPowerSavingModeOn = true;
	this.maximumTemperature = 25;
	if (this.temperature > this.maximumTemperature) {
		this.temperature = this.maximumTemperature
	}
	return "Power Saving Mode On"
};


Thermostat.prototype.setDisplayColour = function(){
	console.log(this.temperature);
	if (this.temperature < 18) {
		this.displayColour = "green";
	}
	else if (this.temperature >= 18 && this.temperature < 25) {
		this.displayColour = "yellow";
	}
	else{
		this.displayColour = "blue";
	}
 };





