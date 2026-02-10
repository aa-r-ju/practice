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
