'use strict';

class Thermostat {

  constructor(setTemp = 20) {
    this.tempy = setTemp;
    this.powerSave = true
    this.MINIMUM_TEMP = 10
    this.MAXIMUM_TEMP = 25
  }

  powerSavey() {
    return this.powerSave;
  }

  temp() {
    return this.tempy;
  }

  reset() {
    this.tempy = 20
  }

  up() {
    if(this.tempy < this.MAXIMUM_TEMP) {
      this.tempy += 1;
    } else {
      throw new Error ('Too hot')
    }
  }

  switchSaveOff() {
    this.powerSave = false;
    this.MAXIMUM_TEMP = 32;
  }

  switchSaveOn() {
    this.powerSave = true;
    this.MAXIMUM_TEMP = 25;
  }

  energyUsage() {
    if(this.tempy < 18){
      return "low-usage";
    } else if(this.tempy <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }


  down() {
    if(this.tempy > this.MINIMUM_TEMP){
      this.tempy -= 1;
    } else {
      throw new Error ('Too cold')
    }
  }


}
