Array.prototype.squareNumbers = function () {
  let newArr = [];
  this.forEach((element) => {
    newArr.push(element * element);
  });
  return newArr;
};

Array.prototype.onlyStrings = function () {
  let newArr = [];
  this.forEach((element) => {
    if (typeof element === "string") {
      newArr.push(element);
    }
  });
  return newArr;
};

console.log([1, "hi", true, "hello", 5].onlyStrings());
console.log([1, 2, 3].onlyStrings());
