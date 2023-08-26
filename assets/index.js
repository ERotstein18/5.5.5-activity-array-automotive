const VehicleModule = require("./vehicleBaseClass")

let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            console.log('Time for maintenance!');
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("Let's go!");
            return this.started = true;
        } else {
            console.log("Oh no!");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passengers < this.maxPassengers) {
            this.passengers = num;
            return this.passengers;
        } else {
            console.log(this.model + "" + this.make + 'not have enough room to take all the passengers.');
        } else{
            console.log(this.model + "" + this.make + 'is full!');
        }
    }
}
