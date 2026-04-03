//🔥 1. range + sum challenge
function range(start, end) {
  let arr = [];
  if (start > end) {
    return arr;
  }

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

function sum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
