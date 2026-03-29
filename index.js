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

function sumEvenNumbers() {
  let sum = 0;
  for (let key in this) {
    if (
      this.hasOwnProperty(key) &&
      typeof this[key] === "number" &&
      this[key] % 2 === 0
    ) {
      sum += this[key];
    }
  }
  return sum;
}

function groupByType() {
  let result = {};

  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      const type = typeof this[key];

      if (!result[type]) {
        result[type] = [];
      }

      result[type].push(this[key]);
    }
  }

  return result;
}

const result = groupByType.call({
  a: 1,
  b: "hello",
  c: true,
  d: 2,
});
console.log(result);
