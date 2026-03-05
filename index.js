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
let kk = new Dog(["Bulldog", true, [["Dog", 5]]]);
console.log(kk.bark());
