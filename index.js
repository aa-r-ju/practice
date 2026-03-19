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
