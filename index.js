function once(fn) {
  let count = false;
  let result;
  return function (...args) {
    if (!count) {
      count = true;
      result = fn(...args);
    }
    return result;
  };
}

let myFunc;
let add = (a, b) => a + b;
myFunc = once(add);
console.log(myFunc(2, 3));
console.log(myFunc(9, 3));
console.log(myFunc(4, 9));
