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

Array.prototype.extractValue = function (key) {
  return this.map((val) => val[key]);
};

Array.prototype.filterByValue = function (key, val) {
  return this.filter((curr) => key in curr && curr[key] === val);
};

console.log([{ a: 1 }, { a: 2 }, { a: 1 }].filterByValue("a", 1));
