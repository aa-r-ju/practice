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
let kk = new BankAccount("aarju", 1000);
console.log(kk.deposit(50));
console.log(kk);
console.log(kk.withdraw(100));
console.log(kk);
