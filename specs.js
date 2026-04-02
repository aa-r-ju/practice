// 🔥 1. once function (closure + state)
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

  it("returns the same result after first call", () => {
    const fn = once(() => Math.random());
    const first = fn();
    expect(fn()).toBe(first);
    expect(fn()).toBe(first);
  });
});

// 🔥 2. memoize function (INTERVIEW LEVEL 😈)
describe("memoize", () => {
  it("returns a function", () => {
    const fn = memoize((x) => x);
    expect(typeof fn).toBe("function");
  });

  it("caches results for same input", () => {
    let count = 0;

    const square = memoize((x) => {
      count++;
      return x * x;
    });

    expect(square(2)).toBe(4);
    expect(square(2)).toBe(4);
    expect(count).toBe(1);
  });

  it("computes again for different inputs", () => {
    let count = 0;

    const square = memoize((x) => {
      count++;
      return x * x;
    });

    square(2);
    square(3);
    expect(count).toBe(2);
  });
});

// 🔥 3. debounce function (timing logic)
describe("debounce", () => {
  jasmine.clock().install();

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("delays function execution", () => {
    let count = 0;

    const fn = debounce(() => {
      count++;
    }, 100);

    fn();
    jasmine.clock().tick(50);
    expect(count).toBe(0);

    jasmine.clock().tick(50);
    expect(count).toBe(1);
  });

  it("resets timer if called again", () => {
    let count = 0;

    const fn = debounce(() => {
      count++;
    }, 100);

    fn();
    jasmine.clock().tick(50);
    fn();
    jasmine.clock().tick(50);
    expect(count).toBe(0);

    jasmine.clock().tick(50);
    expect(count).toBe(1);
  });
});

// 🔥 4. flatten function (arrays)
describe("flatten", () => {
  it("flattens a single level array", () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it("flattens deeply nested arrays", () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  it("returns empty array if input is empty", () => {
    expect(flatten([])).toEqual([]);
  });
});

// 🔥 5. groupBy function (OBJECT + REDUCE)
describe("groupBy", () => {
  it("groups numbers by even and odd", () => {
    const result = groupBy([1, 2, 3, 4], (num) =>
      num % 2 === 0 ? "even" : "odd",
    );

    expect(result).toEqual({
      odd: [1, 3],
      even: [2, 4],
    });
  });

  it("groups strings by length", () => {
    const result = groupBy(["a", "bb", "ccc"], (str) => str.length);

    expect(result).toEqual({
      1: ["a"],
      2: ["bb"],
      3: ["ccc"],
    });
  });
});

//🔥 6. limitCalls (ADVANCED 🔥🔥)
describe("limitCalls", () => {
  it("limits function calls", () => {
    let count = 0;

    const fn = limitCalls(() => {
      count++;
      return count;
    }, 2);

    expect(fn()).toBe(1);
    expect(fn()).toBe(2);
    expect(fn()).toBe(null);
    expect(fn()).toBe(null);
  });
});

// 🔥 7. pipe function (FUNCTION COMPOSITION)
describe("pipe", () => {
  it("pipes functions left to right", () => {
    const add2 = (x) => x + 2;
    const multiply3 = (x) => x * 3;

    const fn = pipe(add2, multiply3);

    expect(fn(2)).toBe(12); // (2+2)*3
  });
});
