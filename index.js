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

let myFunc = after(3, increment);

console.log(myFunc()); // undefined
console.log(myFunc()); // undefined
console.log(myFunc()); // 1
console.log(myFunc()); // 2
console.log(myFunc()); // 3
