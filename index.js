// 🔥 1. once function (closure + state)
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// 🔥 2. memoize function (INTERVIEW LEVEL 😈)
function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (cache.hasOwnProperty(arg)) {
      return cache[arg];
    } else {
      const result = fn(arg);
      cache[arg] = result;
      return result;
    }
  };
}
let count = 0;

const square = memoize((x) => {
  count++;
  return x * x;
});
