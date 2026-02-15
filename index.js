function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
const isGreaterThanTen = (num) => num > 10;
let ar = [5, 12, 8, 20];
let kk = [1, 2, 3];
console.log(find(ar, isGreaterThanTen));
console.log(find(kk, isGreaterThanTen));
