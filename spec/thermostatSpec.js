
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

		xit('cannot go lower than 10 degrees', function() {
			expect(function() {thermostat.decreaseTemperatureBy(11)}).toThrow(new Error('Temperature cannot be set below 10 degrees'));
		});

		it('sets to 10 degrees if user has decreased the temperature below minimum 10 deg threshold', function() {
			thermostat.decreaseTemperatureBy(15);
			expect(thermostat.temperature).toEqual(10);
		});

		// it('can be reset to 20 degrees', function() {
		// 	thermostat.increaseTemperatureBy(5);
		// 	thermostat.reset;
		// 	expect(thermostat.temperature).toEqual(20);
		// });

	});

});