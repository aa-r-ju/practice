// 🧪 🔥 Advanced Throttle Spec (with return value)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("throttle (advanced)", () => {
  jasmine.clock().install();

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("returns the result of fn when allowed", () => {
    const throttled = throttle((x) => x * 2, 100);

    expect(throttled(2)).toBe(4);
  });

  it("returns last result when throttled", () => {
    const throttled = throttle((x) => x * 2, 100);

    throttled(2); // 4
    expect(throttled(3)).toBe(4); // should return last result
  });

  it("updates result after delay", () => {
    const throttled = throttle((x) => x * 2, 100);

    throttled(2); // 4

    jasmine.clock().tick(100);

    expect(throttled(3)).toBe(6); // new execution
  });

  it("continues returning last result while throttled", () => {
    const throttled = throttle((x) => x + 1, 100);

    expect(throttled(1)).toBe(2); // run

    expect(throttled(5)).toBe(2); // still old result
    expect(throttled(10)).toBe(2); // still old result

    jasmine.clock().tick(100);

    expect(throttled(7)).toBe(8); // new result
  });
});
