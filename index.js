class Vehicle {
  constructor(speed, fuelType) {
    this.speed = speed;
    this.fuelType = fuelType;
  }

  getDetails() {
    return `Speed: ${this.speed}, Fuel: ${this.fuelType}`;
  }
}
