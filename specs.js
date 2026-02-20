/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("Practice Calculator using reverse polish notation", () => {
  let calc;

  beforeEach(() => {
    // Create a new instance before each test
    calc = new RPNCalculator();
  });

  it("should add two numbers", () => {
    calc.push(10);
    calc.push(5);
    calc.plus();
    expect(calc.value()).toBe(15);
  });

  it("should subtract two numbers", () => {
    calc.push(20);
    calc.push(7);
    calc.minus();
    expect(calc.value()).toBe(13);
  });

  it("should multiply two numbers", () => {
    calc.push(4);
    calc.push(6);
    calc.times();
    expect(calc.value()).toBe(24);
  });

  it("should divide two numbers", () => {
    calc.push(12);
    calc.push(4);
    calc.divide();
    expect(calc.value()).toBe(3);
  });

  it("should chain multiple operations", () => {
    // Example: 2 3 + 4 *
    calc.push(2);
    calc.push(3);
    calc.plus(); // 5
    calc.push(4);
    calc.times(); // 20
    expect(calc.value()).toBe(20);
  });

  it("should throw error if not enough values for operation", () => {
    expect(() => calc.plus()).toThrow("rpnCalculatorInstance is empty");
    expect(() => calc.minus()).toThrow("rpnCalculatorInstance is empty");
    expect(() => calc.times()).toThrow("rpnCalculatorInstance is empty");
    expect(() => calc.divide()).toThrow("rpnCalculatorInstance is empty");
  });

  it("all methods should be on prototype", () => {
    expect(typeof RPNCalculator.prototype.plus).toBe("function");
    expect(typeof RPNCalculator.prototype.minus).toBe("function");
    expect(typeof RPNCalculator.prototype.times).toBe("function");
    expect(typeof RPNCalculator.prototype.divide).toBe("function");
    expect(typeof RPNCalculator.prototype.value).toBe("function");
  });

  it("should be instance of RPNCalculator", () => {
    expect(calc instanceof RPNCalculator).toBe(true);
  });

  it("should handle negative numbers", () => {
    calc.push(-5);
    calc.push(3);
    calc.plus();
    expect(calc.value()).toBe(-2);
  });

  it("should handle decimals", () => {
    calc.push(2.5);
    calc.push(1.5);
    calc.plus();
    expect(calc.value()).toBe(4);
  });

  it("should handle multiple sequential operations", () => {
    calc.push(10);
    calc.push(2);
    calc.divide(); // 5
    calc.push(3);
    calc.times(); // 15
    calc.push(4);
    calc.minus(); // 11
    expect(calc.value()).toBe(11);
  });
});

/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("Advanced RPNCalculator practice specs", () => {
  let calc;

  beforeEach(() => {
    calc = new RPNCalculator();
  });

  it("adds multiple numbers sequentially", () => {
    calc.push(1);
    calc.push(2);
    calc.plus(); // 3
    calc.push(3);
    calc.plus(); // 6
    calc.push(4);
    calc.plus(); // 10
    expect(calc.value()).toBe(10);
  });

  it("performs subtraction with negative result", () => {
    calc.push(5);
    calc.push(10);
    calc.minus(); // -5
    expect(calc.value()).toBe(-5);
  });

  it("performs multiplication with zero", () => {
    calc.push(7);
    calc.push(0);
    calc.times(); // 0
    expect(calc.value()).toBe(0);
  });

  it("performs division resulting in decimal", () => {
    calc.push(7);
    calc.push(2);
    calc.divide(); // 3.5
    expect(calc.value()).toBe(3.5);
  });

  it("chains multiple operations", () => {
    // 5 2 + 3 * 4 -
    calc.push(5);
    calc.push(2);
    calc.plus(); // 7
    calc.push(3);
    calc.times(); // 21
    calc.push(4);
    calc.minus(); // 17
    expect(calc.value()).toBe(17);
  });

  it("throws error if not enough values for plus", () => {
    calc.push(1);
    expect(() => calc.plus()).toThrow("rpnCalculatorInstance is empty");
  });

  it("throws error if not enough values for minus", () => {
    expect(() => calc.minus()).toThrow("rpnCalculatorInstance is empty");
  });

  it("works with negative and decimal numbers", () => {
    calc.push(-2.5);
    calc.push(3.5);
    calc.plus(); // 1
    expect(calc.value()).toBe(1);
  });

  it("performs sequential operations with mix of +, -, *, /", () => {
    // 8 2 / 3 + 4 * 5 -
    calc.push(8);
    calc.push(2);
    calc.divide(); // 4
    calc.push(3);
    calc.plus(); // 7
    calc.push(4);
    calc.times(); // 28
    calc.push(5);
    calc.minus(); // 23
    expect(calc.value()).toBe(23);
  });

  it("stack is independent between instances", () => {
    const calc2 = new RPNCalculator();
    calc.push(1);
    calc2.push(100);
    expect(calc.value()).toBe(1);
    expect(calc2.value()).toBe(100);
  });
});
