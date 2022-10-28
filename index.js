class Vehicle {
  constructor(name, fuelType, imported, used) {
    this._name = name;
    this._fuelType = fuelType;
    this._imported = imported;
    this._used = used;
  }
  get name() {
    return this._name;
  }
  get fuelType() {
    return this._fuelType;
  }
  set name(newName) {
    this._name = newName;
  }
  set fuelType(newFuelType) {
    this._fuelType = newFuelType;
  }
}

class Car extends Vehicle {
  used() {
    return "new";
  }
  imported() {
    return "made in India";
  }
}

class Bike extends Car {
  used() {
    return "used";
  }
  imported() {
    return "Imported";
  }
}

let car = new Car("honda", "petrol");

let bike = new Bike("dukati", "disel");

console.log(
  `Car: ${car.name}\n ${car.fuelType} \n ${car.used()} \n ${car.imported()}`
);
console.log(
  `Bike: ${bike.name}\n ${bike.fuelType} \n ${bike.used()} \n ${bike.imported()}`
);
