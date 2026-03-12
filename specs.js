// 1️⃣ multiplier (Closure Practice)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("multiplier", () => {
  it("returns a function", () => {
    const result = multiplier(5);
    expect(typeof result).toBe("function");
  });

  it("multiplies numbers by the given value", () => {
    const double = multiplier(2);
    const triple = multiplier(3);

    expect(double(5)).toBe(10);
    expect(double(10)).toBe(20);

    expect(triple(5)).toBe(15);
  });
});

//2️⃣ propertyChecker
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("propertyChecker", () => {
  it("returns a function", () => {
    const check = propertyChecker("name");
    expect(typeof check).toBe("function");
  });

  it("checks if object contains property", () => {
    const checkName = propertyChecker("name");

    expect(checkName({ name: "Aarju" })).toBe(true);
    expect(checkName({ age: 20 })).toBe(false);
  });
});

// 3️⃣ counterFactory
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("counterFactory", () => {
  it("returns a function", () => {
    const counter = counterFactory();
    expect(typeof counter).toBe("function");
  });

  it("increments the counter each time it runs", () => {
    const counter = counterFactory();

    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
  });
});

//4️⃣ keyRemover
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("keyRemover", () => {
  it("returns a function", () => {
    const removeAge = keyRemover("age");
    expect(typeof removeAge).toBe("function");
  });

  it("removes a key from an object", () => {
    const removeAge = keyRemover("age");

    const obj = { name: "Aarju", age: 25 };

    removeAge(obj);

    expect(obj.age).toBe(undefined);
  });
});

//5️⃣ once (Interview Classic)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("once", () => {
  it("returns a function", () => {
    const fn = once(() => 5);
    expect(typeof fn).toBe("function");
  });

  it("runs the function only once", () => {
    let count = 0;

    const increment = once(() => {
      count++;
      return count;
    });

    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
  });
});
