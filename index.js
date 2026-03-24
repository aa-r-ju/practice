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
let kk = once(() => 5);
console.log(kk());
console.log(kk());
console.log(kk());
