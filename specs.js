//1️⃣ makeCounter
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("makeCounter", () => {
  it("is a function", () => {
    expect(typeof makeCounter).toBe("function");
  });

  it("returns an object", () => {
    expect(typeof makeCounter()).toBe("object");
  });

  it("has increment, decrement, and getValue methods", () => {
    const counter = makeCounter();

    expect(typeof counter.increment).toBe("function");
    expect(typeof counter.decrement).toBe("function");
    expect(typeof counter.getValue).toBe("function");
  });

  it("starts at 0", () => {
    const counter = makeCounter();
    expect(counter.getValue()).toBe(0);
  });

  it("increment increases the value", () => {
    const counter = makeCounter();
    counter.increment();
    counter.increment();
    expect(counter.getValue()).toBe(2);
  });

  it("decrement decreases the value", () => {
    const counter = makeCounter();
    counter.increment();
    counter.increment();
    counter.decrement();
    expect(counter.getValue()).toBe(1);
  });
});

//2️⃣ makeStack
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("makeStack", () => {
  it("is a function", () => {
    expect(typeof makeStack).toBe("function");
  });

  it("returns an object with push, pop and size", () => {
    const stack = makeStack();

    expect(typeof stack.push).toBe("function");
    expect(typeof stack.pop).toBe("function");
    expect(typeof stack.size).toBe("function");
  });

  it("push adds elements", () => {
    const stack = makeStack();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  it("pop removes last element", () => {
    const stack = makeStack();

    stack.push(10);
    stack.push(20);

    expect(stack.pop()).toBe(20);
    expect(stack.size()).toBe(1);
  });
});

//3️⃣ makeRangeIterator
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("makeRangeIterator", () => {
  it("is a function", () => {
    expect(typeof makeRangeIterator).toBe("function");
  });

  it("returns numbers in sequence", () => {
    const iterator = makeRangeIterator(3, 5);

    expect(iterator.getNext()).toEqual({ value: 3, done: false });
    expect(iterator.getNext()).toEqual({ value: 4, done: false });
    expect(iterator.getNext()).toEqual({ value: 5, done: false });
  });

  it("returns done true when finished", () => {
    const iterator = makeRangeIterator(1, 2);

    iterator.getNext();
    iterator.getNext();

    expect(iterator.getNext()).toEqual({ value: undefined, done: true });
  });
});

//4️⃣ makeMultiplier
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("makeMultiplier", () => {
  it("is a function", () => {
    expect(typeof makeMultiplier).toBe("function");
  });

  it("returns an object with multiply and getTotal", () => {
    const m = makeMultiplier();

    expect(typeof m.multiply).toBe("function");
    expect(typeof m.getTotal).toBe("function");
  });

  it("multiplies values cumulatively", () => {
    const m = makeMultiplier();

    m.multiply(2);
    m.multiply(3);

    expect(m.getTotal()).toBe(6);
  });

  it("continues multiplying", () => {
    const m = makeMultiplier();

    m.multiply(2);
    m.multiply(3);
    m.multiply(4);

    expect(m.getTotal()).toBe(24);
  });
});
