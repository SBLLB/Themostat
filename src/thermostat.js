function Thermostat() {
	this.temperature = 20;
	this.isPowerSavingModeOn = true;
	this.maximumTemperature = 25; 
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
	if (this.temperature > this.maximumTemperature)  
		throw new Error("This exceeds the set maximum temperature");
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees
	if (this.temperature < 10)  
		throw new Error("Temperature cannot be set below 10 degrees");
};

// Thermostat.prototype.reset = function() {
// 	this.temperature = 20;
// };

Thermostat.prototype.increaseTemperatureByOne = function() {
	this.increaseTemperatureBy(1)
};

Thermostat.prototype.decreaseTemperatureByOne = function() {
	this.decreaseTemperatureBy(1)
};

Thermostat.prototype.turnOffPowerSavingMode = function() {
	this.isPowerSavingModeOn = false;
	this.maximumTemperature = 32;
};

Thermostat.prototype.turnOnPowerSavingMode = function() {
	this.isPowerSavingModeOn = true;
	this.maximumTemperature = 25;
};