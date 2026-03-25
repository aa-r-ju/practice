function reduceRight(arr, start, fn) {
  let acc = start;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

function reduceRightReverse(arr, container, fn) {
  let acc = container;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}
let kk = reduceRightReverse([1, 2, 3], [], (acc, val) => {
  acc.push(val);
  return acc;
});
console.log(kk);
