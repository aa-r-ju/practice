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

const fn = limitCalls((x) => x * 2, 2);
console.log(fn(7));
console.log(fn(9));
console.log(fn(6));
console.log(fn(6));
console.log(fn(6));
console.log(fn(6));
