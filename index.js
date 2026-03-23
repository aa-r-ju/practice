Array.prototype.onlyNumbers = function () {
  return this.filter((curr) => {
    return typeof curr === "number";
  });
};

console.log([1, "a", 2, "b", 3].onlyNumbers());
console.log(["x", true, {}, 10].onlyNumbers());
