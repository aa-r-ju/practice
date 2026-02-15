function reverseMap(arr, callback) {
  if (Array.isArray(arr)) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
  }
  return callback(arr);
}
let val = 5;
let arr = [1, 2, 3, 4];
const negate = (num) => -num;
console.log(reverseMap(arr, negate));
console.log(reverseMap(val, negate));

console.log(reverseMap([1, 2, 3], (num) => num * num));
