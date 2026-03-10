class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    this.items.push({ name, price });
  }

  getTotal() {
    return this.items.reduce((acc, char) => {
      acc += char.price;
      return acc;
    }, 0);
  }

  removeItem(name) {
    this.items = this.items.filter((element) => element.name !== name);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name) {
    this.tasks.push({
      name: name,
      completed: false,
    });
  }

  completeTask(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    }
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }
}

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(paisa) {
    this.balance += paisa;
  }

  withdraw(paisa) {
    if (this.balance >= paisa) {
      this.balance -= paisa;
    } else {
      return "Insufficient funds";
    }
  }

  getBalance() {
    return this.balance;
  }
}

let kkk = new BankAccount("Aarju", 1000);
console.log(kkk);
console.log(kkk.deposit(500));
console.log(kkk);
console.log(kkk.withdraw(200));
console.log(kkk);
console.log(kkk.getBalance());
