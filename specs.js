// 🧪 Level 2 – Spec 1️⃣: mostFrequentChar

describe("mostFrequentChar", () => {
  it("returns a string", () => {
    expect(typeof mostFrequentChar("aab")).toBe("string");
  });

  it("handles empty string", () => {
    expect(mostFrequentChar("")).toBe("");
  });

  it("returns the most frequent character", () => {
    expect(mostFrequentChar("aabbbbcc")).toBe("b");
  });

  it("is case insensitive", () => {
    expect(mostFrequentChar("AaBBb")).toBe("b");
  });

  it("ignores spaces", () => {
    expect(mostFrequentChar("a a b b b")).toBe("b");
  });

  it("should call Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    mostFrequentChar("hello");
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
