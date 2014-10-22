function Thermostat() {
	this.temperature = 20;
	this.isPowerSavingModeOn = true;
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees
	if (this.temperature < 10)  this.temperature = 10
	 // throw new Error("Temperature cannot be set below 10 degrees");
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