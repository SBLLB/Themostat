
describe('Thermostat', function () {

	var = thermostat();

	describe('by default', function() {

		it('temperature should be set to 20 degrees', function() { 
			thermostat = new Thermostat;
			expect(thermostat.temperature).toEqual(20);

		});

	});


});