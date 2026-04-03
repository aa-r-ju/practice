//🔥 1. range + sum challenge
describe("range function", () => {
  it("returns an array of numbers from start to end (inclusive)", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("works with negative numbers", () => {
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });

  it("returns empty array if start > end", () => {
    expect(range(5, 1)).toEqual([]);
  });
});

describe("sum function", () => {
  it("returns the sum of all numbers in an array", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("returns 0 for empty array", () => {
    expect(sum([])).toBe(0);
  });

  it("works with negative numbers", () => {
    expect(sum([-1, -2, 3])).toBe(0);
  });
});

// 🔥 2. memoize (INTERVIEW LEVEL)
describe("memoize function", () => {
  it("returns a function", () => {
    const fn = memoize((x) => x);
    expect(typeof fn).toBe("function");
  });

  it("caches the result of function calls", () => {
    let count = 0;

    const square = memoize((x) => {
      count++;
      return x * x;
    });

    expect(square(2)).toBe(4);
    expect(square(2)).toBe(4);
    expect(count).toBe(1); // should not run twice
  });

  it("works with multiple inputs", () => {
    const add = memoize((a, b) => a + b);

    expect(add(1, 2)).toBe(3);
    expect(add(1, 2)).toBe(3);
  });
});

//🔥 3. EventEmitter (REAL INTERVIEW STYLE 😈)
describe("EventEmitter class", () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it("has an events object", () => {
    expect(typeof emitter.events).toBe("object");
  });

  it("can register an event listener", () => {
    const fn = () => {};
    emitter.on("click", fn);

    expect(emitter.events.click.length).toBe(1);
  });

  it("can emit an event", () => {
    let count = 0;

    emitter.on("inc", () => count++);
    emitter.emit("inc");

    expect(count).toBe(1);
  });

  it("can pass arguments to listeners", () => {
    let result;

    emitter.on("add", (a, b) => {
      result = a + b;
    });

    emitter.emit("add", 2, 3);
    expect(result).toBe(5);
  });

  it("can remove listeners", () => {
    let count = 0;
    const fn = () => count++;

    emitter.on("test", fn);
    emitter.off("test", fn);
    emitter.emit("test");

    expect(count).toBe(0);
  });
});
