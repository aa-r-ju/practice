//🧠 1️⃣ zipStrings
describe("zipStrings", () => {
  it("is a function", () => {
    expect(typeof zipStrings).toBe("function");
  });

  it("zips two equal strings", () => {
    expect(zipStrings("abc", "123")).toBe("a1b2c3");
  });

  it("stops at shortest string", () => {
    expect(zipStrings("hello", "12")).toBe("h1e2");
  });

  it("works with three strings", () => {
    expect(zipStrings("abc", "XYZ", "123")).toBe("aX1bY2cZ3");
  });
});

//🧠 2️⃣ alternateCaseMerge
describe("alternateCaseMerge", () => {
  it("is a function", () => {
    expect(typeof alternateCaseMerge).toBe("function");
  });

  it("merges and forces case", () => {
    expect(alternateCaseMerge("HELLO", "world")).toBe("hWeOlRlLoD");
  });

  it("adds leftovers from longer string", () => {
    expect(alternateCaseMerge("abcde", "XY")).toBe("aXbYcde");
  });
});

//🧠 3️⃣ columnRead

describe("columnRead", () => {
  it("is a function", () => {
    expect(typeof columnRead).toBe("function");
  });

  it("joins two strings fully", () => {
    expect(columnRead("abc", "XYZ")).toBe("abcXYZ");
  });

  it("joins multiple strings", () => {
    expect(columnRead("a", "b", "c")).toBe("abc");
  });
});

//🧠 4️⃣ reverseInterleave

describe("reverseInterleave", () => {
  it("is a function", () => {
    expect(typeof reverseInterleave).toBe("function");
  });

  it("interleaves and reverses", () => {
    expect(reverseInterleave("ab", "12")).toBe("2b1a");
  });

  it("works with three strings", () => {
    expect(reverseInterleave("abc", "XYZ", "123")).toBe("3Zc2Yb1Xa");
  });
});

//🧠 5️⃣ 🔥 Harder One — diagonalMerge

describe("diagonalMerge", () => {
  it("is a function", () => {
    expect(typeof diagonalMerge).toBe("function");
  });

  it("merges diagonally", () => {
    expect(diagonalMerge("abcd", "1234")).toBe("a12b23c34d4");
  });
});
