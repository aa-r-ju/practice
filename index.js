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

function reverseString(str) {
  if (str.length === 0) return "";
  let firstval = str[str.length - 1];
  let rest = str.slice(0, str.length - 1);

  return firstval + reverseString(rest);
}

function countOccurrences(arr, val) {
  if (arr.length === 0) return 0;

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return countOccurrences(first, val) + countOccurrences(rest, val);
  } else if (first === val) {
    return 1 + countOccurrences(rest, val);
  } else {
    return countOccurrences(rest, val);
  }
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2));
console.log(countOccurrences([1, 2, 3], 4));
