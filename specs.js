// 1️⃣ Counter Class
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("Counter Class", () => {
  let counter;

  beforeEach(() => {
    counter = new Counter();
  });

  it("is an object", () => {
    expect(typeof counter).toBe("object");
  });

  it("has a count property starting at 0", () => {
    expect(counter.count).toBe(0);
  });

  it("has increment, decrement and reset methods on prototype", () => {
    expect(typeof Counter.prototype.increment).toBe("function");
    expect(typeof Counter.prototype.decrement).toBe("function");
    expect(typeof Counter.prototype.reset).toBe("function");
  });

  it("increment increases the count", () => {
    counter.increment();
    counter.increment();

    expect(counter.count).toBe(2);
  });

  it("decrement decreases the count", () => {
    counter.increment();
    counter.increment();
    counter.decrement();

    expect(counter.count).toBe(1);
  });

  it("reset sets the count back to 0", () => {
    counter.increment();
    counter.increment();

    counter.reset();

    expect(counter.count).toBe(0);
  });
});

// 2️⃣ ShoppingCart Class
describe("ShoppingCart Class", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  it("has an items property", () => {
    expect(Array.isArray(cart.items)).toBe(true);
  });

  it("addItem adds products", () => {
    cart.addItem("Laptop", 1000);
    cart.addItem("Mouse", 50);

    expect(cart.items.length).toBe(2);
  });

  it("getTotal returns total price", () => {
    cart.addItem("Laptop", 1000);
    cart.addItem("Mouse", 50);

    expect(cart.getTotal()).toBe(1050);
  });

  it("removeItem removes an item", () => {
    cart.addItem("Laptop", 1000);
    cart.addItem("Mouse", 50);

    cart.removeItem("Mouse");

    expect(cart.items.length).toBe(1);
  });
});

// 3️⃣ TaskManager Class
describe("TaskManager Class", () => {
  let taskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  it("starts with an empty tasks array", () => {
    expect(taskManager.tasks).toEqual([]);
  });

  it("addTask adds a task", () => {
    taskManager.addTask("Learn JS");

    expect(taskManager.tasks.length).toBe(1);
  });

  it("completeTask marks task as completed", () => {
    taskManager.addTask("Learn JS");

    taskManager.completeTask(0);

    expect(taskManager.tasks[0].completed).toBe(true);
  });

  it("getCompletedTasks returns completed tasks", () => {
    taskManager.addTask("Learn JS");
    taskManager.addTask("Practice coding");

    taskManager.completeTask(0);

    expect(taskManager.getCompletedTasks().length).toBe(1);
  });
});

// 4️⃣ BankAccount Class (Harder)
describe("BankAccount Class", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount("Aarju", 1000);
  });

  it("stores owner and balance", () => {
    expect(account.owner).toBe("Aarju");
    expect(account.balance).toBe(1000);
  });

  it("deposit increases balance", () => {
    account.deposit(500);

    expect(account.balance).toBe(1500);
  });

  it("withdraw decreases balance", () => {
    account.withdraw(200);

    expect(account.balance).toBe(800);
  });

  it("cannot withdraw more than balance", () => {
    expect(account.withdraw(2000)).toBe("Insufficient funds");
  });

  it("getBalance returns balance", () => {
    expect(account.getBalance()).toBe(1000);
  });
});
