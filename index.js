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

function after(num, fn) {
  let count = 0;

  return function (...args) {
    count++;

    if (count >= num) {
      return fn(...args);
    }
  };
}

let counter = 0;

function increment() {
  counter++;
  return counter;
}

function limitCalls(fn, num) {
  let count = 0;
  return function (...args) {
    count++;

    if (count <= num) {
      return fn(...args);
    } else {
      return "Limit reached";
    }
  };
}
let myFunc;
let add = (a, b) => a + b;

myFunc = limitCalls(add, 3);
console.log(myFunc(2, 3));
console.log(myFunc(5, 3));
console.log(myFunc(5, 4));
console.log(myFunc(55, 88));
