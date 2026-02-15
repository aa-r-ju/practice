function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}
let nums = [2, 4, 6, 8];
let arr = [];
let nums2 = [2, 4, 6, 7];
const isOdd = (num) => num % 2 !== 0;
console.log(some(nums, isOdd));
console.log(some(nums2, isOdd));
console.log(some(arr, isOdd));
