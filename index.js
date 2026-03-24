function once(fn) {
  let value = false;
  let result;
  return function () {
    if (!value) {
      value = true;
      result = fn();
    }
    return result;
  };
}

function thrice(fn) {
  let count = 0;
  return function () {
    if (count < 3) {
      count++;
      return fn();
    }
    return 0;
  };
}

const fn = thrice(() => 5);
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
