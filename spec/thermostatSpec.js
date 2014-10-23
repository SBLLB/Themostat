
describe('Thermostat', function () {

	// var = thermostat();
	beforeEach(function(){
		thermostat = new Thermostat;
	});

	describe('by default', function() {

		it('temperature should be set to 20 degrees', function() { 
			expect(thermostat.temperature).toEqual(20);

		});

		it('should have power saving mode turned on', function() {
			expect(thermostat.isPowerSavingModeOn).toBe(true)
		}); 

	});

	describe('temperature', function() {
		
		it('can be increased by a 1 degree', function() {
			thermostat.increaseTemperatureByOne();
			expect(thermostat.temperature).toEqual(21);
		});
		
		it('can be increased by a number of degrees', function() {
			thermostat.increaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(25);
		});

		it('can be decreased by a 1 degree', function() {
			thermostat.decreaseTemperatureByOne();
			expect(thermostat.temperature).toEqual(19);
		});

		it('can be decreased by a number of degrees', function() {
			thermostat.decreaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(15);
		});

		it('cannot go lower than 10 degrees', function() {
			expect(function() {thermostat.decreaseTemperatureBy(11)}).toThrow(new Error('Temperature cannot be set below 10 degrees'));
		});

		xit('sets to 10 degrees if user has decreased the temperature below minimum 10 deg threshold', function() {
			thermostat.decreaseTemperatureBy(15);
			expect(thermostat.temperature).toEqual(10);
		});

		it('cannot go higher than the power saving mode maximum temperature', function() {
			expect(function() {thermostat.increaseTemperatureBy(6)}).toThrow(new Error('This exceeds the set maximum temperature'));
		});

		it("cannot go higher than the non-power saving mode maximum temperature", function() {
			thermostat.turnOffPowerSavingMode();
			expect(function() {thermostat.increaseTemperatureBy(13)}).toThrow(new Error('This exceeds the set maximum temperature'));
		});


	});

	describe('features includes a', function() {

		describe('Power Saving Mode which', function(){

			it('can be turned off', function() {
				thermostat.turnOffPowerSavingMode();
				expect(thermostat.isPowerSavingModeOn).toBe(false)
			});

			it('can be turned back on', function() {
				thermostat.turnOnPowerSavingMode();
				expect(thermostat.isPowerSavingModeOn).toBe(true)
			});

			it('when on sets the max temperature to 25 degrees', function() {
				expect(thermostat.maximumTemperature).toEqual(25)
			});

			it('when off sets the max temperature to 32 degrees', function() {
				thermostat.turnOffPowerSavingMode();
				expect(thermostat.maximumTemperature).toEqual(32)
			});

			it('when switched from off back to on reverts max temp to 25 degrees', function() {
				thermostat.turnOffPowerSavingMode();
				thermostat.turnOnPowerSavingMode();
				expect(thermostat.maximumTemperature).toEqual(25)
			});

		});

		describe('reset button', function(){
			it('that sets the temperature back to 20 degrees', function(){
				thermostat.increaseTemperatureByOne();
				thermostat.resetTemperature();
				expect(thermostat.temperature).toEqual(20);
			});
		});

		describe('responsive colour display', function() {
		
			it('that is green when temperature less than 18 degrees', function() {
				thermostat.decreaseTemperatureBy(4);
				expect(thermostat.displayColour).toEqual("green");
			});

			it('that is yellow when between 18 - 25 degrees', function() {
				expect(thermostat.displayColour).toEqual("yellow");
			});

		});
	});

});