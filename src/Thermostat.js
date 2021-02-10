class Thermostat {
  constructor() {
    this.tempy = 20;
  }

  temp() {
    return this.tempy;
  }

  up() {
    return this.tempy += 1;
  }
}
