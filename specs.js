// 🧠 1️⃣ Bracket Cleaner (Stack Logic)
describe("bracketCleaner", () => {
  it("returns an array", () => {
    expect(Array.isArray(bracketCleaner(["(", ")"]))).toBe(true);
  });

  it("removes matching adjacent brackets", () => {
    expect(bracketCleaner(["(", ")"])).toEqual([]);
    expect(bracketCleaner(["[", "]"])).toEqual([]);
    expect(bracketCleaner(["{", "}"])).toEqual([]);
  });

  it("does not remove non-matching brackets", () => {
    expect(bracketCleaner(["(", "]"])).toEqual(["(", "]"]);
  });

  it("handles complex cases", () => {
    expect(bracketCleaner(["(", "(", ")", ")"])).toEqual([]);
    expect(bracketCleaner(["(", "[", "]", ")"])).toEqual([]);
    expect(bracketCleaner(["(", "[", "]"])).toEqual(["("]);
  });

  it("uses reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    bracketCleaner(["(", ")"]);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🧠 2️⃣ Consecutive Duplicate Remover
describe("removeConsecutiveDuplicates", () => {
  it("returns an array", () => {
    expect(Array.isArray(removeConsecutiveDuplicates([1]))).toBe(true);
  });

  it("removes consecutive duplicates", () => {
    expect(removeConsecutiveDuplicates([1, 1])).toEqual([1]);
    expect(removeConsecutiveDuplicates([1, 1, 2, 2])).toEqual([1, 2]);
  });

  it("does not remove non-consecutive duplicates", () => {
    expect(removeConsecutiveDuplicates([1, 2, 1])).toEqual([1, 2, 1]);
  });

  it("handles complex cases", () => {
    expect(removeConsecutiveDuplicates([1, 1, 2, 3, 3, 3, 2, 2])).toEqual([
      1, 2, 3, 2,
    ]);
  });

  it("uses reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    removeConsecutiveDuplicates([1, 1]);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🧠 3️⃣ Cancel Out Numbers
describe("cancelOutZeroSum", () => {
  it("returns an array", () => {
    expect(Array.isArray(cancelOutZeroSum([1]))).toBe(true);
  });

  it("removes adjacent numbers that sum to zero", () => {
    expect(cancelOutZeroSum([3, -3])).toEqual([]);
    expect(cancelOutZeroSum([2, -2, 5])).toEqual([5]);
  });

  it("handles complex cases", () => {
    expect(cancelOutZeroSum([1, 2, -2, -1])).toEqual([]);
    expect(cancelOutZeroSum([5, 3, -3, 2])).toEqual([5, 2]);
  });

  it("uses reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    cancelOutZeroSum([3, -3]);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🧠 4️⃣ Word Canceller
describe("wordCanceller", () => {
  it("returns an array", () => {
    expect(Array.isArray(wordCanceller(["GO"]))).toBe(true);
  });

  it("removes previous word when STOP appears", () => {
    expect(wordCanceller(["GO", "STOP"])).toEqual([]);
    expect(wordCanceller(["GO", "LEFT", "STOP"])).toEqual(["GO"]);
  });

  it("handles multiple STOPs", () => {
    expect(wordCanceller(["A", "B", "STOP", "STOP"])).toEqual([]);
  });

  it("uses reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    wordCanceller(["GO", "STOP"]);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
