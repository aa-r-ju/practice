//🧪 8. someRecursive (opposite of every)
function someRecursive(arr, fn) {
  if (arr.length === 0) {
    return false;
  }

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return someRecursive(first, fn) || someRecursive(rest, fn);
  }

  if (fn(first)) {
    return true;
  }

  return someRecursive(rest, fn);
}

//🧪 9. filterRecursive
function filterRecursiv(arr, fn) {
  if (arr.length === 0) {
    return [];
  }

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return filterRecursiv(first, fn).concat(filterRecursiv(rest, fn));
  }
  if (fn(first)) {
    return [first].concat(filterRecursiv(rest, fn));
  }
  return filterRecursiv(rest, fn);
}
console.log(filterRecursiv([1, 2, 3, 4], (x) => x % 2 === 0));
