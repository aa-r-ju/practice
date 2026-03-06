Array.prototype.squareNumbers = function () {
  let newArr = [];
  this.forEach((element) => {
    newArr.push(element * element);
  });
  return newArr;
};

let nums = [1, 2, 3, 4];
console.log(nums.squareNumbers());
