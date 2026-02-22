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
}
