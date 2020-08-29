//function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = temp;
        }

        get temperature() {
            return this._temp;
        }

        set temperature(newTemp) {
            this._temp = newTemp;
        }
    }
    //return Thermostat;
//}

//const Thermostat = makeClass();
const thermos = new Thermostat(76);
let t = thermos.temperature;
console.log(t);