function targetNum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let remaining = target - arr[i];

    if (map[remaining] !== undefined) {
      return [map[remaining], i];
    }

    map[arr[i]] = i;
  }
}
console.log(targetNum([2, 7, 11, 15], 9));
console.log(targetNum([3, 2, 4], 6));
