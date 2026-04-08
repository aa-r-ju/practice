//🧪 8. someRecursive (opposite of every)
describe("someRecursive", () => {
  it("returns false for empty array", () => {
    expect(someRecursive([], (x) => x > 0)).toBe(false);
  });

  it("returns true if any element passes", () => {
    expect(someRecursive([1, 3, 5], (x) => x % 2 === 0)).toBe(false);
    expect(someRecursive([1, 4, 5], (x) => x % 2 === 0)).toBe(true);
  });

  it("handles nested arrays", () => {
    expect(someRecursive([1, [3, 5], [7, [8]]], (x) => x % 2 === 0)).toBe(true);
  });

  it("is recursive", () => {
    spyOn(window, "someRecursive").and.callThrough();
    someRecursive([1, [2]], (x) => x > 0);
    expect(someRecursive.calls.count()).toBeGreaterThan(1);
  });
});

//🧪 9. filterRecursive
describe("filterRecursive", () => {
  it("returns empty array if none pass", () => {
    expect(filterRecursive([1, 3, 5], (x) => x % 2 === 0)).toEqual([]);
  });

  it("filters elements", () => {
    expect(filterRecursive([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([2, 4]);
  });

  it("handles nested arrays", () => {
    expect(filterRecursive([1, [2, 3], [4, [5]]], (x) => x % 2 === 0)).toEqual([
      2, 4,
    ]);
  });

  it("is recursive", () => {
    spyOn(window, "filterRecursive").and.callThrough();
    filterRecursive([1, [2]], (x) => x > 0);
    expect(filterRecursive.calls.count()).toBeGreaterThan(1);
  });
});

//🧪 10. flattenDepth (LIMITED flatten)
describe("flattenDepth", () => {
  it("flattens one level", () => {
    expect(flattenDepth([1, [2, [3]]], 1)).toEqual([1, 2, [3]]);
  });

  it("flattens deeper levels", () => {
    expect(flattenDepth([1, [2, [3]]], 2)).toEqual([1, 2, 3]);
  });

  it("handles no depth", () => {
    expect(flattenDepth([1, [2]], 0)).toEqual([1, [2]]);
  });

  it("is recursive", () => {
    spyOn(window, "flattenDepth").and.callThrough();
    flattenDepth([1, [2]], 1);
    expect(flattenDepth.calls.count()).toBeGreaterThan(1);
  });
});

//🧪 11. findInNested
describe("findInNested", () => {
  it("returns undefined if not found", () => {
    expect(findInNested([1, [2, 3]], (x) => x === 5)).toBe(undefined);
  });

  it("finds element", () => {
    expect(findInNested([1, [2, 3]], (x) => x === 2)).toBe(2);
  });

  it("handles deeply nested arrays", () => {
    expect(findInNested([1, [2, [3, [4]]]], (x) => x === 4)).toBe(4);
  });

  it("is recursive", () => {
    spyOn(window, "findInNested").and.callThrough();
    findInNested([1, [2]], (x) => x > 0);
    expect(findInNested.calls.count()).toBeGreaterThan(1);
  });
});

// 🧪 12. sumOnlyEven
describe("sumOnlyEven", () => {
  it("returns 0 for empty array", () => {
    expect(sumOnlyEven([])).toBe(0);
  });

  it("sums only even numbers", () => {
    expect(sumOnlyEven([1, 2, 3, 4])).toBe(6);
  });

  it("handles nested arrays", () => {
    expect(sumOnlyEven([1, [2, 3], [4, [5, 6]]])).toBe(12);
  });

  it("is recursive", () => {
    spyOn(window, "sumOnlyEven").and.callThrough();
    sumOnlyEven([1, [2]]);
    expect(sumOnlyEven.calls.count()).toBeGreaterThan(1);
  });
});

//🧪 13. countTypes (🔥 INTERVIEW LEVEL)
describe("countTypes", () => {
  it("counts primitives", () => {
    expect(countTypes([1, "a", true])).toEqual({
      number: 1,
      string: 1,
      boolean: 1,
    });
  });

  it("handles nested arrays", () => {
    expect(countTypes([1, ["a", true], [2]])).toEqual({
      number: 2,
      string: 1,
      boolean: 1,
    });
  });

  it("is recursive", () => {
    spyOn(window, "countTypes").and.callThrough();
    countTypes([1, [2]]);
    expect(countTypes.calls.count()).toBeGreaterThan(1);
  });
});

// 🧪 14. deepEqual (🔥 HARD)
describe("deepEqual", () => {
  it("compares primitives", () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual(1, 2)).toBe(false);
  });

  it("compares arrays", () => {
    expect(deepEqual([1, [2]], [1, [2]])).toBe(true);
  });

  it("compares objects", () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
  });

  it("is recursive", () => {
    spyOn(window, "deepEqual").and.callThrough();
    deepEqual({ a: { b: 2 } }, { a: { b: 2 } });
    expect(deepEqual.calls.count()).toBeGreaterThan(1);
  });
});
