function Thermostat() {
	this.temperature = 20;
	this.isPowerSavingModeOn = true;
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees
	if (this.temperature < 10) throw new Error("Temperature cannot be set below 10 degrees");
};