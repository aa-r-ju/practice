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
let kk = new TodoList();
console.log(kk.add("hello"));
console.log(kk);
console.log(kk.complete(0));
console.log(kk);
