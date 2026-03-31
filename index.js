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

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount < 0 || this.balance <= amount) {
      return this.balance;
    }
    return (this.balance -= amount);
  }
}

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  toFahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }

  setCelsius(value) {
    this.celsius = value;
  }
}

class Password {
  constructor(value) {
    this.value = value;
  }

  isValid() {
    if (this.value.length < 6) return false;

    let hasNumber = false;
    for (let i = 0; i < this.value.length; i++) {
      if (!isNaN(Number(this.value[i])) && this.value[i] !== " ") {
        hasNumber = true;
        break;
      }
    }

    return hasNumber;
  }
}
const p = new Password("abc123");
console.log(p);
console.log(p.isValid());
const l = new Password("abc");

console.log(l.isValid());
const k = new Password("abcdef");
console.log(k.isValid());
