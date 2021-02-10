describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('initialization', function(){
    it('starts at temperature 20', function() {
      expect(thermostat.temp()).toBe(20);
    });
  });

  describe('up',function(){
    it('can increase the temperature', function(){
      thermostat.up();
      expect(thermostat.temp()).toBe(21);
    });
  });
});
