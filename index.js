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

const kk = accumulator(0);
console.log(kk(5));
console.log(kk(5));
console.log(kk(5));
