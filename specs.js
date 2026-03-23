//🔥 1. onlyNumbers (filter practice)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("onlyNumbers", () => {
  it("is added to Array.prototype", () => {
    expect(typeof Array.prototype.onlyNumbers).toBe("function");
  });

  it("returns an array", () => {
    expect(Array.isArray([1, "a", 2].onlyNumbers())).toBe(true);
  });

  it("returns only numbers from the array", () => {
    expect([1, "a", 2, "b", 3].onlyNumbers()).toEqual([1, 2, 3]);
    expect(["x", true, {}, 10].onlyNumbers()).toEqual([10]);
  });

  it("calls Array.prototype.filter", () => {
    spyOn(Array.prototype, "filter").and.callThrough();
    [1, "a", 2].onlyNumbers();
    expect(Array.prototype.filter).toHaveBeenCalled();
  });
});

//🔥 2. doubleValues (map practice)
describe("doubleValues", () => {
  it("is added to Array.prototype", () => {
    expect(typeof Array.prototype.doubleValues).toBe("function");
  });

  it("returns an array", () => {
    expect(Array.isArray([1, 2, 3].doubleValues())).toBe(true);
  });

  it("doubles each value", () => {
    expect([1, 2, 3].doubleValues()).toEqual([2, 4, 6]);
  });

  it("calls Array.prototype.map", () => {
    spyOn(Array.prototype, "map").and.callThrough();
    [1, 2].doubleValues();
    expect(Array.prototype.map).toHaveBeenCalled();
  });
});

//🔥 3. sumValues (reduce practice)
describe("sumValues", () => {
  it("is added to Array.prototype", () => {
    expect(typeof Array.prototype.sumValues).toBe("function");
  });

  it("returns a number", () => {
    expect(typeof [1, 2, 3].sumValues()).toBe("number");
  });

  it("returns sum of values", () => {
    expect([1, 2, 3, 4].sumValues()).toBe(10);
  });

  it("calls Array.prototype.reduce", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    [1, 2].sumValues();
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

//🔥 4. findByKey (object + filter)
describe("findByKey", () => {
  it("is added to Array.prototype", () => {
    expect(typeof Array.prototype.findByKey).toBe("function");
  });

  it("returns an array", () => {
    expect(Array.isArray([{ a: 1 }].findByKey("a"))).toBe(true);
  });

  it("returns objects that contain the key", () => {
    const arr = [{ a: 1 }, { b: 2 }, { a: 3 }];
    expect(arr.findByKey("a")).toEqual([{ a: 1 }, { a: 3 }]);
  });

  it("calls Array.prototype.filter", () => {
    spyOn(Array.prototype, "filter").and.callThrough();
    [{ a: 1 }].findByKey("a");
    expect(Array.prototype.filter).toHaveBeenCalled();
  });
});

//🔥 5. extractValue (map + objects)
describe("extractValue", () => {
  it("is added to Array.prototype", () => {
    expect(typeof Array.prototype.extractValue).toBe("function");
  });

  it("returns an array", () => {
    expect(Array.isArray([{ a: 1 }].extractValue("a"))).toBe(true);
  });

  it("extracts values for given key", () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expect(arr.extractValue("a")).toEqual([1, 2, 3]);
  });

  it("calls Array.prototype.map", () => {
    spyOn(Array.prototype, "map").and.callThrough();
    [{ a: 1 }].extractValue("a");
    expect(Array.prototype.map).toHaveBeenCalled();
  });
});

//🔥 6. filterByValue (advanced filter)
describe("filterByValue", () => {
  it("is added to Array.prototype", () => {
    expect(typeof Array.prototype.filterByValue).toBe("function");
  });

  it("returns objects that match key/value", () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 1 }];

    expect(arr.filterByValue("a", 1)).toEqual([{ a: 1 }, { a: 1 }]);
  });

  it("calls Array.prototype.filter", () => {
    spyOn(Array.prototype, "filter").and.callThrough();
    [{ a: 1 }].filterByValue("a", 1);
    expect(Array.prototype.filter).toHaveBeenCalled();
  });
});
