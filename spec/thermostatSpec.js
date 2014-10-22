
describe('Thermostat', function () {

	// var = thermostat();

	describe('by default', function() {

		beforeEach(function(){
			thermostat = new Thermostat;
		});

		it('temperature should be set to 20 degrees', function() { 
			expect(thermostat.temperature).toEqual(20);

		});

		it('should have power saving mode turned on', function() {
			expect(thermostat.isPowerSavingModeOn).toBe(true)
		}); 

	});


});