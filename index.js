class Vehicle {
  constructor(speed, fuelType) {
    this.speed = speed;
    this.fuelType = fuelType;
  }

  getDetails() {
    return `Speed: ${this.speed}, Fuel: ${this.fuelType}`;
  }
}

class Car extends Vehicle {
  constructor(speed, fuelType, doors) {
    super(speed, fuelType);
    this.doors = doors;
  }

  getDetails() {
    return `Speed: ${this.speed}, Fuel: ${this.fuelType},Doors: ${this.doors}`;
  }
  //we can also do this instead
  getDetails() {
    return `${super.getDetails()}, Doors: ${this.doors}`;
  }
}
