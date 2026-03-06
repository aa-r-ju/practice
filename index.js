Array.prototype.squareNumbers = function () {
  let newArr = [];
  this.forEach((element) => {
    newArr.push(element * element);
  });
  return newArr;
};

Array.prototype.onlyStrings = function () {
  let newArr = [];
  this.forEach((element) => {
    if (typeof element === "string") {
      newArr.push(element);
    }
  });
  return newArr;
};

class Animal {
  constructor(arr) {
    this.name = arr[0];
    this.age = arr[1];
  }
  getInfo(para) {
    return this[para];
  }
}

class Cat extends Animal {
  constructor(arr) {
    super(arr[2][0]);
    this.breed = arr[0];
    this.isPet = arr[1];
  }
  meow() {
    return "Meow!";
  }
}

class Device {
  constructor(arr) {
    this.brand = arr[0];
    this.os = arr[1];
  }
}

class Laptop extends Device {
  constructor(arr) {
    super(arr[2][0]);
    this.model = arr[0];
    this.ram = arr[1];
  }
  start() {
    return "Laptop starting...";
  }
}

Array.prototype.reverseStrings = function () {
  let newStr = [];
  this.forEach((element) => {
    if (typeof element === "string") {
      let str = "";
      for (let i = element.length - 1; i >= 0; i--) {
        str += element[i];
      }
      newStr.push(str);
    } else {
      newStr.push(element);
    }
  });
  return newStr;
};

console.log(["dog", 123, true].reverseStrings());
console.log(["dog", "cat", "bird"].reverseStrings());
