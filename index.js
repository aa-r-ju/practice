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
const r = new Rectangle(10, 5);
console.log(r.getArea());
