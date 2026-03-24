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

Array.prototype.findByKey = function (key) {
  return this.filter((cur) => key in cur);
};

console.log([{ a: 0 }, { b: 2 }, { a: 3 }].findByKey("a"));
