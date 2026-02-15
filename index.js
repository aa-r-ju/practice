function filter(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const evenFilter = (el) => el % 2 === 0;
const oddFilter = (el) => el % 2 !== 0;
const positiveFilter = (el) => el > 0;
const negativeFilter = (el) => el < 0;
const stringFilter = (el) => typeof el === "string";
const longerThanThree = (el) => typeof el === "string" && el.length > 3;
console.log(filter([1, 2, 3, 4, 5, 6], evenFilter));
console.log(filter([1, 2, 3, 4, 5, 6], oddFilter));
console.log(filter([-2, -1, 0, 1, 2, 3], positiveFilter));
console.log(filter([-5, -4, -3, 0, 1, 2], negativeFilter));
console.log(filter([1, "apple", true, "banana", null], stringFilter));
