function reduce(arr, callback, start) {
  let sum1 = start;
  for (let i = 0; i < arr.length; i++) {
    sum1 = callback(sum1, arr[i], i, arr);
  }
  return sum1;
}
const sum = (acc, el) => acc + el;
const multiply = (acc, el) => acc * el;
const join = (acc, el) => acc + el;

let arr = [1, 2, 3, 4];
let str = ["a", "b", "c"];
console.log(reduce(arr, sum, 0));
console.log(reduce(arr, multiply, 1));
console.log(reduce(str, join, ""));
