describe("countArgs: counting function arguments", () => {
  it("returns how many arguments were passed in", () => {
    expect(countArgs("a", "b", "c")).toBe(3);
  });

  it("returns 0 when no arguments are passed", () => {
    expect(countArgs()).toBe(0);
  });
});
