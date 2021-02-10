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

  describe('down',function(){
    it('can decrease the temperature', function(){
      thermostat.down();
      expect(thermostat.temp()).toBe(19);
    });
  });

  describe('minimum temp',function(){
    it('cannot go below 10', function(){
      thermostat = new Thermostat(10);
      expect( function() {
        thermostat.down();
      }).toThrow(new Error("Too cold"));
    });
  });
});
