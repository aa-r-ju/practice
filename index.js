function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

let obj = {
  value: 10,
  add: once(function (x) {
    return this.value + x;
  }),
};
console.log(once(obj));
