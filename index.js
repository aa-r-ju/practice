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
const acc = new BankAccount(100);
console.log(acc.deposit(100));
console.log(acc);
console.log(acc.withdraw(0));
console.log(acc);
