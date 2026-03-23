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

Array.prototype.sumValues = function () {
  return this.reduce((acc, char) => {
    acc += char;
    return acc;
  }, 0);
};

console.log([1, 2, 3, 4].sumValues());
