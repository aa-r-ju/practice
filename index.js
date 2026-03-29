function keyMultiplier() {
  let result = 1;
  let hasNum = false;

  for (let keys in this) {
    if (this.hasOwnProperty(keys) && typeof this[keys] === "number") {
      result *= this[keys];
      hasNum = true;
    }
  }
  return hasNum ? result : 0;
}

function countStrings() {
  let totalStr = 0;
  for (let keys in this) {
    if (this.hasOwnProperty(keys) && typeof this[keys] === "string") {
      totalStr++;
    }
  }
  return totalStr;
}

// const result = countStrings.call({
//   a: "hello",
//   b: 2,
//   c: "world",
//   d: true,
// });

const result = countStrings.call({
  a: 1,
  b: 2,
});
console.log(result);
