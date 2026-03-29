//💣 FAANG-STYLE SPECS
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("transformData", () => {
  let data;

  beforeEach(() => {
    data = [
      {
        user: "A",
        orders: [
          { product: "apple", price: 10 },
          { product: "banana", price: 5 },
        ],
      },
      {
        user: "B",
        orders: [{ product: "apple", price: 20 }],
      },
      {
        user: "A",
        orders: [{ product: "apple", price: 15 }],
      },
    ];
  });

  it("returns an object", () => {
    const result = transformData(data);
    expect(typeof result).toBe("object");
  });

  it("groups data by user", () => {
    const result = transformData(data);
    expect(result.A).toBeDefined();
    expect(result.B).toBeDefined();
  });

  it("calculates totalSpent per user", () => {
    const result = transformData(data);
    expect(result.A.totalSpent).toBe(30);
    expect(result.B.totalSpent).toBe(20);
  });

  it("groups product totals per user", () => {
    const result = transformData(data);
    expect(result.A.products.apple).toBe(25);
    expect(result.A.products.banana).toBe(5);
    expect(result.B.products.apple).toBe(20);
  });

  it("creates products object for each user", () => {
    const result = transformData(data);
    expect(typeof result.A.products).toBe("object");
  });

  it("uses reduce in implementation", () => {
    spyOn(Array.prototype, "reduce").and.callThrough();
    transformData(data);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

  it("handles empty input", () => {
    const result = transformData([]);
    expect(result).toEqual({});
  });
});
