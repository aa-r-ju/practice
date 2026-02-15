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
function select(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function mapFilterCombo(arr, callback1, callback2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let val = callback1(arr[i]);
    if (callback2(val)) {
      newArr.push(val);
    }
  }
  return newArr;
}
let array = [1, 2, 3];
const multiplyByTwo = (x) => x * 2;
const greaterThanThree = (x) => x > 3;
console.log(mapFilterCombo(array, multiplyByTwo, greaterThanThree));
