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

function reduceRightCountEvens(arr, start, fn) {
  let result = start;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = fn(result, arr[i]);
  }
  return result;
}

let kk = reduceRightCountEvens([1, 2, 3, 4, 6], 0, (acc, val) => {
  return val % 2 === 0 ? acc + 1 : acc;
});
console.log(kk);
