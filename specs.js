describe("the function filter", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "filter").and.callThrough();
  });

  // Example callbacks
  const evenFilter = (el) => el % 2 === 0;
  const oddFilter = (el) => el % 2 !== 0;
  const positiveFilter = (el) => el > 0;
  const negativeFilter = (el) => el < 0;
  const stringFilter = (el) => typeof el === "string";
  const longerThanThree = (el) => typeof el === "string" && el.length > 3;

  it("filters an array for even numbers", () => {
    expect(filter([1, 2, 3, 4, 5, 6], evenFilter)).toEqual([2, 4, 6]);
  });

  it("filters an array for odd numbers", () => {
    expect(filter([1, 2, 3, 4, 5, 6], oddFilter)).toEqual([1, 3, 5]);
  });

  it("filters an array for positive numbers", () => {
    expect(filter([-2, -1, 0, 1, 2, 3], positiveFilter)).toEqual([1, 2, 3]);
  });

  it("filters an array for negative numbers", () => {
    expect(filter([-5, -4, -3, 0, 1, 2], negativeFilter)).toEqual([-5, -4, -3]);
  });

  it("filters an array for strings only", () => {
    expect(filter([1, "apple", true, "banana", null], stringFilter)).toEqual([
      "apple",
      "banana",
    ]);
  });

  it("filters strings longer than 3 characters", () => {
    expect(filter(["hi", "hello", "cat", "elephant"], longerThanThree)).toEqual(
      ["hello", "elephant"],
    );
  });

  it("returns an empty array if no element matches", () => {
    expect(filter([1, 3, 5], evenFilter)).toEqual([]);
  });

  it("does not use Array.prototype.filter", () => {
    filter([1, 2, 3, 4], evenFilter);
    expect(Array.prototype.filter.calls.any()).toBe(false);
  });
});
