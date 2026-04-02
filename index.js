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
  if (arr.length === 0) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let arrk = [1, [2, 3], 4];
console.log(flatten(arrk));
