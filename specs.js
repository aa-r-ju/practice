describe("advanced includes", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "includes").and.callThrough();
  });

  it("works with arrays", () => {
    expect(includes([1, 2, 3], 3)).toBe(true);
  });

  it("works with objects", () => {
    expect(includes({ x: 10, y: 20 }, 20)).toBe(true);
  });

  it("works with single numbers", () => {
    expect(includes(7, 7)).toBe(true);
    expect(includes(7, 8)).toBe(false);
  });

  it("works with strings", () => {
    expect(includes("hello", "hello")).toBe(true);
  });

  it("does not use Array.prototype.includes", () => {
    includes([1, 2, 3], 2);
    expect(Array.prototype.includes.calls.any()).toBe(false);
  });
});
