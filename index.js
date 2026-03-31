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
const p = new Person("Aarju", 22);
const s = new Student("Ram", 20, "BBS");
console.log(p.introduce());
console.log(s.study());
