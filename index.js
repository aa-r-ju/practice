class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) return "Invalid amount";
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount <= 0) return "Invalid amount";
    if (amount > this.balance) return "Insufficient funds";

    this.balance -= amount;
    return this.balance;
  }
}

class ShoppingCart {
  constructor() {
    this.item = [];
  }
  addItem(name, price) {
    this.item.push({ name, price });
    return this.item.length;
  }

  getTotal() {
    return this.item.reduce((acc, char) => {
      return acc + char.price;
    }, 0);
  }
}

class TodoList {
  constructor() {
    this.list = [];
  }

  add(text) {
    let completed = false;
    this.list.push({ text, completed });
  }

  complete(index) {
    if (this.list[index]) {
      this.list[index].completed = true;
    }
  }

  getCompleted() {
    return this.list.filter((val) => val.completed);
  }
}

class UserStats {
  constructor(arr) {
    this.arr = arr;
  }

  getAdults() {
    return this.arr.filter((val) => val.age > 18);
  }

  getAverageAge() {
    if (this.arr.length === 0) return 0;
    let total = this.arr.reduce((acc, char) => {
      acc += char.age;
      return acc;
    }, 0);
    return total / this.arr.length;
  }
}

let kk = new UserStats([
  { name: "A", age: 20 },
  { name: "B", age: 17 },
  { name: "C", age: 25 },
]);
console.log(kk.getAdults());
console.log(kk.getAverageAge());
