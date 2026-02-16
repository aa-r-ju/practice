function reduce(arr, callback, initialValue) {
  let accumulator;
  let startIndex;

  // If initialValue is provided
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  }
  // If initialValue is NOT provided
  else {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[0];
    startIndex = 1;
  }

  // Loop from correct index
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

const sum = (acc, el) => acc + el;

let arr = [1, 2, 3, 4];
console.log(reduce(arr, sum));
