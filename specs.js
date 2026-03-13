// 1️⃣ once function
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("once", () => {
  let myFunc;
  let add = (a, b) => a + b;

  beforeEach(() => {
    myFunc = once(add);
  });

  it("should return a function", () => {
    expect(typeof myFunc).toBe("function");
  });

  it("should run the function the first time", () => {
    expect(myFunc(2, 3)).toBe(5);
  });

  it("should not run the function again", () => {
    myFunc(2, 3);
    expect(myFunc(10, 10)).toBe(5);
  });

  it("should always return the first result", () => {
    myFunc(1, 2);
    expect(myFunc(5, 6)).toBe(3);
    expect(myFunc(100, 200)).toBe(3);
  });
});

//2️⃣ after function
describe("after", () => {
  let myFunc;
  let counter;

  beforeEach(() => {
    counter = 0;

    function increment() {
      counter++;
      return counter;
    }

    myFunc = after(3, increment);
  });

  it("should return a function", () => {
    expect(typeof myFunc).toBe("function");
  });

  it("should not run the function before 3 calls", () => {
    expect(myFunc()).toBeUndefined();
    expect(myFunc()).toBeUndefined();
  });

  it("should run the function on the 3rd call", () => {
    myFunc();
    myFunc();
    expect(myFunc()).toBe(1);
  });

  it("should run the function normally after that", () => {
    myFunc();
    myFunc();
    myFunc();
    expect(myFunc()).toBe(2);
  });
});

//3️⃣ limitCalls
describe("limitCalls", () => {
  let myFunc;
  let add = (a, b) => a + b;

  beforeEach(() => {
    myFunc = limitCalls(add, 3);
  });

  it("should return a function", () => {
    expect(typeof myFunc).toBe("function");
  });

  it("should run the function first 3 times", () => {
    expect(myFunc(1, 2)).toBe(3);
    expect(myFunc(2, 3)).toBe(5);
    expect(myFunc(3, 4)).toBe(7);
  });

  it("should stop after limit", () => {
    myFunc(1, 2);
    myFunc(2, 3);
    myFunc(3, 4);

    expect(myFunc(5, 6)).toBe("Limit reached");
  });

  it("should always return 'Limit reached' after that", () => {
    myFunc(1, 2);
    myFunc(2, 3);
    myFunc(3, 4);
    myFunc(5, 6);

    expect(myFunc(7, 8)).toBe("Limit reached");
  });
});
