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

function reduceRightSenteceBuilder(arr, str, fn) {
  let result = str;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = fn(result, arr[i]);
  }
  return result;
}
function reduceRightGroupByLength(arr, obj, fn) {
  let result = obj;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = fn(result, arr[i]);
  }
  return result;
}

let kk = reduceRightGroupByLength(["a", "bb", "c", "dd"], {}, (acc, val) => {
  const len = val.length;
  console.log(len);

  if (!acc[len]) acc[len] = [];
  acc[len].push(val);

  return acc;
});
console.log(kk);
