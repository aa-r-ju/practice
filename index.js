function toggler(...args) {
  let index = 0;

  return function () {
    let value = args[index % args.length];
    index++;
    return value;
  };
}

function accumulator(num) {
  let result = num;
  return function (val = 0) {
    result += val;
    return result;
  };
}

function callLimiterWithReset(fn, limitNum) {
  let count = 0;
  return {
    call(num) {
      if (count < limitNum) {
        count++;
        return fn(num);
      } else {
        return "Limit reached";
      }
    },
    reset() {
      count = 0;
    },
  };
}

let kk = callLimiterWithReset((x) => x * 2, 2);
console.log(kk.call(2));
console.log(kk.call(5));
console.log(kk.call(9));
console.log(kk.call(10));
console.log(kk.reset());
console.log(kk.call(6));
