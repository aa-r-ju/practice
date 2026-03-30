function onceEvery(times, fn) {
  let count = 0;

  return function (val) {
    count++;
    if (count === times) {
      count = 0;
      return fn(val);
    }
    return "Not yet";
  };
}

function limitCalls(fn, limit) {
  let count = 0;
  return function (num) {
    count++;
    if (count <= limit) {
      return fn(num);
    }

    return "Limit reached";
  };
}

function after(n, fn) {
  let count = 0;

  return function (num) {
    count++;
    if (count < n) {
      return;
    }
    return fn(num);
  };
}

function cycle(...fns) {
  let count = 0;

  return function (num) {
    const fn = fns[count % fns.length];
    count++;
    return fn(num);
  };
}

function memoize(fn) {
  const cache = {};

  return function (val) {
    if (cache.hasOwnProperty(val)) {
      return cache[val];
    }

    const result = fn(val);
    cache[val] = result;
    return result;
  };
}

function throttle(fn, times) {
  let count = 0;
  return function (...arg) {
    count++;
    if (count % times !== 0) {
      return "Throttled";
    }
    return fn(...arg);
  };
}
const fn = throttle((x) => x * 2, 3);
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
