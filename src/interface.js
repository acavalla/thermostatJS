$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  })

  $('#power-saving-status').on('click', function(){
    thermostat.powerSavey();
  })

  $('#powersaving-on').on('click', function(){
    thermostat.switchSaveOn();
    $('#power-saving-status').text('on');
  })

  $('#powersaving-off').on('click', function(){
    thermostat.switchSaveOff();
    $('#power-saving-status').text('off');
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.tempy);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

})
