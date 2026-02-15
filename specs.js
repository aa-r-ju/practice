//one
describe("the function some", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "some").and.callThrough();
  });

  const isOdd = (num) => num % 2 !== 0;

  it("returns true if at least one element passes", () => {
    expect(some([2, 4, 6, 7], isOdd)).toBe(true);
  });

  it("returns false if no elements pass", () => {
    expect(some([2, 4, 6, 8], isOdd)).toBe(false);
  });

  it("returns false for empty array", () => {
    expect(some([], isOdd)).toBe(false);
  });

  it("should not use Array.prototype.some", () => {
    some([1, 2, 3], isOdd);
    expect(Array.prototype.some.calls.any()).toBe(false);
  });
});

//two
describe("the function find", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "find").and.callThrough();
  });

  const isGreaterThanTen = (num) => num > 10;

  it("returns the first matching element", () => {
    expect(find([5, 12, 8, 20], isGreaterThanTen)).toBe(12);
  });

  it("returns undefined if no match found", () => {
    expect(find([1, 2, 3], isGreaterThanTen)).toBe(undefined);
  });

  it("should not use Array.prototype.find", () => {
    find([1, 2, 3], isGreaterThanTen);
    expect(Array.prototype.find.calls.any()).toBe(false);
  });
});

//three

describe("the function indexOf", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "indexOf").and.callThrough();
  });

  it("returns the index of the element", () => {
    expect(indexOf([10, 20, 30], 20)).toBe(1);
  });

  it("returns -1 if element not found", () => {
    expect(indexOf([10, 20, 30], 40)).toBe(-1);
  });

  it("should not use Array.prototype.indexOf", () => {
    indexOf([1, 2, 3], 2);
    expect(Array.prototype.indexOf.calls.any()).toBe(false);
  });
});

///four

describe("the function flatten", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "flat").and.callThrough();
  });

  it("flattens one level of nested arrays", () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it("handles empty array", () => {
    expect(flatten([])).toEqual([]);
  });

  it("should not use Array.prototype.flat", () => {
    flatten([1, [2]]);
    expect(Array.prototype.flat.calls.any()).toBe(false);
  });
});
