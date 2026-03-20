function memoize(fn) {
  let cache = {};
  return function (num) {
    if (cache.hasOwnProperty(num)) {
      return cache[num];
    }

    let result = fn(num);
    cache[num] = result;
    return result;
  };
}

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;

    const result = fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);

    return result;
  };
}

let count = 0;

let kk = throttle(() => {
  count++;
}, 100);
console.log(kk());
