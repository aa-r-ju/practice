function limitedCounter(val) {
  let count = 0;
  return {
    increment: function () {
      if (count < val) {
        count++;
      }
    },
    getCount: function () {
      return count;
    },
  };
}

function toggleMaker(value) {
  let result = value;
  return {
    toggle: function () {
      result = !result;
    },
    getState: function () {
      return result;
    },
  };
}

function callLimiter(fun, limit) {
  let count = 0;
  return function () {
    if (count < limit) {
      count++;
      return fun();
    } else {
      return "limit reached";
    }
  };
}

let num = 0;
const add = () => {
  num += 1;
  return num;
};

const limited = callLimiter(add, 5);
console.log(limited());
console.log(limited());
console.log(limited());
console.log(limited());
console.log(limited());
console.log(limited());
