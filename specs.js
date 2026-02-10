//one

describe("callTwice", () => {
  it("calls the given function two times", () => {
    let count = 0;
    const fn = () => count++;

    callTwice(fn);

    expect(count).toBe(2);
  });

  it("returns the result of the second call", () => {
    const fn = () => "Hi";

    expect(callTwice(fn)).toBe("Hi");
  });
});

//two

describe("once", () => {
  it("calls a function only once", () => {
    let count = 0;
    const fn = () => ++count;

    const callOnce = once(fn);

    callOnce();
    callOnce();
    callOnce();

    expect(count).toBe(1);
  });

  it("returns the first result every time", () => {
    const fn = () => "Hello";

    const callOnce = once(fn);

    expect(callOnce()).toBe("Hello");
    expect(callOnce()).toBe("Hello");
  });
});

//three
describe("makeCounter", () => {
  it("returns a function", () => {
    const counter = makeCounter();
    expect(typeof counter).toBe("function");
  });

  it("increments count each time it is called", () => {
    const counter = makeCounter();

    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
  });

  it("each counter has its own independent state", () => {
    const c1 = makeCounter();
    const c2 = makeCounter();

    expect(c1()).toBe(1);
    expect(c1()).toBe(2);

    expect(c2()).toBe(1);
  });
});

//four
describe("compose", () => {
  const add2 = (x) => x + 2;
  const double = (x) => x * 2;

  it("returns a new function", () => {
    const fn = compose(add2, double);
    expect(typeof fn).toBe("function");
  });

  it("applies functions from right to left", () => {
    const fn = compose(add2, double);

    // double(5) = 10 → add2(10) = 12
    expect(fn(5)).toBe(12);
  });
});

//five

describe("makeLogger", () => {
  it("logs all values passed to the returned function", () => {
    const logger = makeLogger();

    logger("a");
    logger("b");
    logger("c");

    expect(logger.getLogs()).toEqual(["a", "b", "c"]);
  });
});
