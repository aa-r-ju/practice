// 🧪 1️⃣ "Password Manager"
describe("Password Manager", () => {
  let manager;

  beforeEach(() => {
    manager = createPasswordManager("1234");
  });

  it("returns an object", () => {
    expect(typeof manager).toBe("object");
  });

  it("has checkPassword and setPassword methods", () => {
    expect(typeof manager.checkPassword).toBe("function");
    expect(typeof manager.setPassword).toBe("function");
    expect(Object.keys(manager).length).toBe(2);
  });

  it("checkPassword returns true only for correct password", () => {
    expect(manager.checkPassword("1234")).toBe(true);
    expect(manager.checkPassword("wrong")).toBe(false);
  });

  it("setPassword changes the password", () => {
    manager.setPassword("abcd");
    expect(manager.checkPassword("1234")).toBe(false);
    expect(manager.checkPassword("abcd")).toBe(true);
  });
});

//🧪 2️⃣ "Bank Account"
describe("Bank Account", () => {
  let account;

  beforeEach(() => {
    account = createBankAccount(100);
  });

  it("returns object with deposit, withdraw, and getBalance", () => {
    expect(typeof account.deposit).toBe("function");
    expect(typeof account.withdraw).toBe("function");
    expect(typeof account.getBalance).toBe("function");
    expect(Object.keys(account).length).toBe(3);
  });

  it("deposit increases balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  it("withdraw decreases balance", () => {
    account.withdraw(30);
    expect(account.getBalance()).toBe(70);
  });

  it("cannot withdraw more than balance", () => {
    account.withdraw(200);
    expect(account.getBalance()).toBe(100);
  });
});

//🧪 3️⃣ "Secret Counter"

describe("Secret Counter", () => {
  let counter;

  beforeEach(() => {
    counter = createSecretCounter();
  });

  it("returns object with increment and reveal methods", () => {
    expect(typeof counter.increment).toBe("function");
    expect(typeof counter.reveal).toBe("function");
    expect(Object.keys(counter).length).toBe(2);
  });

  it("increment increases hidden count", () => {
    counter.increment();
    counter.increment();
    expect(counter.reveal()).toBe(2);
  });

  it("each counter is independent", () => {
    const counter2 = createSecretCounter();
    counter.increment();
    counter2.increment();
    counter2.increment();

    expect(counter.reveal()).toBe(1);
    expect(counter2.reveal()).toBe(2);
  });
});

// 🧪 4️⃣ (Slightly Harder) "Message Logger With Limit"
describe("Message Logger With Limit", () => {
  let logger;

  beforeEach(() => {
    logger = createLogger(2);
  });

  it("returns object with log and getLogs methods", () => {
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.getLogs).toBe("function");
    expect(Object.keys(logger).length).toBe(2);
  });

  it("stores only up to limit number of messages", () => {
    logger.log("a");
    logger.log("b");
    logger.log("c");

    expect(logger.getLogs()).toEqual(["a", "b"]);
  });
});
