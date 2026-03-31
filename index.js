class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return;
  }
}

class Rectangle extends Shape {
  getArea() {
    return this.width * this.height;
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I am ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    return `Studying ${this.course}`;
  }
}

class Counter {
  constructor(value) {
    this.value = value;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  getValue() {
    return this.value;
  }
}
const c = new Counter(5);
console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c);
console.log(c.decrement());
console.log(c);
console.log(c.getValue());
