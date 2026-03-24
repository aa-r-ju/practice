//🔥 1. Sum from right (basic)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("reduceRight - sum numbers", () => {
  it("adds numbers from right to left", () => {
    const result = reduceRight([1, 2, 3, 4], 0, (acc, val) => {
      return acc + val;
    });

    expect(result).toBe(10);
  });
});

//🔥 2. Reverse array using reduceRight
describe("reduceRight - reverse array", () => {
  it("reverses an array", () => {
    const result = reduceRight([1, 2, 3], [], (acc, val) => {
      acc.push(val);
      return acc;
    });

    expect(result).toEqual([3, 2, 1]);
  });
});

//🔥 3. Flatten array (IMPORTANT 😈)
describe("reduceRight - flatten array", () => {
  it("flattens one level of nested arrays", () => {
    const arr = [1, [2, 3], 4];

    const result = reduceRight(arr, [], (acc, val) => {
      return Array.isArray(val) ? acc.concat(val) : acc.concat(val);
    });

    expect(result).toEqual([4, 2, 3, 1]);
  });
});

//🔥 4. Build object from array
describe("reduceRight - build object", () => {
  it("creates object from key-value pairs", () => {
    const arr = [
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ];

    const result = reduceRight(arr, {}, (acc, val) => {
      acc[val[0]] = val[1];
      return acc;
    });

    expect(result).toEqual({ c: 3, b: 2, a: 1 });
  });
});

//🔥 5. Find last occurrence
describe("reduceRight - find last occurrence", () => {
  it("finds last matching value", () => {
    const arr = [1, 2, 3, 2, 1];

    const result = reduceRight(arr, null, (acc, val) => {
      if (acc !== null) return acc;
      return val === 2 ? val : null;
    });

    expect(result).toBe(2);
  });
});

//🔥 6. Count even numbers
describe("reduceRight - count evens", () => {
  it("counts even numbers", () => {
    const arr = [1, 2, 3, 4, 6];

    const result = reduceRight(arr, 0, (acc, val) => {
      return val % 2 === 0 ? acc + 1 : acc;
    });

    expect(result).toBe(3);
  });
});

//🔥 7. String builder (harder)
describe("reduceRight - sentence builder", () => {
  it("builds sentence from words", () => {
    const words = ["world", "hello"];

    const result = reduceRight(words, "", (acc, val) => {
      return acc + " " + val;
    });

    expect(result.trim()).toBe("hello world");
  });
});

//🔥 8. Group by length (INTERVIEW LEVEL 😈)
describe("reduceRight - group by length", () => {
  it("groups strings by length", () => {
    const arr = ["a", "bb", "c", "dd"];

    const result = reduceRight(arr, {}, (acc, val) => {
      const len = val.length;

      if (!acc[len]) acc[len] = [];
      acc[len].push(val);

      return acc;
    });

    expect(result).toEqual({
      1: ["c", "a"],
      2: ["dd", "bb"],
    });
  });
});
