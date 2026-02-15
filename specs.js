describe("the function reduce", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "reduce").and.callThrough();
  });

  it("sums numbers in an array", () => {
    const sum = (acc, el) => acc + el;
    expect(reduce([1, 2, 3, 4], sum, 0)).toBe(10);
  });

  it("multiplies numbers in an array", () => {
    const multiply = (acc, el) => acc * el;
    expect(reduce([1, 2, 3, 4], multiply, 1)).toBe(24);
  });

  it("concatenates strings", () => {
    const join = (acc, el) => acc + el;
    expect(reduce(["a", "b", "c"], join, "")).toBe("abc");
  });

  it("does not use Array.prototype.reduce", () => {
    reduce([1, 2, 3], (a, b) => a + b, 0);
    expect(Array.prototype.reduce.calls.any()).toBe(false);
  });
});
