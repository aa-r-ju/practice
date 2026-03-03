// 🧠 1️⃣ chainLookup
describe("chainLookup", () => {
  it("returns an array", () => {
    expect(Array.isArray(chainLookup([], []))).toBe(true);
  });

  it("maps values across multiple objects", () => {
    const result = chainLookup(["a", "b", "c"], [{ a: 1 }, { b: 2 }, { c: 3 }]);

    expect(result).toEqual([1, 2, 3]);
  });

  it("uses first match if duplicates exist", () => {
    const result = chainLookup(["x"], [{ x: 10 }, { x: 20 }]);

    expect(result).toEqual([10]);
  });

  it("uses map", () => {
    spyOn(Array.prototype, "map").and.callThrough();
    chainLookup(["a"], [{ a: 1 }]);
    expect(Array.prototype.map).toHaveBeenCalled();
  });
});

//🧠 2️⃣ doubleLookup
describe("doubleLookup", () => {
  it("returns an array", () => {
    expect(Array.isArray(doubleLookup([], [], []))).toBe(true);
  });

  it("maps using first object then second", () => {
    const result = doubleLookup(
      ["a", "b"],
      { a: 1, b: 2 },
      { 1: "one", 2: "two" },
    );

    expect(result).toEqual(["one", "two"]);
  });

  it("uses map", () => {
    spyOn(Array.prototype, "map").and.callThrough();
    doubleLookup(["a"], { a: 1 }, { 1: "one" });
    expect(Array.prototype.map).toHaveBeenCalled();
  });
});

//🧠 3️⃣ objectMergeMap
describe("objectMergeMap", () => {
  it("returns an array", () => {
    expect(Array.isArray(objectMergeMap([], []))).toBe(true);
  });

  it("merges objects before mapping", () => {
    const result = objectMergeMap(
      [1, 2, 3],
      [{ 1: "a" }, { 2: "b" }, { 3: "c" }],
    );

    expect(result).toEqual(["a", "b", "c"]);
  });

  it("uses reduce and map", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    spyOn(Array.prototype, "map").and.callThrough();

    objectMergeMap([1], [{ 1: "a" }]);

    expect(Array.prototype.reduce).toHaveBeenCalled();
    expect(Array.prototype.map).toHaveBeenCalled();
  });
});

//🧠 4️⃣ conditionalMap

describe("conditionalMap", () => {
  it("returns an array", () => {
    expect(Array.isArray(conditionalMap([], {}))).toBe(true);
  });

  it("maps only existing keys", () => {
    const result = conditionalMap(["a", "b", "c"], { a: 1, c: 3 });

    expect(result).toEqual([1, 3]);
  });

  it("uses filter and map", () => {
    spyOn(Array.prototype, "filter").and.callThrough();
    spyOn(Array.prototype, "map").and.callThrough();

    conditionalMap(["a"], { a: 1 });

    expect(Array.prototype.filter).toHaveBeenCalled();
    expect(Array.prototype.map).toHaveBeenCalled();
  });
});

// 🧠 5️⃣ nestedLookup

describe("nestedLookup", () => {
  it("returns an array", () => {
    expect(Array.isArray(nestedLookup([], []))).toBe(true);
  });

  it("retrieves nested values", () => {
    const result = nestedLookup(
      ["a", "b"],
      [{ a: { value: 1 } }, { b: { value: 2 } }],
    );

    expect(result).toEqual([1, 2]);
  });

  it("uses map", () => {
    spyOn(Array.prototype, "map").and.callThrough();
    nestedLookup(["a"], [{ a: { value: 1 } }]);
    expect(Array.prototype.map).toHaveBeenCalled();
  });
});
