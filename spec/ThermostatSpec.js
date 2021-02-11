'use strict';

describe('Thermostat', function() {
  
  var thermostat;

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

  describe('power saving mode',function(){
    it('cannot go above 25', function(){
      thermostat = new Thermostat(25);
      expect( function() {
        thermostat.up();
      }).toThrow(new Error("Too hot"));
    });
  });

  describe('reset',function(){
    it('resets to 20', function(){
      thermostat.reset();
      expect(thermostat.temp()).toBe(20)
    });
  });

  describe('current energy usage',function(){
    it('outputs energy status', function(){
      expect(thermostat.energyUsage()).toBe("medium-usage")
      thermostat = new Thermostat(10);
      expect(thermostat.energyUsage()).toBe("low-usage")
      thermostat = new Thermostat(26);
      expect(thermostat.energyUsage()).toBe("high-usage")
    });
  });
});
