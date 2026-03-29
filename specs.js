//🔥 1. keyMultiplier
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("keyMultiplier", () => {
  it("is a function", () => {
    expect(typeof keyMultiplier).toBe("function");
  });

  it("returns a number", () => {
    const result = keyMultiplier.call({ a: 2, b: 3 });
    expect(typeof result).toBe("number");
  });

  it("multiplies all numeric values", () => {
    const result = keyMultiplier.call({
      a: 2,
      b: 3,
      c: "hello",
      d: 4,
    });
    expect(result).toBe(24); // 2 * 3 * 4
  });

  it("ignores non-number values", () => {
    const result = keyMultiplier.call({
      a: "hi",
      b: [1, 2],
      c: 5,
    });
    expect(result).toBe(5);
  });
});

//🔥 2. countStrings
describe("countStrings", () => {
  it("counts string values only", () => {
    const result = countStrings.call({
      a: "hello",
      b: 2,
      c: "world",
      d: true,
    });
    expect(result).toBe(2);
  });

  it("returns 0 if no strings", () => {
    const result = countStrings.call({
      a: 1,
      b: 2,
    });
    expect(result).toBe(0);
  });
});

//🔥 3. getLongestString
describe("getLongestString", () => {
  it("returns the longest string", () => {
    const result = getLongestString.call({
      a: "hi",
      b: "hello",
      c: "hey",
    });
    expect(result).toBe("hello");
  });

  it("ignores non-string values", () => {
    const result = getLongestString.call({
      a: 123,
      b: "JavaScript",
      c: [1, 2],
    });
    expect(result).toBe("JavaScript");
  });
});

//🔥 4. sumEvenNumbers
describe("sumEvenNumbers", () => {
  it("sums only even numbers", () => {
    const result = sumEvenNumbers.call({
      a: 2,
      b: 3,
      c: 4,
      d: 5,
    });
    expect(result).toBe(6); // 2 + 4
  });

  it("returns 0 if no even numbers", () => {
    const result = sumEvenNumbers.call({
      a: 1,
      b: 3,
    });
    expect(result).toBe(0);
  });
});

//🔥 5. HARD: groupByType 😈
describe("groupByType", () => {
  it("groups values by their type", () => {
    const result = groupByType.call({
      a: 1,
      b: "hello",
      c: true,
      d: 2,
    });

    expect(result).toEqual({
      number: [1, 2],
      string: ["hello"],
      boolean: [true],
    });
  });

  it("handles empty object", () => {
    const result = groupByType.call({});
    expect(result).toEqual({});
  });
});
