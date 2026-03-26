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

function reduceRightlastOccurance(arr, st, fn) {
  let acc = st;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}

let kk = reduceRightlastOccurance([1, 2, 3, 2, 1], null, (acc, val) => {
  if (acc !== null) return acc;
  return val === 2 ? val : null;
});
console.log(kk);
