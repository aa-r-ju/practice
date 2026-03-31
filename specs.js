//🔥 1. Shape → Rectangle
describe("Shape Class", () => {
  it("has properties width and height", () => {
    const s = new Shape(10, 20);

    expect(s.width).toBe(10);
    expect(s.height).toBe(20);
  });

  it("has a method getArea", () => {
    const s = new Shape(5, 5);

    expect(typeof s.getArea).toBe("function");
    expect(s.hasOwnProperty("getArea")).toBe(false);
  });
});

describe("Rectangle Class", () => {
  it("extends Shape", () => {
    const r = new Rectangle(10, 5);

    expect(r instanceof Rectangle).toBe(true);
    expect(r instanceof Shape).toBe(true);
  });

  it("getArea returns width * height", () => {
    const r = new Rectangle(10, 5);

    expect(r.getArea()).toBe(50);
  });
});

//🔥 2. Person → Student
describe("Person Class", () => {
  it("has name and age", () => {
    const p = new Person("Aarju", 22);

    expect(p.name).toBe("Aarju");
    expect(p.age).toBe(22);
  });

  it("has introduce method", () => {
    const p = new Person("Aarju", 22);

    expect(p.introduce()).toBe("Hi, I am Aarju");
  });
});

describe("Student Class", () => {
  it("extends Person", () => {
    const s = new Student("Ram", 20, "BBS");

    expect(s instanceof Student).toBe(true);
    expect(s instanceof Person).toBe(true);
  });

  it("has course property", () => {
    const s = new Student("Ram", 20, "BBS");

    expect(s.course).toBe("BBS");
  });

  it("has study method", () => {
    const s = new Student("Ram", 20, "BBS");

    expect(s.study()).toBe("Studying BBS");
  });
});

//🔥 3. Counter (State + Methods)
describe("Counter Class", () => {
  it("starts from initial value", () => {
    const c = new Counter(5);

    expect(c.value).toBe(5);
  });

  it("increment increases value", () => {
    const c = new Counter(5);

    c.increment();
    expect(c.value).toBe(6);
  });

  it("decrement decreases value", () => {
    const c = new Counter(5);

    c.decrement();
    expect(c.value).toBe(4);
  });

  it("getValue returns current value", () => {
    const c = new Counter(10);

    expect(c.getValue()).toBe(10);
  });
});

//🔥 4. BankAccount (Real Interview Type)
describe("BankAccount Class", () => {
  it("has balance", () => {
    const acc = new BankAccount(100);

    expect(acc.balance).toBe(100);
  });

  it("deposit adds money", () => {
    const acc = new BankAccount(100);

    acc.deposit(50);
    expect(acc.balance).toBe(150);
  });

  it("withdraw subtracts money", () => {
    const acc = new BankAccount(100);

    acc.withdraw(30);
    expect(acc.balance).toBe(70);
  });

  it("does not allow negative balance", () => {
    const acc = new BankAccount(50);

    acc.withdraw(100);
    expect(acc.balance).toBe(50);
  });
});

// 🔥 5. Temperature Class
describe("Temperature Class", () => {
  it("stores value in celsius", () => {
    const t = new Temperature(0);

    expect(t.celsius).toBe(0);
  });

  it("converts to fahrenheit", () => {
    const t = new Temperature(0);

    expect(t.toFahrenheit()).toBe(32);
  });

  it("updates temperature", () => {
    const t = new Temperature(0);

    t.setCelsius(100);
    expect(t.celsius).toBe(100);
  });
});

//🔥 6. Password Class (VERY GOOD FOR INTERVIEW)
describe("Password Class", () => {
  it("stores password", () => {
    const p = new Password("abc123");

    expect(p.value).toBe("abc123");
  });

  it("has isValid method", () => {
    const p = new Password("abc123");

    expect(p.isValid()).toBe(true);
  });

  it("invalid if less than 6 chars", () => {
    const p = new Password("abc");

    expect(p.isValid()).toBe(false);
  });

  it("invalid if no number", () => {
    const p = new Password("abcdef");

    expect(p.isValid()).toBe(false);
  });
});
