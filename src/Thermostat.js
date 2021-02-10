class Thermostat {

  constructor(setTemp = 20) {
    this.tempy = setTemp;
  }

  temp() {
    return this.tempy;
  }

  up() {
    this.tempy += 1;
  }

  down() {
    const minimumTemp = 10;
    if(this.tempy > minimumTemp){
      this.tempy -= 1;
    } else {
      throw new Error ('Too cold')
    }
  }


}
