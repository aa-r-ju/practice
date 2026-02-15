describe("the function reverseMap", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "map").and.callThrough();
  });

  // pure function to negate a number
  const negate = (num) => -num;

  it("negates a single number", () => {
    expect(negate(5)).toBe(-5);
  });

  it("applies negation to all elements using reverseMap", () => {
    expect(reverseMap([1, 2, 3, 4], negate)).toEqual([-1, -2, -3, -4]);
  });

  it("applies a square function to all elements", () => {
    expect(reverseMap([1, 2, 3], (num) => num * num)).toEqual([1, 4, 9]);
  });

  it("does not use Array.prototype.map", () => {
    reverseMap([1, 2, 3], negate);
    expect(Array.prototype.map.calls.any()).toBe(false);
  });
});

describe("the function select", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "filter").and.callThrough();
  });

  const isPositive = (num) => num > 0;
  const isEven = (num) => num % 2 === 0;

  it("filters positive numbers from an array", () => {
    expect(select([-2, -1, 0, 1, 2, 3], isPositive)).toEqual([1, 2, 3]);
  });

  it("filters even numbers from an array", () => {
    expect(select([1, 2, 3, 4, 5, 6], isEven)).toEqual([2, 4, 6]);
  });

  it("returns empty array if no elements match", () => {
    expect(select([-3, -2, -1], isPositive)).toEqual([]);
  });

  it("does not use Array.prototype.filter", () => {
    select([1, 2, 3], isPositive);
    expect(Array.prototype.filter.calls.any()).toBe(false);
  });
});

describe("the function mapFilterCombo", () => {
  it("first maps then filters an array", () => {
    const multiplyByTwo = (x) => x * 2;
    const greaterThanThree = (x) => x > 3;

    const result = mapFilterCombo([1, 2, 3], multiplyByTwo, greaterThanThree);
    expect(result).toEqual([4, 6]);
  });
});
