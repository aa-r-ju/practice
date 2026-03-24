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

function limit(fn, times) {
  let count = 0;
  return function () {
    if (count < times) {
      count++;
      return fn();
    }
    return 0;
  };
}

let kk = limit(() => 10, 5);
console.log(kk());
console.log(kk());
console.log(kk());
console.log(kk());
console.log(kk());
console.log(kk());
