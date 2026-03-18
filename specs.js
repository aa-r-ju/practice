// 🧪 1️⃣ toggler
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("toggler", () => {
  it("returns a function", () => {
    const toggle = toggler("on", "off");
    expect(typeof toggle).toBe("function");
  });

  it("cycles through given values", () => {
    const toggle = toggler("on", "off");

    expect(toggle()).toBe("on");
    expect(toggle()).toBe("off");
    expect(toggle()).toBe("on");
    expect(toggle()).toBe("off");
  });

  it("works with multiple values", () => {
    const toggle = toggler(1, 2, 3);

    expect(toggle()).toBe(1);
    expect(toggle()).toBe(2);
    expect(toggle()).toBe(3);
    expect(toggle()).toBe(1);
  });
});

//🧪 2️⃣ accumulator
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("accumulator", () => {
  it("returns a function", () => {
    const acc = accumulator(0);
    expect(typeof acc).toBe("function");
  });

  it("accumulates values", () => {
    const acc = accumulator(5);

    expect(acc(1)).toBe(6);
    expect(acc(2)).toBe(8);
    expect(acc(3)).toBe(11);
  });

  it("maintains state independently", () => {
    const acc1 = accumulator(0);
    const acc2 = accumulator(10);

    acc1(5);
    acc2(5);

    expect(acc1(5)).toBe(10);
    expect(acc2(5)).toBe(20);
  });
});

//🧪 3️⃣ callLimiterWithReset (🔥 advanced)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("callLimiterWithReset", () => {
  it("returns an object with call and reset", () => {
    const obj = callLimiterWithReset(() => "hi", 2);

    expect(typeof obj.call).toBe("function");
    expect(typeof obj.reset).toBe("function");
  });

  it("limits function calls", () => {
    const obj = callLimiterWithReset((x) => x * 2, 2);

    expect(obj.call(2)).toBe(4);
    expect(obj.call(3)).toBe(6);
    expect(obj.call(4)).toBe("Limit reached");
  });

  it("resets count correctly", () => {
    const obj = callLimiterWithReset((x) => x + 1, 1);

    obj.call(5);
    expect(obj.call(6)).toBe("Limit reached");

    obj.reset();

    expect(obj.call(10)).toBe(11);
  });
});
