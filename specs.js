describe("multiplyAll: multiply using arguments", () => {
  beforeEach(() => {
    spyOn(Array, "from").and.callThrough();
  });

  it("multiplies all arguments together", () => {
    expect(multiplyAll(2, 3, 4)).toBe(24);
  });

  it("returns 1 when only one number is passed", () => {
    expect(multiplyAll(5)).toBe(5);
  });

  it("uses Array.from", () => {
    multiplyAll(1, 2);
    expect(Array.from).toHaveBeenCalled();
  });
});
