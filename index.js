function frequencySortedString(str) {
  if (str === "") {
    return "";
  }

  let newStr = str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (char !== " ") {
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});

  let array = [];
  for (let key in newStr) {
    for (let i = 0; i < newStr[key]; i++) {
      array.push(key);
    }
  }
  array.sort((a, b) => newStr[b] - newStr[a]);

  return array.join("");
}
console.log(frequencySortedString(""));
console.log(frequencySortedString("x"));
console.log(frequencySortedString("aabb"));
console.log(frequencySortedString("cccaaaab"));
console.log(frequencySortedString("aaabbbccccdddde"));
console.log(frequencySortedString("a11bb2222"));
console.log(frequencySortedString("!!@@@###"));
