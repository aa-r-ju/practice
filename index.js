function flattenArray(arr) {
  if (arr.length === 0) return [];

  let firstValue = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(firstValue)) {
    return flattenArray(firstValue).concat(flattenArray(rest));
  } else {
    return [firstValue].concat(flattenArray(rest));
  }
}

function sumNested(arr) {
  if (arr.length === 0) return 0;

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return sumNested(first) + sumNested(rest);
  } else {
    return first + sumNested(rest);
  }
}
console.log(sumNested([1, [2, 3], [4, [5]]]));
console.log(sumNested([[[1]], 2, [[3, [4]]]]));
