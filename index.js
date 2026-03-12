function multiplier(num) {
  return function (val) {
    return num * val;
  };
}

function propertyChecker(para) {
  return function (obj) {
    return para in obj;
  };
}

function counterFactory() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

function keyRemover(para) {
  return function (obj) {
    delete obj[para];
    return obj;
  };
}

function once(fn) {
  let called = false;
  let result;

  return function () {
    if (!called) {
      result = fn();
      called = true;
    }

    return result;
  };
}
let count = 0;

const increment = once(() => {
  count++;
  return count;
});

console.log(increment());
console.log(increment());
