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

const fn = cycle(
  (x) => x + 1,
  (x) => x * 2,
  (x) => x - 3,
);
console.log(fn(5));
console.log(fn(5));
console.log(fn(5));
console.log(fn(5));
