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

class Person {
  constructor(arr) {
    this.name = arr[0];
    this.age = arr[1];
  }
  getDetail(param) {
    return this[param];
  }
}

class Student extends Person {
  constructor(arr) {
    super(arr[2][0]);
    this.major = arr[0];
    this.gpa = arr[1];
  }

  study() {
    return "Studying...";
  }
}

class Shape {
  constructor(arr) {
    this.type = arr[0];
  }
  getType() {
    return this.type;
  }
}

class Rectangle extends Shape {
  constructor(arr) {
    super(arr[2]);
    this.width = arr[0];
    this.height = arr[1];
  }
  area() {
    return this.width * this.height;
  }
}

let hh = new Rectangle([10, 5, [["rectangle"]]]);
console.log(hh.area());
