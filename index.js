function callTwice(fun) {
  let first = fun();
  let second = fun();
  return second;
}

function once(fn) {
  let called = false;
  let savedValue;

  return function () {
    if (called === false) {
      savedValue = fn();
      called = true;
    }

    return savedValue;
  };
}

let count = 0;

function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

function compose() {
  let funs = Array.from(arguments);
  return function (num) {
    let sum = num;
    for (let i = funs.length - 1; i >= 0; i--) {
      sum = funs[i](sum);
    }
    return sum;
  };
}
const add2 = (x) => x + 2;
const double = (x) => x * 2;
const fn = compose(add2, double);
console.log(fn(5));
