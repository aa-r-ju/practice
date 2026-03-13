describe("once with this", () => {
  let obj;

  beforeEach(() => {
    obj = {
      value: 10,
      add: once(function (x) {
        return this.value + x;
      }),
    };
  });

  it("should return correct value first time", () => {
    expect(obj.add(5)).toBe(15);
  });

  it("should return same result next time", () => {
    obj.add(5);
    expect(obj.add(20)).toBe(15);
  });
});

//2️⃣ once should work for multiple functions separately
describe("once multiple instances", () => {
  let addOnce;
  let multiplyOnce;

  beforeEach(() => {
    addOnce = once((a, b) => a + b);
    multiplyOnce = once((a, b) => a * b);
  });

  it("should run each function independently", () => {
    expect(addOnce(2, 3)).toBe(5);
    expect(multiplyOnce(2, 3)).toBe(6);
  });

  it("should not affect each other", () => {
    addOnce(2, 3);

    expect(addOnce(10, 10)).toBe(5);
    expect(multiplyOnce(3, 3)).toBe(9);
  });
});

//3️⃣ once should count how many times it was attempted
describe("once with attempts counter", () => {
  let fn;
  let wrapped;

  beforeEach(() => {
    fn = jasmine.createSpy("fn").and.returnValue(10);
    wrapped = once(fn);
  });

  it("should call original function once", () => {
    wrapped();
    wrapped();
    wrapped();

    expect(fn.calls.count()).toBe(1);
  });

  it("should always return first result", () => {
    wrapped();
    expect(wrapped()).toBe(10);
  });
});
