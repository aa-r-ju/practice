// 🧪 1. flattenArray (RECURSION MUST)
describe("flattenArray", () => {
  it("returns an array", () => {
    expect(Array.isArray(flattenArray([1, [2], 3]))).toBe(true);
  });

  it("flattens a nested array", () => {
    expect(flattenArray([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles deeply nested arrays", () => {
    expect(flattenArray([[[[1]]], 2, [[3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  it("handles empty array", () => {
    expect(flattenArray([])).toEqual([]);
  });

  it("is recursive", () => {
    spyOn(window, "flattenArray").and.callThrough();
    flattenArray([1, [2, [3]]]);
    expect(flattenArray.calls.count()).toBeGreaterThan(1);
  });
});

// 🧪 2. sumNested (LIKE sumTheDigits but deeper)
describe("sumNested", () => {
  it("returns 0 for empty array", () => {
    expect(sumNested([])).toBe(0);
  });

  it("sums numbers in nested arrays", () => {
    expect(sumNested([1, [2, 3], [4, [5]]])).toBe(15);
  });

  it("handles deeply nested arrays", () => {
    expect(sumNested([[[1]], 2, [[3, [4]]]])).toBe(10);
  });

  it("is recursive", () => {
    spyOn(window, "sumNested").and.callThrough();
    sumNested([1, [2]]);
    expect(sumNested.calls.count()).toBeGreaterThan(1);
  });
});

// 🧪 3. reverseString (RECURSION)
describe("reverseString", () => {
  it("handles empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("handles single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("is recursive", () => {
    spyOn(window, "reverseString").and.callThrough();
    reverseString("abc");
    expect(reverseString.calls.count()).toBeGreaterThan(1);
  });
});

//🧪 4. countOccurrences
describe("countOccurrences", () => {
  it("returns 0 if element not found", () => {
    expect(countOccurrences([1, 2, 3], 4)).toBe(0);
  });

  it("counts occurrences in array", () => {
    expect(countOccurrences([1, 2, 2, 3, 2], 2)).toBe(3);
  });

  it("handles nested arrays", () => {
    expect(countOccurrences([1, [2, 2], [2, [2]]], 2)).toBe(4);
  });

  it("is recursive", () => {
    spyOn(window, "countOccurrences").and.callThrough();
    countOccurrences([1, [2]], 2);
    expect(countOccurrences.calls.count()).toBeGreaterThan(1);
  });
});

//🧪 5. findMax
describe("findMax", () => {
  it("returns single element", () => {
    expect(findMax([5])).toBe(5);
  });

  it("finds max in array", () => {
    expect(findMax([1, 5, 3])).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(findMax([-10, -5, -20])).toBe(-5);
  });

  it("handles nested arrays", () => {
    expect(findMax([1, [5, 2], [3, [10]]])).toBe(10);
  });

  it("is recursive", () => {
    spyOn(window, "findMax").and.callThrough();
    findMax([1, [2]]);
    expect(findMax.calls.count()).toBeGreaterThan(1);
  });
});

// 🧪 6. everyRecursive
describe("everyRecursive", () => {
  it("returns true for empty array", () => {
    expect(everyRecursive([], (x) => x > 0)).toBe(true);
  });

  it("checks condition for all elements", () => {
    expect(everyRecursive([2, 4, 6], (x) => x % 2 === 0)).toBe(true);
    expect(everyRecursive([2, 3, 6], (x) => x % 2 === 0)).toBe(false);
  });

  it("handles nested arrays", () => {
    expect(everyRecursive([2, [4, 6]], (x) => x % 2 === 0)).toBe(true);
  });

  it("is recursive", () => {
    spyOn(window, "everyRecursive").and.callThrough();
    everyRecursive([1, [2]]);
    expect(everyRecursive.calls.count()).toBeGreaterThan(1);
  });
});

// 🧪 7. 🔥 HARD: deepClone
describe("deepClone", () => {
  it("clones primitive values", () => {
    expect(deepClone(5)).toBe(5);
  });

  it("clones arrays", () => {
    const arr = [1, 2, [3]];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
  });

  it("clones objects", () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  it("is recursive", () => {
    spyOn(window, "deepClone").and.callThrough();
    deepClone({ a: { b: 2 } });
    expect(deepClone.calls.count()).toBeGreaterThan(1);
  });
});

//
