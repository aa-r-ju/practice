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

const fn = after(3, (x) => x + 10);
console.log(fn(1));
console.log(fn(1));
console.log(fn(1));
console.log(fn(2));
