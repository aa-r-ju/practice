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

class InventoryManager {
  constructor(arr) {
    this.arr = arr;
  }

  groupByName() {
    return this.arr.reduce((acc, char) => {
      if (!acc[char.name]) {
        acc[char.name] = 0;
      }
      acc[char.name] += char.qty;
      return acc;
    }, {});
  }
}

let kk = new InventoryManager([
  { name: "apple", qty: 10 },
  { name: "banana", qty: 5 },
  { name: "apple", qty: 3 },
]);
console.log(kk.groupByName());
