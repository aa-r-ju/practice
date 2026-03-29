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

const result = keyMultiplier.call({
  a: "hi",
  b: [1, 2],
  c: 5,
});
console.log(result);
