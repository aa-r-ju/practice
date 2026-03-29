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

function getLongestString() {
  let longest = "";
  for (let key in this) {
    if (
      typeof this[key] === "string" &&
      this.hasOwnProperty(key) &&
      this[key].length > longest.length
    ) {
      longest = this[key];
    }
  }
  return longest;
}
const result = getLongestString.call({
  a: "hi",
  b: "hello",
  c: "hey",
});

const result1 = getLongestString.call({
  a: 123,
  b: "JavaScript",
  c: [1, 2],
});

console.log(result);
console.log(result1);
