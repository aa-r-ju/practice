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
console.log(someRecursive([1, 3, 5], (x) => x % 2 === 0));
console.log(someRecursive([1, 4, 5], (x) => x % 2 === 0));
console.log(someRecursive([1, [3, 5], [7, [8]]], (x) => x % 2 === 0));
