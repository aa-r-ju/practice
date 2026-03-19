//🧪 1️⃣ memoize(fn) (🔥 VERY IMPORTANT)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("memoize", () => {
  it("returns a function", () => {
    const fn = memoize((x) => x);
    expect(typeof fn).toBe("function");
  });

  it("returns correct result", () => {
    const square = memoize((x) => x * x);

    expect(square(2)).toBe(4);
    expect(square(3)).toBe(9);
  });

  it("caches results (function should not run again for same input)", () => {
    let count = 0;

    const square = memoize((x) => {
      count++;
      return x * x;
    });

    square(2);
    square(2);
    square(2);

    expect(count).toBe(1); // should only run once
  });

  it("works with different inputs", () => {
    let count = 0;

    const addOne = memoize((x) => {
      count++;
      return x + 1;
    });

    addOne(1);
    addOne(2);
    addOne(1);

    expect(count).toBe(2);
  });
});

//🧪 2️⃣ debounce(fn, delay)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("debounce", () => {
  jasmine.clock().install();

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("returns a function", () => {
    const fn = debounce(() => {}, 100);
    expect(typeof fn).toBe("function");
  });

  it("delays function execution", () => {
    let count = 0;

    const debounced = debounce(() => {
      count++;
    }, 100);

    debounced();
    expect(count).toBe(0);

    jasmine.clock().tick(100);
    expect(count).toBe(1);
  });

  it("resets timer if called again before delay", () => {
    let count = 0;

    const debounced = debounce(() => {
      count++;
    }, 100);

    debounced();
    jasmine.clock().tick(50);

    debounced(); // resets timer
    jasmine.clock().tick(50);
    expect(count).toBe(0);

    jasmine.clock().tick(50);
    expect(count).toBe(1);
  });
});

//🧪 3️⃣ throttle(fn, delay)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("throttle", () => {
  jasmine.clock().install();

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("returns a function", () => {
    const fn = throttle(() => {}, 100);
    expect(typeof fn).toBe("function");
  });

  it("runs function immediately first time", () => {
    let count = 0;

    const throttled = throttle(() => {
      count++;
    }, 100);

    throttled();
    expect(count).toBe(1);
  });

  it("prevents repeated calls within delay", () => {
    let count = 0;

    const throttled = throttle(() => {
      count++;
    }, 100);

    throttled(); // run
    throttled(); // ignored
    throttled(); // ignored

    expect(count).toBe(1);

    jasmine.clock().tick(100);

    throttled(); // allowed again
    expect(count).toBe(2);
  });
});
