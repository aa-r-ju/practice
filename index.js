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

function reduceRightFlatten(arr, con, fn) {
  let acc = con;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

let kk = reduceRightFlatten([1, [2, 3], 4], [], (acc, val) => {
  return Array.isArray(val) ? acc.concat(val) : acc.concat(val);
});
console.log(kk);
