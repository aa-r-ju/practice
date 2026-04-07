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
function findMax(arr) {
  if (arr.length === 1) {
    return Array.isArray(arr[0]) ? findMax(arr[0]) : arr[0];
  }

  let first = arr[0];
  let rest = arr.slice(1);

  let firstMax = Array.isArray(first) ? findMax(first) : first;
  let restMax = findMax(rest);

  return firstMax < restMax ? restMax : first;
}

function everyRecursive(arr, cb) {
  if (arr.length === 0) return true;

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return everyRecursive(first, cb) && everyRecursive(rest, cb);
  }

  if (!cb(first)) {
    return false;
  }

  return everyRecursive(rest, cb);
}
