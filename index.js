class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
    this.speeds = [];
  }

  getBrand() {
    return this.brand;
  }

  getYear() {
    return this.year;
  }

  addSpeed(val) {
    if (val < 1 || val > 300) {
      return `${val} is not a valid speed`;
    } else {
      this.speeds.push(val);
    }
  }

  getAverageSpeed() {
    if (this.speeds.length === 0) {
      return `There is no speeds`;
    }
    let sum = this.speeds.reduce((acc, char) => {
      acc += char;
      return acc;
    }, 0);
    return sum / this.speeds.length;
  }
}

let kk = new Vehicle("Toyota", 2020);
console.log(kk.addSpeed(90));
console.log(kk.addSpeed(100));
console.log(kk.addSpeed(300));
console.log(kk.getAverageSpeed());
console.log(kk.getBrand());
console.log(kk.getYear());
console.log(kk);
