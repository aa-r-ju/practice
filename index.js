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

function reduceRightObj(arr, obj, fn) {
  let acc = obj;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }

  return acc;
}

let kk = reduceRightObj(
  [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ],
  {},
  (acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  },
);
console.log(kk);
