class Animal {
  constructor(arr) {
    this.name = arr[0];
    this.age = arr[1];
  }

  getInfo(param) {
    return this[param];
  }
}

class Dog extends Animal {
  constructor(arr) {
    super(arr[2][0]);
    this.breed = arr[0];
    this.isPet = arr[1];
  }
  bark() {
    return "Woof!";
  }
}

class Device {
  constructor(arr) {
    this.brand = arr[0];
    this.os = arr[1];
  }

  getSpec(param) {
    return this[param];
  }
}

class Phone extends Device {
  constructor(arr) {
    super(arr[2][0]);
    this.model = arr[0];
    this.battery = arr[1];
  }
  charge() {
    return "Charging...";
  }
}
