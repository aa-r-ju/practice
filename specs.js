//🧪 More Specs for frequencySortedString

describe("frequencySortedString", () => {
  it("handles empty string", () => {
    expect(frequencySortedString("")).toBe("");
  });

  it("handles single character", () => {
    expect(frequencySortedString("a")).toBe("a");
  });

  it("handles all same characters", () => {
    expect(frequencySortedString("aaaa")).toBe("aaaa");
  });

  it("sorts characters by frequency", () => {
    expect(frequencySortedString("aabbbbcc")).toBe("bbbbaacc");
  });

  it("handles mixed case letters", () => {
    expect(frequencySortedString("AaBBb")).toBe("bbbaa");
  });

  it("handles spaces correctly", () => {
    expect(frequencySortedString("a a bb")).toBe("bbaa");
  });

  it("handles numbers", () => {
    expect(frequencySortedString("1122333")).toBe("3331122");
  });

  it("handles special characters", () => {
    expect(frequencySortedString("!!@@@")).toBe("@@@!!");
  });
});

//🧪 HARD MODE SPECS
describe("frequencySortedString - HARD MODE", () => {
  it("handles empty string", () => {
    expect(frequencySortedString("")).toBe("");
  });

  it("handles single character", () => {
    expect(frequencySortedString("x")).toBe("x");
  });

  it("keeps same order when frequencies are equal", () => {
    // a and b both appear 2 times
    // order in input: a first, then b
    expect(frequencySortedString("aabb")).toBe("aabb");
  });

  it("correctly sorts when multiple letters have different frequencies", () => {
    expect(frequencySortedString("cccaaaab")).toBe("aaaacccb");
  });

  it("handles long string", () => {
    const input = "aaabbbccccdddde";
    expect(frequencySortedString(input)).toBe("ccccddddaaabbbbe");
  });

  it("handles numbers mixed with letters", () => {
    expect(frequencySortedString("a11bb2222")).toBe("2222bb11a");
  });

  it("handles special characters", () => {
    expect(frequencySortedString("!!@@@###")).toBe("@@@###!!");
  });

  it("does not mutate the original string", () => {
    const input = "aabbbbcc";
    frequencySortedString(input);
    expect(input).toBe("aabbbbcc");
  });

  it("should call Array.prototype.sort", () => {
    spyOn(Array.prototype, "sort").and.callThrough();
    frequencySortedString("aabbbbcc");
    expect(Array.prototype.sort).toHaveBeenCalled();
  });

  it("should call Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    frequencySortedString("aabbbbcc");
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
