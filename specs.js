//🔥 1. Bank Account Class (VERY COMMON)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("BankAccount class", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount("Aarju", 100);
  });

  it("creates an instance", () => {
    expect(account instanceof BankAccount).toBe(true);
  });

  it("stores name and balance", () => {
    expect(account.name).toBe("Aarju");
    expect(account.balance).toBe(100);
  });

  it("deposit increases balance", () => {
    account.deposit(50);
    expect(account.balance).toBe(150);
  });

  it("withdraw decreases balance", () => {
    account.withdraw(30);
    expect(account.balance).toBe(70);
  });

  it("withdraw should not allow negative balance", () => {
    expect(account.withdraw(200)).toBe("Insufficient funds");
    expect(account.balance).toBe(100);
  });
});

//🔥 2. Shopping Cart (USES REDUCE 😈)
describe("ShoppingCart class", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  it("adds items to cart", () => {
    cart.addItem("apple", 100);
    cart.addItem("banana", 50);

    expect(cart.items.length).toBe(2);
  });

  it("calculates total using reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();

    cart.addItem("apple", 100);
    cart.addItem("banana", 50);

    expect(cart.getTotal()).toBe(150);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

  it("returns 0 if cart is empty", () => {
    expect(cart.getTotal()).toBe(0);
  });
});

//🔥 3. Todo List (INTERVIEW FAVORITE)
describe("TodoList class", () => {
  let todos;

  beforeEach(() => {
    todos = new TodoList();
  });

  it("adds a todo", () => {
    todos.add("Learn JS");
    expect(todos.list.length).toBe(1);
  });

  it("marks todo as completed", () => {
    todos.add("Learn JS");
    todos.complete(0);

    expect(todos.list[0].completed).toBe(true);
  });

  it("filters completed todos", () => {
    todos.add("Task 1");
    todos.add("Task 2");

    todos.complete(0);

    const completed = todos.getCompleted();
    expect(completed.length).toBe(1);
  });
});

//🔥 4. User Statistics (MAP + FILTER + REDUCE)
describe("UserStats class", () => {
  let users;
  let stats;

  beforeEach(() => {
    users = [
      { name: "A", age: 20 },
      { name: "B", age: 17 },
      { name: "C", age: 25 },
    ];
    stats = new UserStats(users);
  });

  it("filters adults", () => {
    const result = stats.getAdults();
    expect(result.length).toBe(2);
  });

  it("calculates average age using reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();

    const avg = stats.getAverageAge();
    expect(avg).toBeGreaterThan(0);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🔥 5. Inventory Manager (UPGRADE OF YOUR VM 😈)
describe("InventoryManager class", () => {
  let manager;

  beforeEach(() => {
    manager = new InventoryManager([
      { name: "apple", qty: 10 },
      { name: "banana", qty: 5 },
      { name: "apple", qty: 3 },
    ]);
  });

  it("groups items by name", () => {
    const grouped = manager.groupByName();

    expect(grouped.apple).toBe(13);
    expect(grouped.banana).toBe(5);
  });

  it("uses reduce for grouping", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    manager.groupByName();
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
