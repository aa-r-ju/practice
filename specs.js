// 🔥 1. onceEvery(n, fn) (UPGRADE)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("onceEvery", () => {
  it("runs function every nth call", () => {
    const fn = onceEvery(3, (x) => x * 2);

    expect(fn(2)).toBe("Not yet");
    expect(fn(2)).toBe("Not yet");
    expect(fn(2)).toBe(4);

    expect(fn(3)).toBe("Not yet");
    expect(fn(3)).toBe("Not yet");
    expect(fn(3)).toBe(6);
  });

  it("works repeatedly", () => {
    const fn = onceEvery(2, (x) => x + 1);

    expect(fn(1)).toBe("Not yet");
    expect(fn(1)).toBe(2);

    expect(fn(5)).toBe("Not yet");
    expect(fn(5)).toBe(6);
  });
});

// 🔥 2. limitCalls(fn, n)
describe("limitCalls", () => {
  it("runs only n times", () => {
    const fn = limitCalls((x) => x * 2, 2);

    expect(fn(2)).toBe(4);
    expect(fn(3)).toBe(6);
    expect(fn(4)).toBe("Limit reached");
    expect(fn(5)).toBe("Limit reached");
  });
});

//🔥 3. after(n, fn)
describe("after", () => {
  it("runs only after n calls", () => {
    const fn = after(3, (x) => x + 10);

    expect(fn(1)).toBe(undefined);
    expect(fn(1)).toBe(undefined);
    expect(fn(1)).toBe(11);
    expect(fn(2)).toBe(12);
  });
});

//🔥 4. cycle(fn1, fn2, fn3)
describe("cycle", () => {
  it("cycles through functions", () => {
    const fn = cycle(
      (x) => x + 1,
      (x) => x * 2,
      (x) => x - 3,
    );

    expect(fn(5)).toBe(6); // fn1
    expect(fn(5)).toBe(10); // fn2
    expect(fn(5)).toBe(2); // fn3
    expect(fn(5)).toBe(6); // fn1 again
  });
});

//🔥 5. HARD: memoize(fn) 😈
describe("memoize", () => {
  it("caches results", () => {
    let count = 0;

    const fn = memoize((x) => {
      count++;
      return x * 2;
    });

    expect(fn(2)).toBe(4);
    expect(fn(2)).toBe(4);
    expect(fn(2)).toBe(4);

    expect(count).toBe(1); // only ran once
  });
});

//🔥 6. VERY HARD: throttle(fn, n) 😈💣
describe("throttle (call-based)", () => {
  it("only runs every nth call", () => {
    const fn = throttle((x) => x * 2, 3);

    expect(fn(2)).toBe("Throttled");
    expect(fn(2)).toBe("Throttled");
    expect(fn(2)).toBe(4);

    expect(fn(3)).toBe("Throttled");
    expect(fn(3)).toBe("Throttled");
    expect(fn(3)).toBe(6);
  });
});

//🔥 debounce(fn, n) (CALL-BASED VERSION)
describe("debounce (call-based)", () => {
  it("runs only after n calls stop", () => {
    const fn = debounce((x) => x * 2, 3);

    expect(fn(2)).toBe(undefined);
    expect(fn(2)).toBe(undefined);
    expect(fn(2)).toBe(4); // runs here

    expect(fn(3)).toBe(undefined);
    expect(fn(3)).toBe(undefined);
    expect(fn(3)).toBe(6);
  });
});
