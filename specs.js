// 🧪 1️⃣ consonantsCount
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("consonantsCount", () => {
  it("returns an Object", () => {
    expect(typeof consonantsCount("Hello")).toBe("object");
  });

  it("handles empty string", () => {
    expect(consonantsCount("")).toEqual({
      total: 0,
    });
  });

  it("counts consonants correctly", () => {
    expect(consonantsCount("Hello")).toEqual({
      h: 1,
      l: 2,
      total: 3,
    });
  });

  it("ignores numbers and symbols", () => {
    expect(consonantsCount("h3ll0!!")).toEqual({
      h: 1,
      l: 2,
      total: 3,
    });
  });

  it("is case insensitive", () => {
    expect(consonantsCount("ABC")).toEqual({
      b: 1,
      c: 1,
      total: 2,
    });
  });

  it("should call Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    consonantsCount("Hello");
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🧪 2️⃣ characterFrequency
describe("characterFrequency", () => {
  it("returns an Object", () => {
    expect(typeof characterFrequency("abc")).toBe("object");
  });

  it("handles empty string", () => {
    expect(characterFrequency("")).toEqual({});
  });

  it("counts characters correctly", () => {
    expect(characterFrequency("aab")).toEqual({
      a: 2,
      b: 1,
    });
  });

  it("ignores spaces", () => {
    expect(characterFrequency("a a b")).toEqual({
      a: 2,
      b: 1,
    });
  });

  it("is case insensitive", () => {
    expect(characterFrequency("Aa")).toEqual({
      a: 2,
    });
  });

  it("should call Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    characterFrequency("hello");
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🧪 3️⃣ wordLengthStats

describe("wordLengthStats", () => {
  it("returns an Object", () => {
    expect(typeof wordLengthStats("hello world")).toBe("object");
  });

  it("handles empty string", () => {
    expect(wordLengthStats("")).toEqual({});
  });

  it("counts word lengths correctly", () => {
    expect(wordLengthStats("hi hello hey")).toEqual({
      2: 1,
      3: 1,
      5: 1,
    });
  });

  it("should call Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    wordLengthStats("hello world");
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
