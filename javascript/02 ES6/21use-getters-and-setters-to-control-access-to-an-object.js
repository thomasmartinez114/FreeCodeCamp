function makeClass() {
  'use strict';
  /* Alter code below this line */

  class Thermostat {
    constructor(farenheit) {
      this.farenheit = farenheit;
    }
    // getter
    get weather() {
      return (5 / 9) * (this.farenheit - 32);
    }

    // setter
    set weather(celsius) {
      this.farenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
