describe("sumAll: using the arguments object", () => {
  beforeEach(() => {
    spyOn(Array, "from").and.callThrough();
  });

  it("returns the sum of all numbers passed in", () => {
    const result = sumAll(1, 2, 3, 4);
    expect(result).toBe(10);
  });

  it("works with any number of arguments", () => {
    const result = sumAll(5, 10);
    expect(result).toBe(15);
  });

  it("uses Array.from to convert arguments into an array", () => {
    sumAll(1, 2, 3);
    expect(Array.from).toHaveBeenCalled();
  });
});
