// 🧪 Pigify – Extra Challenge Specs
describe("pigify - EXTRA TESTS", () => {
  it("handles empty string", () => {
    expect(pigify("")).toBe("");
  });

  it("handles single letter vowel", () => {
    expect(pigify("a")).toBe("aay");
  });

  it("handles single letter consonant", () => {
    expect(pigify("b")).toBe("bay");
  });

  it("handles uppercase words", () => {
    expect(pigify("Apple")).toBe("Appleay");
  });

  it("handles mixed case words", () => {
    expect(pigify("Banana")).toBe("ananaBay");
  });

  it("handles words ending in punctuation", () => {
    expect(pigify("hello!")).toBe("ellohay!");
  });

  it("handles sentence with punctuation", () => {
    expect(pigify("Hello world!")).toBe("elloHay orldway!");
  });

  it("handles multiple spaces between words", () => {
    expect(pigify("eat   pie")).toBe("eatay   iepay");
  });

  it("handles numbers inside words", () => {
    expect(pigify("h3llo")).toBe("3llohay");
  });

  it("handles words with no vowels", () => {
    expect(pigify("rhythms")).toBe("rhythmsay");
  });

  it("handles long consonant cluster", () => {
    expect(pigify("strength")).toBe("engthstray");
  });

  it("handles 'yt' at beginning like vowel", () => {
    expect(pigify("yttria")).toBe("yttriaay");
  });

  it("handles 'xr' at beginning like vowel", () => {
    expect(pigify("xray")).toBe("xrayay");
  });
});
