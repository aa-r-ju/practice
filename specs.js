//🧪 1️⃣ secondMostFrequentChar
describe("secondMostFrequentChar", () => {
  it("returns a string", () => {
    expect(typeof secondMostFrequentChar("aab")).toBe("string");
  });

  it("handles empty string", () => {
    expect(secondMostFrequentChar("")).toBe("");
  });

  it("returns second most frequent character", () => {
    expect(secondMostFrequentChar("aabbbbcc")).toBe("a");
  });

  it("is case insensitive", () => {
    expect(secondMostFrequentChar("AaBBb")).toBe("a");
  });

  it("ignores spaces", () => {
    expect(secondMostFrequentChar("a a b b b")).toBe("a");
  });

  it("should call Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    secondMostFrequentChar("hello");
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🧪 2️⃣ groupByLength
describe("groupByLength", () => {
  it("returns an object", () => {
    expect(typeof groupByLength("hi hello hey")).toBe("object");
  });

  it("handles empty string", () => {
    expect(groupByLength("")).toEqual({});
  });

  it("groups words by length", () => {
    expect(groupByLength("hi hello hey")).toEqual({
      2: ["hi"],
      3: ["hey"],
      5: ["hello"],
    });
  });

  it("should call Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    groupByLength("hello world");
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🧪 3️⃣ frequencySortedString (Harder 🔥)

describe("frequencySortedString", () => {
  it("handles empty string", () => {
    expect(frequencySortedString("")).toBe("");
  });

  it("sorts characters by frequency", () => {
    expect(frequencySortedString("aabbbbcc")).toBe("bbbbaacc");
  });
});
