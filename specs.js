describe("callAndReturn - single function", () => {
  it("calls a function and returns its return value", () => {
    const hello = () => "Hello!";
    expect(callAndReturn(hello)).toBe("Hello!");
  });

  it("works with different return types", () => {
    const num = () => 42;
    expect(callAndReturn(num)).toBe(42);
  });
});

//second

describe("callAllFunctions - multiple functions", () => {
  const f1 = () => "A";
  const f2 = () => "B";
  const f3 = () => "C";

  it("calls multiple functions and concatenates their results", () => {
    expect(callAllFunctions(f1, f2, f3)).toBe("ABC");
  });

  it("works with a single function", () => {
    expect(callAllFunctions(f1)).toBe("A");
  });
});

///third

describe("callWithArguments - passing arguments to functions", () => {
  const sum = (a, b) => a + b;
  const product = (a, b) => a * b;

  it("calls functions with provided arguments", () => {
    expect(callWithArguments(sum, 2, 3)).toBe(5);
    expect(callWithArguments(product, 2, 3)).toBe(6);
  });

  it("can handle more than one function (call only first)", () => {
    expect(callWithArguments(sum, 4, 5, product)).toBe(9);
  });
});

//fourth

describe("chainFunctions - chaining function results", () => {
  const f1 = (x) => x + 2;
  const f2 = (x) => x * 3;
  const f3 = (x) => x - 1;

  it("applies functions in order to an initial value", () => {
    expect(chainFunctions(5, f1, f2, f3)).toBe(20); // ((5+2)*3)-1 = 20
  });

  it("works with only one function", () => {
    expect(chainFunctions(10, f1)).toBe(12);
  });
});
