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
let kk = new ShoppingCart();
console.log(kk.addItem("apple", 100));
console.log(kk.addItem("mango", 120));
console.log(kk.getTotal());
console.log(kk);
