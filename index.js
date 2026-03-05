class Animal {
  constructor(arr) {
    this.name = arr[0];
    this.age = arr[1];
  }

  getInfo(param) {
    return this[param];
  }
}
let uuu = new Animal(["Dog", 5]);
console.log(uuu.getInfo("name"));
console.log(uuu.getInfo("age"));
