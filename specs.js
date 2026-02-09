describe("onlyStrings: filter arguments", () => {
  beforeEach(() => {
    spyOn(Array, "from").and.callThrough();
  });

  it("returns only string arguments joined together", () => {
    expect(onlyStrings("Hi", 1, " ", true, "there")).toBe("Hi there");
  });

  it("returns an empty string if no strings are passed", () => {
    expect(onlyStrings(1, 2, false)).toBe("");
  });

  it("uses Array.from", () => {
    onlyStrings("A", "B");
    expect(Array.from).toHaveBeenCalled();
  });
});
