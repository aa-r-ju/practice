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
const fn = onceEvery(3, (x) => x * 2);
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
console.log(fn(2));
