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

const square = memoize((x) => x * x);
console.log(square(2));
console.log(square(3));
