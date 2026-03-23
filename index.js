Array.prototype.onlyNumbers = function () {
  return this.filter((curr) => {
    return typeof curr === "number";
  });
};

Array.prototype.doubleValues = function () {
  return this.map((val) => {
    return typeof val === "number" ? val * 2 : val;
  });
};

console.log([1, 2, 3].doubleValues());
console.log([2, "a", 4, 6].doubleValues());
