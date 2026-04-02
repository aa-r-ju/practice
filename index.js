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

// 🔥 3. debounce function (timing logic)
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // cancel previous timer
    timer = setTimeout(() => {
      // set a new timer
      fn.apply(this, args); // call the original function
    }, delay);
  };
}

// 🔥 4. flatten function (arrays)

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 🔥 5. groupBy function (OBJECT + REDUCE)
function groupBy(arr, fn) {
  return arr.reduce((acc, char) => {
    let key = fn(char);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(char);
    return acc;
  }, {});
}

function limitCalls(fn, n) {
  let count = 0;
  return function () {
    if (count < n) {
      count++;
      return fn();
    } else {
      return null;
    }
  };
}

function pipe(...fns) {
  return function (initialValue) {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}
