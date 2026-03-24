function reduceRight(arr, start, fn) {
  let acc = start;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

let result = reduceRight([1, 2, 3, 4], 0, (acc, val) => acc + val);
console.log(result);
